import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { FetcherOptions } from "./types";

export const fetcher = async <T = any>({ url, method = 'GET' }: FetcherOptions, body?: any) => {
    const config: AxiosRequestConfig = {
        url,
        method,
        ...(body && { data: body })
    }

    try {
        const response: AxiosResponse = await axios(config)
        if (response) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}