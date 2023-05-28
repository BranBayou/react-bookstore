import { MdPerson } from 'react-icons/md';

function MobNavLinks() {
  return (
    <div className="mob-links">
      <nav className="nav-link">
        <li><a className="mob-li" href="/">Books</a></li>
        <li><a className="mob-li" href="/categories">Catagories</a></li>
        <li className="icon-container">
          <a aria-label="icon" href="/categories"><MdPerson className="icon" /></a>
        </li>
      </nav>
    </div>
  );
}

export default MobNavLinks;
