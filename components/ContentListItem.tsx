import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ShareContent from './ShareContent';

type ContentListItemProps = {
  title: string;
  slug: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
  onSelect?: () => void;
};

const ContentListItem: React.FC<ContentListItemProps> = ({
  title,
  slug,
  description,
  datePosted,
  author,
  type,
  onSelect,
}) => {
  const [showShareContent, setShowShareContent] = useState(false);
  const href = type === 'posts' ? `/${slug}` : `/${type}/${slug}`;
  const router = useRouter();

  const handleItemClick = (e: React.MouseEvent) => {
    if (onSelect) {
      onSelect();
    }
    e.preventDefault();
    router.push(href);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareContent(true);
  };

  const handleClose = () => {
    setShowShareContent(false);
  };

  return (
    <>
      <div
        className="border-b mx-auto max-w-screen-md flex flex-col"
        onClick={handleItemClick}
      >
        {type === 'projects' ? (
          <div className="flex flex-col w-full">
            <img
              src="https://placehold.co/75x75"
              alt="placeholder"
              className="w-full h-56 md:h-80 object-cover"
            />
            <div className="px-2 my-4">
              <h2 className="text-md font-semibold pb-2">{title}</h2>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        ) : (
          <div className="py-4 flex justify-between items-start w-full">
            <div className="w-2/3 md:w-1/2">
              <h2 className="text-md font-semibold pb-2">{title}</h2>
              <p className="text-sm line-clamp-2">{description}</p>
            </div>
            <img src="https://placehold.co/100x100" alt="placeholder" />
          </div>
        )}

        <div
          className={`flex justify-between items-center text-sm ${
            type === 'projects' ? 'px-2 mb-6' : 'pb-4'
          }`}
        >
          <div className="flex justify-start space-x-1 text-xs">
            <time>{datePosted}</time>
            <span> • </span>
            <span>{author}</span>
          </div>
          <button onClick={handleShareClick}>
            <FontAwesomeIcon
              icon={faShareFromSquare}
              className="text-primary"
              size="sm"
            />
          </button>
        </div>
      </div>
      {showShareContent && (
        <ShareContent
          url={window.location.origin + href}
          onClose={handleClose}
          contentName={title}
        />
      )}
    </>
  );
};

export default ContentListItem;
