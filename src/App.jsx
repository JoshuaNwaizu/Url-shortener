import { useState } from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import HomeView from './Home/HomeView';
import FormView from './URL form/FormView';
import ASview from './Advanced Statistics/ASview';
import Boost from './Boost/Boost';
import Button from './Button';
import FooterView from './Footer/FooterView';
import { Link } from 'react-scroll';
import ArrowToTop from './ArrowToTop/ArrowToTop';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [getUrl, setGetUrl] = useState({ url: [] });
  const [errMessage, setErrMessage] = useState(false);
  const [urlErr, setUrlErr] = useState('');

  const handleAddLinks = () => {
    const shortenerApi = async (url) => {
      let data;
      try {
        const res = await fetch(
          `https://tinyurl.com/api-create.php?url=${url}`
        );
        if (!res.ok) throw new Error('Oops! Unable to shorten link...');
        // if (res.status !== 200) throw new Error("Not a valid link");
        data = await res.text();
      } catch (err) {
        setUrlErr(`${err.message}`);
        console.log(err.message);
        // console.error(`Error shortening url:`, err);
      }

      const shortenedURl = (url) => {
        if (url.length < 30) {
          return url;
        }
        const shortLink = `${url.slice(0, 27)}...`;
        return shortLink;
      };

      if (input.trim() === '') {
        setErrMessage(true);
        setTimeout(() => {
          setErrMessage(false);
        }, 4000);
        return;
      }
      const newLink = shortenedURl(input);

      setGetUrl((prevUrl) => {
        const newUrls = {
          firstInput: newLink,
          secondInput: data,
          isCopied: false,
          errMsg: urlErr,
        };
        console.log(newUrls.errMsg);
        return {
          ...prevUrl,
          url: [...prevUrl.url, newUrls],
        };
      });
    };
    shortenerApi(input);
    setInput('');
  };

  const handleSetInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddUrlLink = () => {
    handleAddLinks();
    console.log('Clicked');
  };

  // const handleOpenNav = () => {
  //   setIsOpen((open) => !open);
  // };

  return (
    <>
      <main>
        <NavBarContainer
        // isOpen={isOpen}
        // onOpenNav={handleOpenNav}
        // setIsOpen={setIsOpen}
        />
        <HomeView />
        <FormView
          onHandleClick={handleAddUrlLink}
          input={input}
          handleSetInput={handleSetInput}
          getUrl={getUrl}
          errMessage={errMessage}
          urlErr={urlErr}
        />
        <ASview />
        <Boost>
          <Link
            to="form"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            {' '}
            <Button
              style="bg-[#2BD0D0] py-3 w-[12rem] min-[1024px]:w-[10rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]"
              hover={'#9AE3E3'}
            />
          </Link>
        </Boost>
      </main>
      <FooterView />
      <ArrowToTop />
    </>
  );
}

export default App;
