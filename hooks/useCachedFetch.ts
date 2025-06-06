// hooks/useCachedFetch.ts
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useCachedFetch<T>(key: string, url: string) {
  const { data, error, isLoading, mutate } = useSWR(key, () => fetcher(url), {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 300000, // Refresh every 5 minutes
    dedupingInterval: 60000, // Dedupe requests within 1 minute
  })

  return {
    data,
    isLoading,
    error,
    mutate
  }
}
