import { createParamDecorator } from '@nestjs/common';

export const SignIn = createParamDecorator((data, [root, args, ctx, info]) => {
  return { username: args.username, password: args.password };
});
