
import { NavLink,Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <div> 
            <nav className='flex justify-between items-center py-5 '>
           <Logo></Logo>
            <ul className='flex gap-10' >
                <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline": ""
                         }
                          >
                       Home

                    </NavLink>
              </li>

              <li>
                    <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 underline": ""
                         }
                          >
                      Donation

                    </NavLink>
              </li>
              <li>
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400 underline": ""
                         }
                          >
                      Statistics

                    </NavLink>
              </li>
            </ul>
            </nav>
        </div>
    );
};

export default Navbar;