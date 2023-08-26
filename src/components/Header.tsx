import { NavLink } from 'react-router-dom'
import planet from '../assets/planet.png';
import { CSSProperties } from 'react';
const Header = () => {
  const styles: CSSProperties = {
    textDecoration: 'underline',
  }
  return (
    <header className=" bg-[whitesmoke] p-4 flex justify-between border-b border-slate-300">
      <section className=" flex gap-2 items-center">
        <img src={planet} alt="planet image" />
        <h2 className=" font-Montserrat text-2xl font-[400]">Space Travelers' Hub</h2>
      </section>
      <nav>
        <ul className=" flex gap-2">
          <li>
            <NavLink to='/' 
            className=" text-blue-500"
            style={({ isActive }) => isActive ? styles : {}}
            >
              Rockets
            </NavLink>
          </li>
          <li className=" border-r px-2">
            <NavLink to='missions'
              className=" text-blue-500"
              style={({ isActive }) => isActive ? styles : {}}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile'
              className=" text-blue-500"
              style={({ isActive }) => isActive ? styles : {}}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header