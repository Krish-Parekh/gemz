import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import { AuthServerUrl } from "../constants/strings";
import { postJsonFetcher } from "../lib/fetcher";

export default function useMutation<ExtraArgs, Data>(
    key: string,
    fetcher: (_key: string, _options?: { arg: ExtraArgs }) => Promise<Data>,
    config?: SWRMutationConfiguration<Data, Error, string, ExtraArgs>
  ) {
    return useSWRMutation<Data, Error, string, ExtraArgs>(key, fetcher, {
      onError(error) {
        console.warn(error.message);
      },
      throwOnError: false,
      ...config,
    });
  }
  
  export function useAuthServerMutation<ExtraArgs, Data>(
    key: string,
    config?: SWRMutationConfiguration<Data, Error, string, ExtraArgs>
  ) {
    return useMutation<ExtraArgs, Data>(
      key,
      postJsonFetcher(AuthServerUrl),
      config
    );
  }