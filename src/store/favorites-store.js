import {useQuery} from '@tanstack/react-query'
import {$authApi} from '../api/http.js'

export const useFavoritesStore = () => useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
        const { data } = await $authApi.get('/favorites')
        return data?.data?.products
    }
})
