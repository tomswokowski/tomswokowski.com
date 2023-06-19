import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentDetail from '../../components/ContentDetail';

const Project: NextPage<{
  project: {
    slug: string;
    title: string;
    content: string;
    description: string;
    datePosted: string;
    author: string;
    type: string;
  };
}> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ContentDetail content={project} />;
};

type ProjectType = {
  slug: string;
  title: string;
  content: string;
  description: string;
  datePosted: string;
  author: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content?type=projects`,
  );
  const projects = await res.json();
  const project = projects.find((p: ProjectType) => p.slug === params?.slug);

  // If the project doesn't exist, return 404
  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content?type=projects`,
  );
  const projects = await res.json();
  return {
    paths: projects.map((project: ProjectType) => ({
      params: { slug: project.slug },
    })),
    fallback: true,
  };
};

export default Project;
