import { useHits, UseHitsProps } from 'react-instantsearch-hooks';
import Hit from './Hit';

const CustomHits = (props: UseHitsProps) => {
  const { hits } = useHits(props);

  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {hits?.map((hit, index) => (
          <Hit hit={hit} key={index} />
        ))}
      </div>
    </>
  );
};

export default CustomHits;
