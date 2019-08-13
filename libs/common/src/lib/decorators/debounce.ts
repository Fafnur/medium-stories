/**
 * Debounce
 *
 * @param delay number delay
 */
export function Debounce(delay: number = 100): MethodDecorator {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let timer = null;
    const original = descriptor.value;

    descriptor.value = function(...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        original.apply(this, args);
        timer = null;
      }, delay);
    };

    return descriptor;
  };
}
