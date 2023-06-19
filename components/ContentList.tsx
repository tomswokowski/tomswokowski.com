import React from 'react';
import ContentListItem from './ContentListItem';

type ContentItem = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

type ContentListProps = {
  contentItems: ContentItem[];
};

const ContentList: React.FC<ContentListProps> = ({ contentItems }) => {
  return (
    <>
      {contentItems.map((item) => (
        <div
          key={item.slug}
          className={item.type === 'posts' ? 'py-4 mx-3' : ''}
        >
          <ContentListItem
            title={item.title}
            description={item.description}
            datePosted={item.datePosted}
            author={item.author}
            slug={item.slug}
            type={item.type}
          />
        </div>
      ))}
    </>
  );
};

export default ContentList;
