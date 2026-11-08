import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../CSS/FooterStyle.css';
const Footer=()=>{
    return(
        <>
           <Footer>
            <div className="Container Container-Flex">
                <div className="Icones">
                <InstagramIcon className="Icon"/>
                <TwitterIcon className="Icon"/>
                <FacebookIcon className="Icon"/>
                </div>
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <div className="CoppyRight">
                    <p>This is for the practicle purpus Website</p>
                    <p> made with Youtub Love with Khanam</p>
                </div>
            </div>
           </Footer>
        </>
    )
}

export default Footer;