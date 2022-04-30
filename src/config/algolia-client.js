import algoliasearch from 'algoliasearch'

import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_INDEX_NAME
} from '../contants'

export const algoliaClient = algoliasearch(
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_API_KEY
)

export const algoliaClientIndex = algoliaClient.initIndex(ALGOLIA_INDEX_NAME)
