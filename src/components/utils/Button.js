import React from 'react'

export const Button = ({children, className, onClick}) => (
    <a className={`default-btn ${className}`} onClick={onClick}>
        {children}
    </a>
)