import './SearchBox.css'

const SearchBox = ({ filter, onFilterChange }) => (
  <input className='search'
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder="Search contacts"
  />
);

export default SearchBox;
