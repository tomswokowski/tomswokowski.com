import React from 'react';
import ContentListItem from './ContentListItem';

type ContentItem = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
};

type ContentListProps = {
  contentItems: ContentItem[];
  type: string;
};

const ContentList: React.FC<ContentListProps> = ({ contentItems, type }) => {
  return (
    <div className="mx-3 py-4">
      {contentItems.map((item) => (
        <ContentListItem
          key={item.slug}
          title={item.title}
          description={item.description}
          datePosted={item.datePosted}
          author={item.author}
          slug={item.slug}
          type={type}
        />
      ))}
    </div>
  );
};

export default ContentList;
