import { SAVE_LOGIN, SAVE_TOKEN, SAVE_USER } from './types'
export const SaveLogin = (login) => async (dispatch/* ,getState */) => {
    dispatch({
        type: SAVE_LOGIN,
        payload: login
    })
}

export const SaveUser = (user) => async (dispatch/* ,getState */) => {
    dispatch({
        type: SAVE_USER,
        payload: user
    })
}

export const SaveToken = (token) => async (dispatch/* ,getState */) => {

    dispatch({
        type: SAVE_TOKEN,
        payload: token
    })
}