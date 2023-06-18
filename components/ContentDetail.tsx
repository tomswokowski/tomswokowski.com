import React from 'react';

type ContentItem = {
  title: string;
  slug: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
  content: string;
};

type ContentDetailProps = {
  content: ContentItem;
};

const ContentDetail: React.FC<ContentDetailProps> = ({ content }) => {
  return (
    <div className="px-4 py-4">
      <div className="mb-6 pb-6 border-b">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary pb-3">
            {content.title}
          </h1>
          <p className="text-sm font-light">{content.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1 text-xs">
            <div className="font-semibold">{content.author}</div>
            <div className="font-light">Last Updated: {content.datePosted}</div>
          </div>
          <button className="py-2 px-4 text-xs bg-transparent border border-gray-500 rounded-full hover:bg-gray-200 transition-colors duration-150">
            Share
          </button>
        </div>
      </div>
      <div
        className="prose prose-sm md:prose-lg"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
};

export default ContentDetail;
