import './PremiumPageHeader.css'
// import {Component}  from 'react'
import {Logo} from './Logo'
export const PremiumPageHeader =() =>{
    return(
        <header className="header">
            <div className="logo">
                <Logo usewhite={true}/>
            </div>
            <div className="menu">
                <ul>
                    <li><a href='#premium'>Premium</a></li>
                    <li><a href='#support'>Support</a></li>
                    <li><a href='#support'>Download</a></li>
                    <li>|</li>
                    <li className='active'><a href='#support'>Sign up</a></li>
                    <li className='active'><a href='#support'>Log in</a></li>
                </ul>
            </div>
        </header>

    )
}