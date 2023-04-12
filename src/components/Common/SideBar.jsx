import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/profile`}>Profile</Link>
              </li>
              <li>
                <Link to={`/healthrecord`}>Health Record</Link>
              </li>
              <li>
                <Link to={"/patient/home"}>Patient Home</Link>
              </li>
              <li>
                <Link to={"/doctor/home"}>Doctor Home</Link>
              </li>
              <li>
                <Link to={"/hospital/home"}>Hospital Home</Link>
              </li>

            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet/>
        </div>
      </>
    );
  }