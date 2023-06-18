import Link from 'next/link';
import React from 'react';

type ContentListItemProps = {
  title: string;
  content: string;
  slug: string;
  type: string;
};

const ContentListItem: React.FC<ContentListItemProps> = ({
  title,
  content,
  slug,
  type,
}) => {
  const href = type === 'posts' ? `/${slug}` : `/${type}/${slug}`;

  return (
    <div>
      <Link href={href}>
        <h2>{title}</h2>
        <p>{content}</p>
      </Link>
    </div>
  );
};

export default ContentListItem;
