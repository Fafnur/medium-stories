/**
 * User interface
 */
export interface User {
  /**
   * Created at
   */
  created: number;

  /**
   * Email
   */
  email?: string;

  /**
   * Phone
   */
  phone: string;

  /**
   * ID
   */
  id: number;

  /**
   * Password
   */
  password: string;

  /**
   * Username
   */
  username: string;

  /**
   * Updated at
   */
  updated: number;
}

/**
 * User roles interface
 */
export interface UserRoles {
  /**
   * User roles
   */
  roles: string[];

  /**
   * Check role
   * @param role Name role
   */
  hasRole(role: string): boolean;
}
