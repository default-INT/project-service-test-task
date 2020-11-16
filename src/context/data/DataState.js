import {
    ADD_PROJECT,
    LOG_OUT,
    EDIT_PROJECT,
    LOG_IN,
    FETCH_PROJECT_LIST,
    REGISTRATION,
    REMOVE_PROJECT,
    SHOW_LOADER,
    FETCH_USERS
} from "../type"
import React, {useReducer} from "react";
import {dataReducer} from "./dataReducer";
import {DataContext} from "./dataContext";


const url = 'http://localhost:8080/api'

export const DataState = ({children}) => {
    const initialState = {
        projectList: [],
        users: [],
        loading: true,
        user: null
    }
    const [state, dispatch] = useReducer(dataReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchProjectList = async () => {
        try {
            const response = await fetch(`${url}/projects`)
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            const payload = await response.json()
            dispatch({type: FETCH_PROJECT_LIST, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const addProject = async project => {
        try {
            const response = await fetch(`${url}/projects`, {
                method: 'POST',
                body: JSON.stringify(project),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            const payload = await response.json()
            dispatch({type: ADD_PROJECT, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const editProject = async project => {
        try {
            const response = await fetch(`${url}/projects`, {
                method: 'PUT',
                body: JSON.stringify(project),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            const payload = await response.json()
            dispatch({type: EDIT_PROJECT, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const removeProject = async project => {
        try {
            const response = await fetch(`${url}/projects`, {
                method: 'DELETE',
                body: JSON.stringify(project),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            const payload = await response.json()
            dispatch({type: REMOVE_PROJECT, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const logOut = async () => {
        try {
            const response = await fetch(`${url}/log-out`, {
                method: 'PUT'
            })
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            dispatch({type: LOG_OUT})
        } catch (e) {
            console.error(e)
        }
    }

    const logIn = async userData => {
        try {
            const response = await fetch(`${url}/login`, {
                method: 'POST',
                body: JSON.stringify(userData)
            })
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            const payload = await response.json()
            dispatch({type: LOG_IN, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const registration = async userData => {
        try {
            const response = await fetch(`${url}/reg`, {
                method: 'POST',
                body: JSON.stringify(userData)
            })
            if (!response.ok) {
                console.error(response.statusText)
                return ;
            }
            const payload = await response.json()
            dispatch({type: REGISTRATION, payload})
        } catch (e) {
            console.error(e)
        }
    }

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${url}/users`)
            if (!response.ok) {
                console.error(response.statusText)
                return;
            }
            const payload = await response.json();
            dispatch({type: FETCH_USERS, payload})
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <DataContext.Provider value={{
            showLoader, fetchProjectList, addProject, registration,
            editProject, removeProject, logOut, logIn, fetchUsers,
            loading: state.loading,
            projectList: state.projectList,
            users: state.users,
            user: state.user
        }}>
            {children}
        </DataContext.Provider>
    )
}