import React from 'react';
import { Link } from 'react-router-dom';

//TODO:
    //create navbar
    //will contain navigable pages
        //Home, Profile, About Us
    //will contain logo

const Header = () => {
    return(
        <div>
            <nav>
                <div>
                    {/*Logo here*/}
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>User</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;