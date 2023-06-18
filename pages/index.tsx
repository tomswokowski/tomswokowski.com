import type { GetStaticProps, NextPage } from 'next';
import ContentList from '../components/ContentList';
import { getAllContent } from '../utils/content';

const Home: NextPage<{
  posts: {
    slug: string;
    title: string;
    description: string;
    datePosted: string;
    author: string;
  }[];
}> = ({ posts }) => {
  return (
    <>
      <ContentList contentItems={posts} type="posts" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllContent('posts');
  return {
    props: {
      posts,
    },
  };
};

export default Home;
