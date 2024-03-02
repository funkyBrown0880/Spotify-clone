import SpotifyWhite from '../assets/images/SpotifyWhite.svg'
import SpotifyBlack from '../assets/images/SpotifyBlack.svg'

export const Logo = (props) => {
    if (props.usewhite) {
        return(
            <a href='#home'>
            <img src= {SpotifyWhite} alt=""/>
        </a> 
        )
    } else {
        return(
            <a href='#home'>
                <img src= {SpotifyBlack} alt=""/>
            </a>
            
        )
    }
    
}