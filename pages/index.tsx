import type { GetStaticProps, NextPage } from 'next';
import ContentList from '../components/ContentList';

type PostType = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
};

const Home: NextPage<{
  posts: PostType[];
}> = ({ posts }) => {
  return (
    <>
      <ContentList
        contentItems={posts}
        type="posts"
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content?type=posts`,
  );
  const posts: PostType[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
