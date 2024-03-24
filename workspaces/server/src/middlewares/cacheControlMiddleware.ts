import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();

  const { path } = c.req;
  if (path.startsWith('/assets') || path.startsWith('/images') || path.startsWith('/static')) {
    c.res.headers.append('Cache-Control', 'public, max-age=31536000, immutable');
    return;
  } else {
    c.res.headers.append('Cache-Control', 'private');
    c.res.headers.append('Cache-Control', 'no-store');
  }
});
