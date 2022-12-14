import Link from "next/link";
import { useState , useEffect} from "react";
import styles from "../styles/navbar.module.css";
import items from '../json-data/navbar.json'
import {useRouter} from 'next/router'
function Navbar() {

    const [isNavToggled, setisNavToggled] = useState(false);
     
    const router = useRouter()

    
    

    return ( 
        <nav className={styles.nav} id='navbar'>

            <h1>
                <Link href='/'>
                    <a >Portfolio.</a>
                </Link>
            </h1>
            
            <div className={styles.menu}>
                <ul className={isNavToggled ? styles.toggle : ''}>
                    

                    {
                        items.map(item => {
                            return(
                                <li className={item.url == router.route ? styles.active : ''} key={item.id}>
                                    <Link href={item.url}>
                                        <a>
                                            <span><i className={item.icon}></i></span>
                                            <span>{item.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>                
            </div>

        </nav>

     );
}


export default Navbar;