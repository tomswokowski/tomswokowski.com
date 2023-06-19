import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentDetail from '../../components/ContentDetail';
import { getAllContent } from '../../lib/getAllContent';

type ProjectType = {
  slug: string;
  title: string;
  content: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

const Project: NextPage<{ project: ProjectType }> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ContentDetail content={project} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await getAllContent('projects');

  // Define slug here and check if it's undefined
  const slug = params?.slug;
  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const project = projects.find((p: ProjectType) => p.slug === slug);

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
  const projects = await getAllContent('projects');
  return {
    paths: projects.map((project: ProjectType) => ({
      params: { slug: project.slug },
    })),
    fallback: true,
  };
};

export default Project;
