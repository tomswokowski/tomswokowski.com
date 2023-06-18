import { useState } from 'react';

const SearchModal: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
      />
      {/* Search Results should be listed here */}
    </div>
  );
};

export default SearchModal;
