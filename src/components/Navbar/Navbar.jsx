
import { NavLink,Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <div> 
            <nav className='flex justify-between items-center py-5 shadow-md'>
           <Logo></Logo>
            <ul className='flex gap-10' >
                <li>
                    <Link
                    to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline": ""
                         }
                          >
                       Home

                    </Link>
              </li>

              <li>
                    <Link
                    to="/donation"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 underline": ""
                         }
                          >
                      Donation

                    </Link>
              </li>
              <li>
                    <Link
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400 underline": ""
                         }
                          >
                      Statistics

                    </Link>
              </li>
            </ul>
            </nav>
        </div>
    );
};

export default Navbar;