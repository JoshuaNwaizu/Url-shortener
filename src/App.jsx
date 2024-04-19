import { useState } from "react";
import Logo from "./NavBar/Logo";
import NavBar from "./NavBar/NavBar";
import NavLists from "./NavBar/NavLists";
import NavMenu from "./NavBar/NavMenu";
import NavToggle from "./NavBar/NavToggle";
import Home from "./Home/Home";
import HomeImg from "./Home/HomeImg";
import HeroContainer from "./Home/HeroContainer";
import Hero from "./Home/Hero";
import Button from "./assets/Button";
import FormContainer from "./URL form/FormContainer";
import Form from "./URL form/Form";
import LinkOutput from "./URL form/LinkOutput";

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
        <HeroContainer>
          <Hero>
            <Button style="bg-[#2BD0D0] py-3 w-[12rem] min-[1024px]:w-[10rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]" />
          </Hero>
        </HeroContainer>
      </Home>
      <FormContainer>
        <Form>
          <Button
            style="bg-[#2BD0D0] py-3 w-[20.75rem] min-[1024px]:w-[10rem] rounded-lg text-[20px] font-bold text-[#fff]"
            text="Shorten It!"
          />
        </Form>
        <LinkOutput>
          <Button />
        </LinkOutput>
      </FormContainer>
    </>
  );
}

export default App;
