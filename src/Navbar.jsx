import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./Context"

const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links go here */}
      </div>
    </nav>
  )
}
export default Navbar
