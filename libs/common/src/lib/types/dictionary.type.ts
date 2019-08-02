export interface DictionaryNum<T = any> {
  [id: number]: T;
}

export interface Dictionary<T = any> extends DictionaryNum<T> {
  [id: string]: T;
}
