import { usePagination } from 'react-instantsearch-hooks-web';
import { isModifierClick } from '~/utils';

type PaginationItemProps = React.ComponentProps<'a'> &
  Pick<ReturnType<typeof usePagination>, 'refine' | 'createURL'> & {
    value: number;
    isDisabled?: boolean;
  };

const PaginationItem = (props: PaginationItemProps) => {
  const { className, href, value, createURL, refine, isDisabled, ...rest } = props;

  return (
    <li className={className}>
      <a
        className="ais-Pagination-link"
        href={createURL(value)}
        onClick={(event) => {
          if (isModifierClick(event)) {
            return;
          }

          event.preventDefault();
          !isDisabled && refine(value);
        }}
        {...rest}
      />
    </li>
  );
};

export default PaginationItem;
