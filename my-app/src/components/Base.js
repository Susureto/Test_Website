import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {motion} from 'framer-motion';
import { red } from '@material-ui/core/colors';
import Danger from '../Svg/Danger'
import Question from "../Svg/Question"
import SQuestion from "../Svg/SQuestion"
import Header from './Header';
import TwitterICon from '../Svg/TwitterIcon.js';
import { useMoralis } from "react-moralis";


let Baby = require("../Images/Baby.png")
let Icon = require("../Images/logo1.png")

export default function Base() {

return (

<div>
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>
<Header />



<div className='Banner-logged'>
<div>
    <h1 className='title'>
    <p style={{fontSize: "370%"}}>  Babies </p>
        <p style={{marginTop: "-10%"}}>  Secret Agency </p>

        </h1>

        </div>

<div className='Login'>
<Button style={{
    fontFamily: 'Gloria Hallelujah',
    backgroundColor: "#A19B00",
    color: "black",
    width: "80%",

    background: "linear-gradient(90deg, rgba(168,225,251,1) 0%, rgba(255,255,255,1) 0%, rgba(240,242,185,1) 0%, rgba(247,255,138,1) 98%)",
    border: "2px solid #323230",
        borderRadius: "4%"

}}
variant="contained"  >Identify</Button>

</div>



</div>


<div>


<div className='Images'>

<motion.img initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.6}}className='FIcon' src={Icon} />
<motion.img initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.7}}className='Icon' src={Icon} />
<motion.img initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.8}} className='SIcon' src={Icon} />
<div className="Danger">
<Danger  />
</div>

</div>
<div className='Content'>


<div className='Secret'>

<div>
<SQuestion />
</div>
<div></div>
<div>
<SQuestion />
</div>
<div>
</div>
<div>
<Question />
</div>
<div></div>
<div>
<Question />
</div>
<div>
<SQuestion />
</div>
<div>

</div>


</div>

<div className='SecretText'>

    <h1 className='SecretTitle'>A Secret Collection of 4469 Babies</h1>
<p className='Shadow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>

</div>

<div className='Team'>
    <div>
    <h1 className='SecretTitle'>Team</h1>

    </div>
    <div className='Team-C'>

<div className='Team-All-Img'>
<motion.img className='Team-Img'  src={Icon}/>
<motion.img className='Team-CImg'src={Icon}/>
<motion.img className='Team-Img' src={Icon}/>

</div>

<div className='Team-Texts'>
   
  <h1> Dev</h1> 
   <h1>Dev</h1>  
  <h1>Dev</h1>  

</div>



    </div>

<motion.h1 whileHover={{color: "rgb(150, 32, 32)", scale: 1.3}}   className='Denied'>Access Denied</motion.h1>

</div>



</div>

<footer>
    <p className='Foot'  style={{color: "Black", fontFamily: 'Gloria Hallelujah', marginTop: "50%", marginLeft: "30%"}}>CopyRight Babies Secret Agency 2022. All rights reserved.</p>
</footer>


</div>


)




}