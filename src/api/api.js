import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    }
)

export const getUsersRequest = function (currentPage = 1, pageSize = 10) {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    )
}

export const unfollowRequest = function (id) {
    return (
        instance.delete(`follow/${id}`)
            .then(response => { return response.data })
    )
}

export const followRequest = function (id) {
    return (
        instance.post(`follow/${id}`)
            .then(response => { return response.data })
    )
}

export const authRequest = function () {
    return (
        instance.get(`auth/me`)
            .then(response => { return response.data })
    )
}
export const getProfileRequest = function (id) {
    return (
        instance.get('profile/' + id)
            .then(response => { return response.data })
    )
}