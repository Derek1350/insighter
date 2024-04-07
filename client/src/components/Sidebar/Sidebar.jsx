import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import "./sidebar.css";

const Sidebar = () => {

  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  // const saveUserData = async () => {
  //   try {
  //     const response = await axios.post('/saveUserData', { /* Your user data here */ });
  //     console.log('User data saved:', response.data);
  //   } catch (error) {
  //     console.error('Error saving user data:', error);
  //   }
  // };


  return (
    <aside className="sidebar" >
      <div className="sidebar-container">
        <Link to='/'>
          <img src="/assets/icons/logo.svg" alt="logo" width={150} height={70} />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0,5).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li key={link.route} className="sidebar-nav_element">
                    <Link to={link.route} className='sidebar-link' >
                      <img src={isActive ? link.active : link.icon} alt={link.label} width={24} height={24} />
                      <span className="sidebar-label" style={isActive ? {color: "#208dbf", fontWeight: "bold"} : {color: "#fff"}}>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className="sidebar-nav_elements" style={{alignItems: "center"}}>
              {navLinks.slice(5).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li key={link.route} className="" style={{listStyle: "none", fontSize: "20px"}}>
                    <Link to={link.route} className='sidebar-link' >
                      <img src={isActive ? link.active : link.icon} alt={link.label} width={24} height={24}/>
                      <span className="sidebar-label" style={isActive ? {color: "#208dbf", fontWeight: "bold", fontSize: "18px"} : {color: "#fff", fontSize: "18px"}}>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
              <Link to="/need-help">
                <button className="sidebar-help-button">
                  Need help?
                </button>
              </Link>
                {/* <li className="sidebar-user-button" >
                    <UserButton afterSignOutUrl='/' />
                </li> */}

            </ul>
          </SignedIn>

          <SignedOut>
            <Link to="/sign-in">
              <button className="login-btn">
                Login
              </button>
            </Link>
          </SignedOut>
        </nav>
      </div>
    </aside>
)
}

export default Sidebar