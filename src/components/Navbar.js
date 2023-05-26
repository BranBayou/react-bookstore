import { MdPerson } from 'react-icons/md';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-con">
        <nav className="nav-link">
          <h1><a className="logo" href="/">Bookstore CMS</a></h1>
          <li><a href="/">Books</a></li>
          <li><a href="/categories">Catagories</a></li>
        </nav>
        <div className="user">
          <li className="icon-container">
            <a aria-label="icon" href="/categories"><MdPerson className="icon" /></a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
