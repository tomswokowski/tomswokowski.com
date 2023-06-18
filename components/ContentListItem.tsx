import React from 'react';

type ContentListItemProps = {
  title: string;
  content: string;
};

const ContentListItem: React.FC<ContentListItemProps> = ({
  title,
  content,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContentListItem;
