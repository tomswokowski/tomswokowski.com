type ContentItem = {
  slug: string;
  title: string;
  content: string;
};

type ContentLayoutProps = {
  content: ContentItem;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.content}</p>
    </div>
  );
};

export default ContentLayout;
