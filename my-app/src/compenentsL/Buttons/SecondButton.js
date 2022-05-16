import * as React from 'react';
import {motion} from 'framer-motion'

import { useState } from 'react';


export default function LaunchS() {

    let [Second, setSecond] = useState(false);

    return (
        <motion.div  whileHover={{scale: 1.1}} layout="position" transition={{type:"spring", duration: 1}}  onClick={() => setSecond(!Second)}  className='Card'>
        <motion.h2 className='Card-Title'  layout="position">Total Supply?</motion.h2>
         {Second &&   <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}   layout className='Card-Text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </motion.div>
}
    </motion.div>
    )
}