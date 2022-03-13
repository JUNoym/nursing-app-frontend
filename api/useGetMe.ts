import api from './config'


export type GetMeProps = {
    id: number | null
}

export const useGetMe = {
    // const res = await api().get('get_users/me?id=16')
    // return res.data
    async getMe(props?: GetMeProps): Promise<any> {
        const response = await api().get(`get_users/me?id=${props}`, {
            params: props || {},
        })
        return response.data
    },
}

