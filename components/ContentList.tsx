import React from 'react';
import ContentListItem from './ContentListItem';

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
        <ContentListItem
          key={item.slug}
          title={item.title}
          content={item.content}
          slug={item.slug}
          type={type}
        />
      ))}
    </div>
  );
};

export default ContentList;
