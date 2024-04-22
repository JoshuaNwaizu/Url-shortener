import { useState } from "react";
import NavBarContainer from "./NavBar/NavBarContainer";
import HomeView from "./Home/HomeView";
import FormView from "./URL form/FormView";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [getUrl, setGetUrl] = useState({ url: [] });
  const [errMessage, setErrMessage] = useState(false);
  const [urlErr, setUrlErr] = useState("");

  const handleAddLinks = () => {
    const shortenerApi = async (url) => {
      let data;
      try {
        const res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
        if (!res.ok) throw new Error("Can't get link for this");
        data = await res.text();
      } catch (err) {
        setUrlErr(err.message);
        console.error(`Error shortening url:`, err);
      }

      const shortenedURl = (url) => {
        if (url.length < 30) {
          return url;
        }
        const shortLink = `${url.slice(0, 28)}...`;
        return shortLink;
      };

      if (input.trim() === "") {
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
    setInput("");
  };

  const handleSetInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddUrlLink = () => {
    handleAddLinks();
    console.log("Clicked");
  };

  const handleOpenNav = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <NavBarContainer
        isOpen={isOpen}
        onOpenNav={handleOpenNav}
        setIsOpen={setIsOpen}
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
    </>
  );
}

export default App;
