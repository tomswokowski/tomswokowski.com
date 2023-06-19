import type { GetStaticProps, NextPage } from 'next';
import ContentList from '../../components/ContentList';
import { getAllContent } from '../../lib/getAllContent';

type ProjectType = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

const Projects: NextPage<{ projects: ProjectType[] }> = ({ projects }) => {
  return <ContentList contentItems={projects} />;
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
