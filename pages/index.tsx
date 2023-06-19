import type { GetStaticProps, NextPage } from 'next';
import ContentList from '../components/ContentList';
import { getAllContent } from '../lib/getAllContent';

type PostType = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

const Home: NextPage<{
  posts: PostType[];
}> = ({ posts }) => {
  return (
    <>
      <ContentList contentItems={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: PostType[] = await getAllContent('posts');

  return {
    props: {
      posts,
    },
  };
};

export default Home;
