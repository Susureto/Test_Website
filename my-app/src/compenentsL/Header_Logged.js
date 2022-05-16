import Ethereum from "../Svg/Ethereum";
import DiscordIcon from "../Svg/SVG"
import TwitterICon from "../Svg/TwitterIcon";
import {motion} from 'framer-motion';


export default function HeaderL() {


    return (
        <header>
<div className="Headers-logged">
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>

<div className="Options-logged">

  <motion.a onClick={{opacitiy: 0}}   style={{textDecoration: "none"}}  href="#Team-logged">  <h3 href="#" >About</h3> </motion.a>




<a style={{textDecoration: "none"}} href="#">    <h3>Home</h3> </a>





<a style={{textDecoration: "none"}} href="#">  <h3>Faq</h3> </a>


</div>
<div className="Icons-logged">
<DiscordIcon />
<TwitterICon />
<Ethereum />

</div>

</div>
</header>

    )
}