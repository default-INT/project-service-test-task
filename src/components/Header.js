import React from 'react'
import AddModalWindow from "./windows/AddModalWindow";


export const Header = () => (
    <header className='medium-shadow'>
        <div className="title">
            Project Service
        </div>
        <div className="util-btn">
            <AddModalWindow />
            <div className="log-menu">
                <div className="username">
                    Guest
                </div>
                <a className="exit">
                    Quit
                </a>
            </div>
        </div>
    </header>
)