import Ethereum from "../Svg/Ethereum";
import DiscordIcon from "../Svg/SVG"
import TwitterICon from "../Svg/TwitterIcon";
import {motion} from 'framer-motion';

export default function Header() {


    return (
        <motion.header initial={{width: "50%", opacity: 0}} animate={{width:"100%", opacity: 1}} transition={{duration: 1}} exit={{x: window.innerWidth}}>
<div className="Headers">
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>

<div className="Options">

  <a style={{textDecoration: "none"}}  href="#">  <h3 href="#" >About</h3> </a>




<a style={{textDecoration: "none"}} href="#">    <h3>Home</h3> </a>





<a style={{textDecoration: "none"}} href="#">  <h3>Faq</h3> </a>


</div>
<div className="Icons">
<DiscordIcon />
<TwitterICon />


</div>

</div>
</motion.header>

    )
}