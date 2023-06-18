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
    <div>
      <Link href={href}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{datePosted}</p>
        <p>{author}</p>
      </Link>
    </div>
  );
};

export default ContentListItem;
