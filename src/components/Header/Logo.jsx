import SpotifyWhite from '../../assets/images/SpotifyWhite.svg'
import SpotifyBlack from '../../assets/images/SpotifyBlack.svg'

export function Logo (props) {
        const myImage = props.usewhite ? SpotifyWhite : SpotifyBlack
        return(
            <a href='#home'>

            <img src= {myImage} alt=""/>
        </a> 
        )
   
    
}

// export const Logo = (props) => {
//     if (props.usewhite) {
//         return(
//             <a href='#home'>
//             <img src= {SpotifyWhite} alt=""/>
//         </a> 
//         )
//     } else {
//         return(
//             <a href='#home'>
//                 <img src= {SpotifyBlack} alt=""/>
//             </a>
            
//         )
//     }
    
// }