import './PremiumPageHeader.css'
// import {Component}  from 'react'
import {Logo} from './logo'
export const PremiumPageHeader =() =>{
    return(
        <header className="header">
            <div className="logo">
                <Logo/>
            </div>
            <div className="menu">
                <ul>
                    <li>Premium</li>
                    <li>Support</li>
                    <li>Download</li>
                    <li>|</li>
                    <li>Sign up</li>
                    <li>Log in</li>
                </ul>
            </div>
        </header>
    )
}