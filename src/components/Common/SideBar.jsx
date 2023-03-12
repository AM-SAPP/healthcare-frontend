import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
    return (
      <>
        <div id="sidebar">
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/profile`}>Profile</Link>
              </li>
              <li>
                <Link to={`/healthrecord`}>Health Record</Link>
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