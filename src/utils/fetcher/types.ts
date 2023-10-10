type FetchMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type FetcherOptions = {
    url: string
    method?: FetchMethodType
}