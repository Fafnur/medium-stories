import { Injectable } from '@angular/core';

import { LocalStorage } from '@medium-stories/storage';

import { AuthStorage } from '../interfaces/auth-storage.interface';

export const authStorageKeys: { [key: string]: string } = {
  accessToken: 'msactn'
};

@Injectable()
export class BaseAuthStorage implements AuthStorage {
  constructor(private storage: LocalStorage) {}

  clear(): void {
    for (const prop of Object.values(authStorageKeys)) {
      this.storage.removeItem(prop);
    }
  }

  getAccessToken(): string | null {
    return this.storage.getItem(authStorageKeys.accessToken) || null;
  }

  removeAccessToken(): void {
    this.storage.removeItem(authStorageKeys.accessToken);
  }

  setAccessToken(accessToken: string): void {
    this.storage.setItem(authStorageKeys.accessToken, accessToken);
  }
}
