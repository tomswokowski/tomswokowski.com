import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { promisify } from 'util';

const fsReadFilePromise = promisify(fs.readFile);

// Directories for the content
const contentDirectories = {
  posts: path.join(process.cwd(), 'content', 'posts'),
  projects: path.join(process.cwd(), 'content', 'projects'),
};

export async function getAllContent(type: 'posts' | 'projects') {
  const directory = contentDirectories[type];
  const fileNames = fs.readdirSync(directory);

  const allContentData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      try {
        const fullPath = path.join(directory, fileName);
        const fileContents = await fsReadFilePromise(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        if (!matterResult.data.title) {
          throw new Error(`The title is not defined in ${fileName}`);
        }

        return {
          slug,
          type: matterResult.data.type,
          title: matterResult.data.title,
          description: matterResult.data.description,
          datePosted: matterResult.data.datePosted,
          author: matterResult.data.author,
          content: contentHtml,
        };
      } catch (error) {
        console.error(`Error processing file ${fileName}:`, error);
        throw error;
      }
    })
  );
  return allContentData;
}
