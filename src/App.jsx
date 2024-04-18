import { useState } from "react";
import Logo from "./NavBar/Logo";
import NavBar from "./NavBar/NavBar";
import NavLists from "./NavBar/NavLists";
import NavMenu from "./NavBar/NavMenu";
import NavToggle from "./NavBar/NavToggle";
import Home from "./Home/Home";
import HomeImg from "./Home/HomeImg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <NavBar>
        <Logo />
        <NavMenu>
          <NavLists onOpen={isOpen} />
          <NavToggle isOpen={isOpen} onOpenNav={handleOpenNav} />
        </NavMenu>
      </NavBar>
      <Home>
        <HomeImg />
      </Home>
    </>
  );
}

export default App;
