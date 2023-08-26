import { NavLink } from 'react-router-dom'
import planet from '../assets/planet.png';
const Header = () => {
  return (
    <header className=" bg-[whitesmoke] p-4">
      <section className=" flex gap-2 items-center">
        <img src={planet} alt="planet image" />
        <h2 className=" font-Montserrat text-2xl font-[400]">Space Travelers' Hub</h2>
      </section>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header