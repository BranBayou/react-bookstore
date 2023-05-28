import { MdPerson } from 'react-icons/md';

function Navigation() {
  return (
    <div className="nav-con navigation">
      <nav className="nav-link">
        <h1><a className="logo" href="/">Bookstore CMS</a></h1>
        <li className="linkb"><a href="/">Books</a></li>
        <li className="linkb"><a href="/categories">Catagories</a></li>
      </nav>
      <div className="user">
        <li className="icon-container">
          <a aria-label="icon" href="/categories"><MdPerson className="icon" /></a>
        </li>
      </div>
    </div>
  );
}

export default Navigation;
