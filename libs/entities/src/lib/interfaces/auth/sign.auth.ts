/**
 * Sign in payload
 */
export interface SignInPayload {
  /**
   * Username
   */
  username: string;

  /**
   * Password
   */
  password: string;
}

/**
 * Sign in response (Jwt)
 */
export interface SignInResponse {
  /**
   * Access token
   */
  accessToken: string;

  /**
   * Expires in
   */
  expiresIn: number;

  /**
   * User id
   */
  id: number;
}
