import { User } from './user.types';

/**
 * Represents a page of Posts returned from the GraphQL API
 */
export interface PostsPage {
  /** The Posts returned in this page */
  data: Post[];
  /** Links to the first, previous, next, and last pages of Posts */
  links: PaginationLinks;
}

/**
 * Represents a Post returned from the GraphQL API
 */
export interface Post {
  /** The ID of the Post */
  id: string;
  /** The title of the Post */
  title: string;
  /** The body text of the Post */
  body: string;
  /** The User who wrote this Post */
  user: User;
}

/**
 * A pair of page and limit values representing a page limit pair.
 */
export interface PageLimitPair {
  page: number;
  limit: number;
}

/**
 * Links to the first, previous, next, and last pages for a paginated query.
 */
export interface PaginationLinks {
  first: PageLimitPair;
  prev: PageLimitPair | null;
  next: PageLimitPair | null;
  last: PageLimitPair;
}

/**
 * Options for pagination.
 */
export interface GetPostsOptions {
  query?: string;
  page?: number;
  limit?: number;
}

/**
 * Options for searching.
 */
export interface SearchOptions {
  q: string;
}

/**
 * Response from the GetPostsPagination query.
 */
export interface GetPostsResponse {
  posts: PostsPage;
}

/**
 * DeletePost mutation response.
 */
export interface DeletePostResponse {
  deletePost: boolean;
}

/**
 * CreatePost request input.
 */
export interface CreatePostRequest {
  title: string;
  body: string;
}

/**
 * CreatePost mutation reponse.
 */
export interface CreatePostResponse {
  id: string;
  title: string;
  body: string;
}
