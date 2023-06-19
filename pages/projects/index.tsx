import type { GetStaticProps, NextPage } from 'next';
import ContentList from '../../components/ContentList';

type ProjectType = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

const Projects: NextPage<{
  projects: ProjectType[];
}> = ({ projects }) => {
  return (
    <>
      <ContentList contentItems={projects} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/content?type=projects`,
  );
  const projects: ProjectType[] = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
