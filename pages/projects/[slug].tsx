import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentDetail from '../../components/ContentDetail';
import { getContentData, getAllContent } from '../../utils/content';

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getContentData('projects', params?.slug as string);

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
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: true,
  };
};

export default Project;
