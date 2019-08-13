/**
 * Throttle
 *
 * @param delay number delay
 */
export function Throttle(delay: number = 100): MethodDecorator {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;

    descriptor.value = function(...args) {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      original.apply(this, arguments);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          descriptor.value.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, delay);
    };

    return descriptor;
  };
}
