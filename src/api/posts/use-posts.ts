import { client } from '../common';
import type { Post } from './types';

type Response = Post[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

// export const usePosts = createQuery<Response, Variables, AxiosError>({
//   queryKey: ['posts'],
//   fetcher: () => {
//     return client
//       .get(`/app/getChainAndWallet`)
//       .then((response) => response.data);
//   },
// });
export const getList = async () => {
  return client.get(`/app/getChainAndWallet`).then((response) => response.data);
};
export const getAssertList = async (chainId: any, address: any) => {
  return client
    .get(`/app/assertList?chainId=${chainId}&address=${address}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log('Api call error', error);
    });
};
export const getTxList = async (chainId: any, address: any) => {
  return client
    .get(`/app/getTxList?chainId=${chainId}&address=${address}`)
    .then((response) => response.data);
};
export const transform = async (
  chainId: any,
  fromAddress: any,
  toAddress: any
) => {
  return client
    .get(
      `/app/transform?chainId=${chainId}&fromAddress=${fromAddress}&toAddress=${toAddress}`
    )
    .then((response) => response.data);
};
