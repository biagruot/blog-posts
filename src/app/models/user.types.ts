/**
 * Represents a User returned from the GraphQL API
 */
export interface User {
  /** The ID of the User */
  id: string;
  /** The name of the User */
  name: string;
  /** The username of the User */
  username: string;
  /** The email address of the User */
  email: string;
}
