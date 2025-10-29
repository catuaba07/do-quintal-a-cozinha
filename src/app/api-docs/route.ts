import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    url: '/openapi.json',
  },
  theme: 'default',
  layout: 'modern',
  defaultOpenAllTags: false,
};

export const GET = ApiReference(config);
