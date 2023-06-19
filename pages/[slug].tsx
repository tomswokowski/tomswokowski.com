import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentDetail from '../components/ContentDetail';

const Post: NextPage<{
  post: {
    slug: string;
    title: string;
    content: string;
    description: string;
    datePosted: string;
    author: string;
    type: string;
  };
}> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ContentDetail content={post} />;
};

type PostType = {
  slug: string;
  title: string;
  content: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content?type=posts`,
  );
  const posts = await res.json();
  const post = posts.find((p: PostType) => p.slug === params?.slug);

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content?type=posts`,
  );
  const posts = await res.json();
  return {
    paths: posts.map((post: PostType) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

export default Post;
