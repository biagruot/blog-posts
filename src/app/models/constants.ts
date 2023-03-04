/**
 * The number of posts to display per page.
 * @type {number}
 * @constant
 */
export const PAGE_SIZE = 15;

/**
 * UI status for the feed feature.
 * @type {string}
 */
export enum FeedUiStatus {
  IS_LOADING = 'IS_LOADING',
  IS_LOADED = 'IS_LOADED',
  HAS_ERROR = 'HAS_ERROR',
  NO_RESULTS = 'NO_RESULTS',
}
