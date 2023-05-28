import MobileNavigation from './navigation/MobileNavigation';
import Navigation from './navigation/Navigation';

function Navbar() {
  return (
    <div className="nav-bar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default Navbar;
