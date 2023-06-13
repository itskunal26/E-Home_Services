import '../Social/Social.css';

import facebook from '../../../Images/facebook-icon.png'
import insta from '../../../Images/instagram-icon.png'
import twitter from '../../../Images/twitter-icon.png'
import whatsapp from '../../../Images/whatsapp-icon.png'
import linkedin from '../../../Images/linkedin-icon.png'
import snapchat from '../../../Images/snapchat-icon.png'

const Social =()=>
{
    return(
        <section id="social">
            <div className="text-center container ">
                <p>find us on </p>
            </div>
            <div className="text-center social">
                <a href="#"><img src={facebook} alt="facebook"/></a>
                <a href="#"><img src={insta} alt="insta"/></a>
                <a href="#"><img src={twitter} alt="twitter"/></a>
                <a href="#"><img src={whatsapp} alt="whatsapp"/></a>
                <a href="#"><img src={linkedin} alt="linkedin"/></a>
                <a href="#"><img src={snapchat} alt="snapchat"/></a>
            </div>
        </section>
    )
}
export default Social;