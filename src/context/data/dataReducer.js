import {
    ADD_PROJECT,
    EDIT_PROJECT,
    FETCH_PROJECT_LIST, FETCH_USERS,
    LOG_IN,
    LOG_OUT,
    REGISTRATION,
    REMOVE_PROJECT,
    SHOW_LOADER
} from "../type"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_PROJECT]: (state, {payload}) => ({
        ...state,
        projectList: [...state.projectList, payload]
    }),
    [EDIT_PROJECT]: (state, {payload}) => ({
        ...state,
        projectList: [
            ...state.projectList.filter(project => project.id !== payload.id),
            payload
        ]
    }),
    [FETCH_PROJECT_LIST]: (state, {payload}) => ({
        ...state,
        projectList: payload,
        loading: false
    }),
    [REMOVE_PROJECT]: (state, {payload}) => ({
        ...state,
        projectList: [
            ...state.projectList.filter(project => project.id !== payload.id)
        ]
    }),
    [LOG_IN]: (state, {payload}) => ({
        ...state,
        user: payload
    }),
    [REGISTRATION]: (state, {payload}) => ({
        ...state,
        user: payload
    }),
    [LOG_OUT]: state => ({
        ...state,
        user: null
    }),
    [FETCH_USERS]: (state, {payload}) => ({
        ...state,
        users: payload
    }),
    DEFAULT: state => state
}

export const dataReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}