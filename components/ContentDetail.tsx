import React from 'react';

type ContentItem = {
  slug: string;
  title: string;
  content: string;
};

type ContentDetailProps = {
  content: ContentItem;
};

const ContentDetail: React.FC<ContentDetailProps> = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  );
};

export default ContentDetail;
