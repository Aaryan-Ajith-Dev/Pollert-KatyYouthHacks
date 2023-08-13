import { Level1,Level2,Level3,Level4,Level5,Level6 } from './index'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';

export default function Level({name}){
    const [show,setShow]=useState(false);
    const [showAlternateContent] = useState(false);
    const containerVariants = {
        hidden: { height: '0'  },
        visible: { height: 'auto', transition: { duration: 0.5 } },
      };
    return (
        <div className="dropdown" style={{fontSize:"0.5em"}}>
            <button className='dropbtn' onClick={()=>setShow((prev)=>!prev)}
            >{name}</button>
            {show &&
            <motion.div className="dropdown-content" 
            variants={containerVariants} 
            key={showAlternateContent ? 'health' : 'recommended'}
            initial= {"hidden"} 
            animate={"visible"}>
                    <Link to='/level-1'>
                     Good
                    </Link>

                    <Link to='/level-2'>
                     Moderate
                    </Link>

                    <Link to='/level-3'>
                    Unhealthy for 
                    SG
                    </Link>

                    <Link to='/level-4'>
                    Unhealthy
                    </Link>
                
                
                    <Link to='/level-5'>
                    Very Unhealthy
                    </Link>
                
                
                    <Link to='/level-6'>
                    Hazardous
                    </Link>
            </motion.div>
            }
        </div>

    )
}