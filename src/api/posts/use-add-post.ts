import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { Post } from './types';

type Variables = { title: string; body: string; userId: number };
type Response = Post;

export const useAddPost = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    client({
      url: 'posts/add',
      method: 'POST',
      data: variables,
    }).then((response) => response.data),
});

// export const getAssertList = createMutation<Response, Variables, AxiosError>({
//   mutationFn: async (variables) =>
//     client({
//       url: '/app/assertList',
//       method: 'get',
//       data: variables,
//     }).then((response) => response.data),
// });

// export const useAddPost = createMutation<Response, Variables, AxiosError>({
//   mutationFn: async (variables) =>
//     client({
//       url: 'posts/add',
//       method: 'POST',
//       data: variables,
//     }).then((response) => response.data),
// });
