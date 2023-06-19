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
  onSelect?: () => void;
};

const ContentList: React.FC<ContentListProps> = ({
  contentItems,
  onSelect,
}) => {
  return (
    <>
      {contentItems.map((item) => (
        <div
          key={item.slug}
          className={item.type === 'posts' ? 'py-4 mx-3' : 'mb-6'}
        >
          <ContentListItem
            title={item.title}
            description={item.description}
            datePosted={item.datePosted}
            author={item.author}
            slug={item.slug}
            type={item.type}
            onSelect={onSelect}
          />
        </div>
      ))}
    </>
  );
};

export default ContentList;
