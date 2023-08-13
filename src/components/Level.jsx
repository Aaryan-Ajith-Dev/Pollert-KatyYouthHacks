import { Level1,Level2,Level3,Level4,Level5,Level6 } from './index'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Level({name}){
    const [show,setShow]=useState(false);
    return(
        <>
            <button className='nav-item' onClick={()=>setShow((prev)=>!prev)}
            >{name}</button>
            {show &&
            <ul>
                <li>
                    <Link to='/level-1'>
                     Good
                    </Link>
                </li>
                <li>
                    <Link to='/level-2'>
                     Moderate
                    </Link>
                </li>
                <li>
                    <Link to='/level-3'>
                    Unhealthy for Sensitive Groups
                    </Link>
                </li>
                <li>
                    <Link to='/level-4'>
                    Unhealthy
                    </Link>
                </li>
                <li>
                    <Link to='/level-5'>
                    Very Unhealthy
                    </Link>
                </li>
                <li>
                    <Link to='/level-6'>
                    Hazardous
                    </Link>
                </li>
            </ul>
            }
        </>
    )
}