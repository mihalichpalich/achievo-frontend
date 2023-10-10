// import axios, { AxiosResponse } from "axios";
//

//
// export const fetchMissions = async (page: number, limit: number): Promise<AxiosResponse<Mission[]>> => {
//     try {
//         const response = await axios.get<Mission[]>(
//             'https://jsonplaceholder.typicode.com/posts?',
//             {
//                 params: {
//                     _page: page,
//                     _limit: limit
//                 }
//             }
//         );
//
//         return response
//     } catch (e) {
//         alert(e);
//         throw e;
//     }
// };


import { useInfiniteQuery } from "vue-query";
import { ref } from "vue";

import { Mission } from "@/types/mission";
import { MissonsParams } from "./types";
import { fetcher } from "@/utils";

export const useMissions = (params: MissonsParams) => {
    const missions = ref<Mission[]>([])
    const totalPages = ref(0)
    const isPagesLoading = ref(false)

    const { isLoading, data, isFetching } = useInfiniteQuery(
        ['missions', params],
        () => fetcher({ url: `https://jsonplaceholder.typicode.com/posts?_page=${params.page}_limit=${params.limit}` })
    )
}