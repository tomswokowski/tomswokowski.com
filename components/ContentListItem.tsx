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

  const truncatedDescriptionShort =
    description.length > 65
      ? description.substring(0, 65) + '...'
      : description;

  const truncatedDescriptionLong =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description;

  return (
    <div className="border-b mx-auto max-w-screen-md flex flex-col">
      <Link href={href}>
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
              <p className="text-sm block md:hidden">
                {truncatedDescriptionShort}
              </p>
              <p className="text-sm hidden md:block">
                {truncatedDescriptionLong}
              </p>
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
