import { useState, useEffect } from 'react';
import ContentList from './ContentList';

type ContentItem = {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  author: string;
  type: string;
};

type SearchModalProps = {
  onClose: () => void;
};

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}/api/content`
    : '/api/content';

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const postsRes = await fetch(`${apiUrl}?type=posts`);
      const posts: ContentItem[] = await postsRes.json();
      const projectsRes = await fetch(`${apiUrl}?type=projects`);
      const projects: ContentItem[] = await projectsRes.json();
      setContentItems([...posts, ...projects]);
    };

    fetchContent();
  }, []);

  // Filter the content based on the search term
  const filteredContentItems = contentItems.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div
      id="searchModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-700"
    >
      <div className="relative w-full max-w-2xl max-h-full mx-auto mt-6">
        {/* Modal content */}
        <div className="relative ">
          {/* Modal header */}
          <div className="flex items-start justify-between ">
            {/* Search Input */}
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 border-b focus:outline-none focus:bg-transparent"
            />

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-2 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>

      <div className="py-2 relative w-full max-w-2xl max-h-full mx-auto mt-6">
        {searchValue === ''
          ? 'Search tomswokowski.com...'
          : filteredContentItems.length === 0
          ? `No results for: ${searchValue}`
          : ''}
      </div>

      {/* Search Results */}
      {searchValue !== '' && filteredContentItems.length > 0 && (
        <ContentList contentItems={filteredContentItems} />
      )}
    </div>
  );
};

export default SearchModal;
