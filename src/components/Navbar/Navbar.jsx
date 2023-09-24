
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
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
                    to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 underline": ""
                         }
                          >
                      Donation

                    </NavLink>
              </li>
            </ul>
        </div>
    );
};

export default Navbar;