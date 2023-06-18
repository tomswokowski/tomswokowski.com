import type { GetStaticProps, NextPage } from 'next';
import ContentList from '../../components/ContentList';
import { getAllContent } from '../../utils/content';

type ProjectProps = {
  projects: { slug: string; title: string; content: string }[];
};

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <>
      <ContentList
        content={projects}
        type="projects"
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllContent('projects');
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
