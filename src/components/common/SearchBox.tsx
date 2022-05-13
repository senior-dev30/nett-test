import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web';
import Close from '../icons/Close';

const SearchBox = (props: UseSearchBoxProps) => {
  const { refine } = useSearchBox(props);
  const [searchKey, setSearchKey] = useState<string>('');

  useEffect(() => {
    refine(searchKey);
  }, [searchKey]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <>
      <div className="relative flex items-center">
        <input
          type="text"
          className="form-control block w-full pl-3 pr-8 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 outline-none"
          onChange={handleSearch}
          placeholder="Search"
          value={searchKey}
        />
        {searchKey && (
          <button
            className="absolute right-12px"
            onClick={() => {
              setSearchKey('');
            }}
          >
            <Close />
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBox;
