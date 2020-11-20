import React from 'react'

export const SET_USER = 'SET_USER'
export function setUser(user) {
    return {
        type: 'SET_USER',
        user
    }
}
export function getUser(param) {
    return async function (dispatch) {
        const res = await JSON.get('/user/getUser', param)
        dispatch(setUser(res.data || {}))
    }
}