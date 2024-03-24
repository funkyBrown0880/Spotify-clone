import './PremiumPageHeader.css'
import React  from 'react'
import {Logo} from './Logo'
import {ReactComponent as MenuIcon} from '../../assets/icons/menu.svg'

// function useState (initialValue) {
//     let val = initialValue
//     function change (newValue) {

//     }
//     return [val, change]
// }

export const PremiumPageHeader =() =>{
    const [showMenu, setMenu] = React.useState(false);

    // const state = React.useState(false);
    // const showMenu = state[0];
    // const setMenu = state[1]

    const toggleMenu = () => {
        setMenu ( showMenu === false)
    }

    return(
        <div>
                <header className="header">
                <div className="logo">
                    <Logo usewhite={true}/>

                </div>
                                <MenuIcon className='menu-icon' onClick={toggleMenu} fill = 'white'/> 
                                <div className="menu">
                                    
                                    <PremiumPageHeaderNavigation className= {showMenu ? 'mobile' : ''}/>
                </div>
                            
                
            </header>

          
        </div>
       

        
    )
}

const PremiumPageHeaderNavigation = (props) => {
    return (
        <ul className={props.className}>
        <li><a href='#premium'>Premium</a></li>
        <li><a href='#support'>Support</a></li>
        <li><a href='#support'>Download</a></li>
        <li>|</li>
        <li className='active'><a href='#support'>Sign up</a></li>
        <li className='active'><a href='#support'>Log in</a></li>
    </ul>
    )
}