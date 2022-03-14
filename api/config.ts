import axios from 'axios'
import { type } from 'os'

// type
type Input = {
    name: string
    id: number
}[]

export default ¥(options?: any) => {
    let headers = {}
    if (options && options.headers) {
        headers = { ...headers, ...options.headers }
    }

    // if (process.browser) {
    //     const jwtIdToken = localStorage.getItem('FirebaseIdToken')
    //     axios.defaults.headers.common['Authorization'] = jwtIdToken
    // }

    return axios.create({
        baseURL: "https://stormy-anchorage-72030.herokuapp.com/api/v1",
        // baseURL: "http://localhost:3030/api/v1",
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    })
}

export const NETWORK_DELAY = 300

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const setAuthorizationHeader = (token: Input) => {
    const [name, id] = token
    const deviseAuthToken1 = `${name}`
    const deviseAuthToken2 = `${id}`

    localStorage.setItem('deviseAuthToken1', deviseAuthToken1)
    localStorage.setItem('deviseAuthToken2', deviseAuthToken2)

    // axios.defaults.headers.common['Authorization'] = deviseAuthToken1
}
