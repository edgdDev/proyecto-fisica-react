import { NavLink } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'
 
const Sidebar = () => {
  return (
    <div className='sidebar bg-dark'>
        <ul>

            <li>
                <NavLink to='/' className="text-light rounded py-2 w-100 d-inline-block px-3"> <FaIcons.FaMapMarkedAlt className="me-2" /> Mapa </NavLink>
            </li> 
            <li>
                <NavLink to='/dashboard' className="text-light rounded py-2 w-100 d-inline-block px-3 d-flex"> 
                    <FaIcons.FaChartPie className="me-2" /> <div>Dashboard </div>
                </NavLink>
            </li>
            <li>
                <NavLink to='#' className="text-light rounded py-2 w-100 d-inline-block px-3"> <FaIcons.FaUserAlt className="me-2" /> Usuario </NavLink>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar