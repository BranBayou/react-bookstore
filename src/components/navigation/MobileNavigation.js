import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import MobNavLinks from './MobNavLinks';

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <GiHamburgerMenu className="hamburger" onClick={() => setOpen(!open)} />;
  const closeIcon = <MdClose className="closeIcon" onClick={() => setOpen(!open)} />;

  return (
    <div className="nav-con mobile-navigation">
      { open ? closeIcon : hamburgerIcon}
      <h1><a className="logo" href="/">Bookstore CMS</a></h1>
      { open && <MobNavLinks />}
    </div>
  );
}

export default MobileNavigation;
