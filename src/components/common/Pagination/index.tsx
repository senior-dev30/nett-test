import React from 'react';
import { usePagination, UsePaginationProps } from 'react-instantsearch-hooks';
import PaginationItem from './PaginationItem';
import { cx } from '~/utils';

type PaginationProps = React.ComponentProps<'div'> & UsePaginationProps;

const Pagination = (props: PaginationProps) => {
  const { refine, createURL, pages, currentRefinement, nbPages, isFirstPage, isLastPage } =
    usePagination(props);

  return (
    <div className="flex justify-center">
      <ul className="flex">
        <PaginationItem
          aria-label="First"
          value={0}
          createURL={createURL}
          refine={refine}
          className="p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full"
          isDisabled={isFirstPage}
        >
          ‹‹
        </PaginationItem>

        <PaginationItem
          aria-label="Previous"
          value={currentRefinement - 1}
          createURL={createURL}
          refine={refine}
          isDisabled={isFirstPage}
          className="p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full"
        >
          ‹
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem
            key={page}
            aria-label={String(page)}
            value={page}
            createURL={createURL}
            refine={refine}
            className={cx(
              'p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full',
              currentRefinement === page && 'bg-blue text-white',
            )}
          >
            {page + 1}
          </PaginationItem>
        ))}

        <PaginationItem
          aria-label="Next"
          value={currentRefinement + 1}
          createURL={createURL}
          refine={refine}
          className="p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full"
          isDisabled={isLastPage}
        >
          ›
        </PaginationItem>

        <PaginationItem
          aria-label="Last"
          value={nbPages - 1}
          createURL={createURL}
          refine={refine}
          className="p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full"
          isDisabled={isLastPage}
        >
          ››
        </PaginationItem>
      </ul>
    </div>
  );
};

export default Pagination;
