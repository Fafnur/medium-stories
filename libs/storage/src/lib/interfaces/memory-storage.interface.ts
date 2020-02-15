import { AbstractStorage } from './abstract-storage.interface';

/**
 * Memory Storage
 *
 * @description
 * It simple storage for emulate Web Storage API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 */
export abstract class MemoryStorage extends AbstractStorage {}
