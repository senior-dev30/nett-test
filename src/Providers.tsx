import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';

type ProvidersProps = {
  children?: React.ReactNode;
};
const appId = import.meta.env.VITE_ALGOLIA_APP_ID as string;
const searchKey = import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY as string;
const algoliaIndex = import.meta.env.VITE_ALGOLIA_INDEX as string;
const searchClient = algoliasearch(appId, searchKey);

export const AppProviders = ({ children }: ProvidersProps) => {
  return (
    <InstantSearch searchClient={searchClient} indexName={algoliaIndex}>
      {children}
    </InstantSearch>
  );
};
