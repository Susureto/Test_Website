import * as React from 'react';
import {motion} from 'framer-motion'

export default function Danger() {

    const svgVariants = {
opacity: 0.5,
transition: {duration: 4}
    }


    return (
        <motion.svg animate={{opacity: 0.8}}whileHover={{opacity: 1}} initial={{opacity: 0,  width: "63%"}} transition={{duration: 2}}   width="40%"   version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" 
        viewBox="0 0 510.293 510.293"  xmlXspace="preserve">
   <g transform="translate(1 1)">
       <path style={{fill:"#FFA800"}} d="M500.76,295.96l-162.133-33.28c0.853,4.267,0.853,9.387,0.853,13.653
           c0,35.84-22.187,66.56-52.907,79.36l110.08,123.733C454.68,437.613,494.787,371.907,500.76,295.96"/>
       <path style={{fill:"#FFE100"}} d="M476.013,293.4l-137.387-30.72c0.853,4.267,0.853,9.387,0.853,13.653c0,35.84-28.16,64-59.733,76.8
           l101.547,110.933C440.173,423.107,470.04,369.347,476.013,293.4"/>
       <path style={{fill:"#FFFFFF"}} d="M168.813,276.333c0-4.267,0.853-9.387,0.853-13.653L7.533,295.96
           c5.973,75.947,46.08,141.653,104.96,183.467l110.08-123.733C191,342.893,168.813,312.173,168.813,276.333"/>
       <path style={{fill:"#FFE100"}} d="M168.813,273.773c0-4.267,0.853-9.387,0.853-13.653L32.28,293.4
           c5.973,75.947,34.987,129.707,93.867,170.667l95.573-110.933C191,340.333,168.813,309.613,168.813,273.773"/>
       <path style={{fill:"#FFA800"}} d="M254.147,28.867c-34.133,0-66.56,6.827-95.573,19.627L210.627,203.8
           c12.8-7.68,28.16-12.8,44.373-12.8s31.573,4.267,44.373,12.8l52.053-155.307C320.707,35.693,288.28,28.867,254.147,28.867"/>
       <path style={{fill:"#FFE100" }}d="M230.253,28.867c-34.133,0-40.96,6.827-69.973,19.627L212.333,203.8
           c12.8-7.68,2.56-12.8,18.773-12.8s31.573,4.267,44.373,12.8l52.053-155.307C296.813,35.693,264.387,28.867,230.253,28.867"/>
       <path style={{fill:"#FFA800" }}d="M254.147,327.533c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2
           C305.347,304.493,282.307,327.533,254.147,327.533"/>
       <path style={{fill:"#FDCC00"}} d="M241.347,327.533c-21.333,0-38.4-23.04-38.4-51.2c0-28.16,17.067-51.2,38.4-51.2
           s38.4,23.04,38.4,51.2C279.747,304.493,262.68,327.533,241.347,327.533"/>
       <path d="M254.147,336.067c-33.28,0-59.733-26.453-59.733-59.733s26.453-59.733,59.733-59.733s59.733,26.453,59.733,59.733
           S287.427,336.067,254.147,336.067z M254.147,233.667c-23.893,0-42.667,18.773-42.667,42.667c0,23.893,18.773,42.667,42.667,42.667
           s42.667-18.773,42.667-42.667C296.813,252.44,278.04,233.667,254.147,233.667z"/>
       <path d="M209.773,212.333c-0.853,0-1.707,0-2.56-0.853c-2.56-0.853-4.267-2.56-5.12-5.12L150.04,51.053
           c-1.707-4.267,0.853-8.533,5.12-10.24c31.573-13.653,64.853-20.48,98.987-20.48s67.413,6.827,98.987,19.627
           c4.267,1.707,5.973,5.973,5.12,10.24L306.2,205.507c-0.853,2.56-2.56,4.267-5.12,5.12c-2.56,0.853-5.12,0.853-7.68-0.853
           c-23.893-14.507-55.467-14.507-79.36,0C213.187,211.48,211.48,212.333,209.773,212.333z M168.813,52.76L214.893,191
           c24.747-11.093,53.76-11.093,78.507,0l46.08-138.24C284.867,32.28,223.427,32.28,168.813,52.76z"/>
       <path d="M395.8,487.96c-2.56,0-5.12-0.853-5.973-2.56l-110.08-124.587c-1.707-1.707-2.56-5.12-1.707-7.68
           c0.853-2.56,2.56-5.12,5.12-5.973c29.013-11.093,47.787-39.253,47.787-70.827c0-3.413,0-7.68-0.853-11.947
           c-0.853-2.56,0.853-5.973,2.56-7.68c1.707-1.707,5.12-2.56,7.68-2.56l162.133,33.28c4.267,0.853,6.827,5.12,6.827,9.387
           c-5.973,75.947-45.227,145.067-108.373,189.44C399.213,487.107,397.507,487.96,395.8,487.96z M300.227,358.253l97.28,109.227
           c52.907-39.253,87.04-98.987,93.867-164.693l-143.36-29.013c0,0.853,0,1.707,0,2.56C348.013,310.467,329.24,342.04,300.227,358.253
           z"/>
       <path d="M112.493,487.96c-1.707,0-3.413-0.853-5.12-1.707C44.227,441.88,4.973,372.76-1,296.813c0-4.267,2.56-8.533,6.827-9.387
           l162.133-33.28c2.56-0.853,5.973,0,7.68,2.56c1.707,1.707,2.56,5.12,2.56,7.68c-0.853,4.267-0.853,8.533-0.853,11.947
           c0,31.573,18.773,59.733,47.787,70.827c2.56,0.853,4.267,3.413,5.12,5.973s0,5.12-1.707,7.68l-110.08,123.733
           C116.76,487.107,115.053,487.96,112.493,487.96z M16.92,302.787c6.827,65.707,40.96,125.44,93.867,164.693l97.28-109.227
           c-29.013-16.213-47.787-47.787-47.787-81.92c0-0.853,0-1.707,0-2.56L16.92,302.787z"/>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </motion.svg>

    )
}