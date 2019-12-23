/**
 * Extend options
 * @param defaultOptions Default options
 * @param options Current options
 * @param fields Sub objects fields name
 */
export function extendOptions<T = object>(defaultOptions: Partial<T>, options?: Partial<T>, fields: string[] = ['relations']): Partial<T> {
  const subObjects = {};
  if (!options) {
    options = {};
  }

  fields.forEach(field => {
    if (Array.isArray(defaultOptions[field] || options[field])) {
      subObjects[field] = [...(defaultOptions[field] || []), ...(options[field] || [])];
    } else {
      subObjects[field] = { ...(defaultOptions[field] || {}), ...(options[field] || {}) };
    }
  });

  return {
    ...defaultOptions,
    ...options,
    ...subObjects
  };
}
