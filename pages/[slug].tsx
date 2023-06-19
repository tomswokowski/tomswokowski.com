import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentDetail from '../components/ContentDetail';
import { getAllContent } from '../lib/getAllContent';

type PostType = {
  slug: string;
  title: string;
  content: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

const Post: NextPage<{ post: PostType }> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ContentDetail content={post} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllContent('posts');

  // Define slug here and check if it's undefined
  const slug = params?.slug;
  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const post = posts.find((p: PostType) => p.slug === slug);

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
    paths: posts.map((post: PostType) => ({
      params: { slug: post.slug },
    })),
    fallback: true,
  };
};

export default Post;
