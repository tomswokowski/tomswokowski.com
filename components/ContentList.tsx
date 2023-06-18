import React from 'react';
import ContentDetail from './ContentDetail';

type ContentItem = {
  slug: string;
  title: string;
  content: string;
};

type ContentListProps = {
  content: ContentItem[];
  type: string;
};

const ContentList: React.FC<ContentListProps> = ({ content, type }) => {
  return (
    <div>
      {content.map((item) => (
        <ContentDetail
          key={item.slug}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default ContentList;
