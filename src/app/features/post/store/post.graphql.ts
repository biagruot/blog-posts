import { gql } from 'apollo-angular';

/**
 * Create a new post
 * @param {string} title - The title of the new post
 * @param {string} body - The body of the new post
 */
export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;
