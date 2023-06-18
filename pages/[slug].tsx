import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentLayout from '../components/ContentLayout';
import { getContentData, getAllContent } from '../utils/content';

const Post: NextPage<{
  post: { slug: string; title: string; content: string };
}> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ContentLayout content={post} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getContentData('posts', params?.slug as string);

  // If the post doesn't exist, return 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllContent('posts');
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

export default Post;
