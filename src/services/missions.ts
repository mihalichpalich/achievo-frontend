import axios, { AxiosResponse } from "axios";

import { Mission } from "@/types/mission";

export const fetchMissions = async (): Promise<AxiosResponse<Mission[]>> => {
    try {
        const response = await axios.get<Mission[]>(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );

        return response
    } catch (e) {
        alert(e);
        throw e;
    }
};