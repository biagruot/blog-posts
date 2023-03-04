import { gql } from 'apollo-angular';

/**
 * Search for posts
 * @param {string} query - The search query
 * @param {number} page - The page to fetch, starting from 1
 * @param {number} limit - The maximum number of items to fetch per page
 */
export const SEARCH_POSTS = gql`
  query SearchPosts($query: String!, $page: Int!, $limit: Int!) {
    posts(
      options: {
        search: { q: $query }
        paginate: { page: $page, limit: $limit }
      }
    ) {
      data {
        id
        title
        body
        user {
          username
        }
      }
      links {
        first {
          page
          limit
        }
        prev {
          page
          limit
        }
        next {
          page
          limit
        }
        last {
          page
          limit
        }
      }
    }
  }
`;

/**
 * Update a post
 * @param {number} id - The ID of the post to update
 * @param {string} title - The new title of the post
 * @param {string} body - The new body of the post
 */
export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(id: $id, input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

/**
 * Delete a post
 * @param {number} id - The ID of the post to delete
 */
export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
