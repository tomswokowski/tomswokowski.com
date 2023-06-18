import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

type ContentListItemProps = {
  title: string;
  slug: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

const ContentListItem: React.FC<ContentListItemProps> = ({
  title,
  slug,
  description,
  datePosted,
  author,
  type,
}) => {
  const href = type === 'posts' ? `/${slug}` : `/${type}/${slug}`;

  return (
    <div className="p-4 border-b mx-auto max-w-screen-md">
      <Link href={href}>
        <div className="flex justify-between">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <img src="https://placehold.co/75x75" alt="placeholder" />
        </div>

        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex space-x-2">
            <time>{datePosted}</time>
            <span> • </span>
            <span>{author}</span>
          </div>
          <button>
            <FontAwesomeIcon
              icon={faShareFromSquare}
              className="text-primary"
              size="sm"
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ContentListItem;
