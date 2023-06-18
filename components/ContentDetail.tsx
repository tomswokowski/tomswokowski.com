import React from 'react';

type ContentDetailProps = {
  title: string;
  content: string;
};

const ContentDetail: React.FC<ContentDetailProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContentDetail;
