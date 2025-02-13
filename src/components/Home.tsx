import{ useEffect, useRef, useState } from 'react'
import { motion, useInView } from "motion/react"

const styling = {
  "backgroundColor": "#130f40",
  "backgroundImage": "linear-gradient(315deg, #130f40 0%, #000000 74%)"
}

export const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const name = "MONIKA VERMA";
  const speed = 0.1;
  useEffect(() => {
    let i = 0;
    setDisplayText(" "); // ✅ Reset state before starting
  
    const interval = setInterval(() => {
      if (i < name.length) {  // ✅ Prevent going out of bounds
        setDisplayText(name.slice(0, i + 1)); 
      } else {
        clearInterval(interval);
      }
      i++;
    }, speed * 1000);
  
    return () => clearInterval(interval);
  }, [name]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });


  return (
    <div style={styling} className='py-80 rounded-b-full '>
     <center ref={sectionRef}>
     <motion.span
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={isInView?{ opacity: 1 }:{}}
        transition={{ duration: 1.5 }}
      >
        {displayText}
        <motion.span
          className="ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
        >
          |
        </motion.span>
      </motion.span>
     </center>
      <ul className='flex justify-center' >

        <li className='mx-2' >SOFTWARE DEVELOPER</li>
        <li className='mx-2'>FULL STACK DEVELOPER</li>
        <li className='mx-2'>PROGRAMMER</li>
      </ul>

    </div>
  )
}
