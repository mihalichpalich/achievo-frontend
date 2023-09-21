import axios, { AxiosResponse } from "axios";

import { Mission } from "@/types/mission";

export const fetchMissions = async (page: number, limit: number): Promise<AxiosResponse<Mission[]>> => {
    try {
        const response = await axios.get<Mission[]>(
            'https://jsonplaceholder.typicode.com/posts?',
            {
                params: {
                    _page: page,
                    _limit: limit
                }
            }
        );

        return response
    } catch (e) {
        alert(e);
        throw e;
    }
};