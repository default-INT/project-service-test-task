import React from 'react'
import '../css/AuthPage.css'


export const AuthPage = () => {
    return (
        <div className='auth-page'>
            <div className="log-fragment light-shadow">
                <div className="title">
                    Authorization
                </div>
                <form>
                    <input type="text" placeholder='input login'/>
                    <input type="password" placeholder='input password'/>
                    <a className='login-btn default-btn'>log in</a>
                    <a className='default-link'>Create new account</a>
                </form>
            </div>
        </div>
    )
}