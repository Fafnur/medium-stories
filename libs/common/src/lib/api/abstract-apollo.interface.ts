import { Apollo } from 'apollo-angular';
import { ApolloError, ApolloQueryResult } from 'apollo-client';
import { DocumentNode } from 'graphql';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

/**
 * Apollo request
 */
export interface ApolloRequest {
  /**
   * Request entities
   */
  keys: string[];

  /**
   * Request query
   */
  query: DocumentNode;
}

/**
 * API Response
 */
export type ApolloResponse<T = any, R extends ApolloError = ApolloError> = Observable<T | R>;

/**
 * Extract data from apollo query result
 * @param result Apollo query result
 * @param entitiesKeys Simple key or array keys for extract
 */
export function extractApolloResponse<T = any>(result: ApolloQueryResult<any>, entitiesKeys?: string[]): T {
  const keys = !entitiesKeys ? Object.keys(entitiesKeys) : entitiesKeys;

  return keys.length === 1 ? result.data[keys[0]] : result.data;
}
