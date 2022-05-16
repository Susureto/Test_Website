import * as React from 'react';
import {Button} from '@material-ui/core';
import {motion} from 'framer-motion';
import Danger from '../Svg/Danger'
import Question from "../Svg/Question"
import SQuestion from "../Svg/SQuestion"
import TwitterICon from '../Svg/TwitterIcon.js';
import HeaderL from './Header_Logged'
import Header from '../components/Header';
import { useState } from 'react';
import Launch from './Button'
import LaunchS from './Buttons/SecondButton'
import LaunchT from './Buttons/ThirdButton'
import { useMoralis } from "react-moralis";



let Baby = require("../Images/Baby.png")
let FirstImage = require("../Images/3.png")
let SecondImage = require("../Images/17.png")
let LastImage = require("../Images/18.png")
let Astronaut = require("../Images/Astronaut.png")
let Goku = require("../Images/Goku.png")
let King = require("../Images/King.png")
let VR = require("../Images/VR.png")
let Icon = require("../Images/logo1.png")


export default function BaseL() {

const [isOpen, setIsOpen] = useState(false);
const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();



if (!isAuthenticated) {


    return (

        <div >
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
        <Button   onClick={authenticate }  style={{
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


















return (

<div >

<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>
<HeaderL />

<motion.div initial={{width: "70%", opacity: 0}} animate={{width:"100%", opacity: 1}} transition={{duration: 1.2}} exit={{x: window.innerWidth}} className='Banner-logged'>

<div>
    <h1 className='title-logged'>
    <p style={{fontSize: "370%"}}>  Babies </p>
        <p style={{marginTop: "-8%"}}>  Secret Agency </p>

        </h1>

        </div>

<div className='Login-logged'>
<Button onClick={logout} 

animate={{opacity: 1}}
initial={{opacity: 0}}
transition={{duration: 2}}

style={{
    fontFamily: 'Gloria Hallelujah',
    backgroundColor: "#A19B00",
    color: "black",
    width: "80%",

    background: "linear-gradient(90deg, rgba(168,225,251,1) 0%, rgba(255,255,255,1) 0%, rgba(224,254,209,1) 0%, rgba(199,249,184,1) 47%)",
    border: "2px solid #323230",
        borderRadius: "4%"

}}
variant="contained"  >Logout</Button>
</div>




</motion.div>


<div>


<div className='Images-logged'>

<motion.img initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.6}}className='FIcon-logged' src={FirstImage} />
<motion.img initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.7}}className='Icon-logged' src={SecondImage} />
<motion.img initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.8}} className='SIcon-logged' src={LastImage} />


</div>
<div className='Content-logged'>


<div className='Secret-logged'>

<div>
<motion.img whileHover={{x: 5, y: 5}} className="SImg-logged" src={Goku} />
</div>
<div></div>
<div>
<motion.img whileHover={{x: 5, y: 5}} className="SImg-logged" src={King} /></div>
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
<motion.img whileHover={{x: 5, y: 5}} className="SImg-logged" src={Astronaut} /></div>
<div>

</div>


</div>

<div className='SecretText-logged'>

    <h1 className='SecretTitle-logged'>A Secret Collection of 4469 Babies</h1>
<p className='Shadow-logged'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>


<div className='Text-Buttons'>

<Button   style={{
    fontFamily: 'Gloria Hallelujah',
    color: "black",
    opacity: "0.5",
    marginLeft: "10%",
    width: "80%",
    background: "linear-gradient(103deg, rgba(248,255,190,1) 0%, rgba(250,246,113,0.9063010620915033) 71%)",
    border: "2px solid #323230",
        borderRadius: "4%" }}


>Traits</Button>
<Button style={{
    fontFamily: 'Gloria Hallelujah',
    color: "black",

    width: "100%",
    background: "linear-gradient(103deg, rgba(255,190,190,1) 0%, rgba(250,113,113,0.9063010620915033) 71%)",
    border: "2px solid #323230",
        borderRadius: "4%" }}

>Join Our Agency</Button>

</div>
</div>

</div>

<motion.div initial={{scale: 0}} animate={{scale: 1}} className='Team-logged' id="Team-logged">
    <div>
    <h1 className='SecretTitle-logged'>Team</h1>

    </div>

<div>
    <div className='Team-All-Img-logged'>
    <div>
<motion.img className='Team-Img-logged'  src={FirstImage}/>
<h1 className='Team-Texts-logged'> Carla1.eth</h1> 
<p className='Team-T' style={{marginLeft:"5%", marginTop:"13%", marginBottom:"10%"}}>Experienced dev who has been in crypto since 2017 and plans to revolutionize NFTs</p> 

</div>

<div>
<motion.img className='Team-CImg-logged'src={SecondImage}/>
<h1 className='Team-Texts-logged'>Juanchif.eth</h1> 
<p className='Team-T' style={{marginLeft:"5%", marginTop:"13%", marginBottom:"10%"}}>Experienced dev who has been in crypto since 2017 and plans to revolutionize NFTs</p> 
</div>

<div>
<motion.img className='Team-Img-logged' src={LastImage}/>
<h1 className='Team-Texts-logged'>Kid.eth</h1>  
<p className='Team-T'  style={{marginLeft:"5%", marginTop:"13%", marginBottom:"10%"}}>Experienced dev who has been in crypto since 2017 and plans to revolutionize NFTs</p> 

</div>
</div>





    </div>


</motion.div>


</div>

<div className='Faq'>

<div className='Faq-title'>

<h1 >FAQ</h1>

</div>

<div className='Grid'>
<div></div>

<div>

<div className='Cards'>
    <motion.div  whileHover={{scale: 1.1}} layout="position" transition={{type:"spring", duration: 1}}  onClick={() => setIsOpen(!isOpen)}  className='Card'>
        <motion.h2 className='Card-Title'  layout="position">Wen launch?</motion.h2>
         {isOpen &&  
    
         
         <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1.2}}   layout="position" className='Card-Text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </motion.div>
}
    </motion.div>



</div>

<div className='Cards'>
<Launch />
</div>

<div className='Cards'>
<LaunchS />
</div>

<div className='Cards'>
<LaunchT />
</div>
</div>
</div>
</div>
<footer>
    <p className='Foot'  style={{color: "rgb(14, 14, 14)", fontFamily: 'Gloria Hallelujah', marginTop: "30%", marginLeft: "35%"}}>CopyRight Babies Secret Agency 2022. All rights reserved.</p>
</footer>


</div>

)




}