/**
 * Auth storage
 */
export abstract class AuthStorage {
  /**
   * Clear auth storage
   */
  abstract clear(): void;

  /**
   * Return accessToken
   */
  abstract getAccessToken(): string | null;

  /**
   * Remove accessToken
   */
  abstract removeAccessToken(): void;

  /**
   * Set accessToken
   */
  abstract setAccessToken(accessToken: string): void;
}
