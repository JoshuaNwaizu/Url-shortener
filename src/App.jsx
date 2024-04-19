import { useState } from "react";
import NavBarContainer from "./NavBar/NavBarContainer";
import HomeView from "./Home/HomeView";
import FormView from "./URL form/FormView";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [getUrl, setGetUrl] = useState({ url: [] });
  const [urlValue, setUrlValue] = useState("");
  const [errMessage, setErrMessage] = useState(false);

  const handleAddLinks = () => {
    if (input.trim() === "") {
      setErrMessage(true);
      setTimeout(() => {
        setErrMessage(false);
      }, 4000);
      return;
    }

    const shortenerApi = async (url) => {
      try {
        const res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
        if (!res.ok) throw new Error("Cant get link");

        const data = await res.text();
        setUrlValue(data);
        return data;
      } catch (err) {
        console.error(`Error shortening url:`, err);
      }
    };

    const shortenedURl = (url) => {
      if (url.length < 30) {
        return url;
      }

      const shortLink = url.split("").slice(0, 28).join("") + "...";
      return shortLink;
    };
    const newLink = shortenedURl(input);

    setGetUrl((prevUrl) => {
      const newUrls = {
        firstInput: newLink,
        secondInput: urlValue,
      };
      return {
        ...prevUrl,
        url: [...prevUrl.url, newUrls],
      };
    });

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
      <NavBarContainer isOpen={isOpen} onOpenNav={handleOpenNav} />
      <HomeView />
      <FormView
        onHandleClick={handleAddUrlLink}
        input={input}
        handleSetInput={handleSetInput}
        getUrl={getUrl}
        errMessage={errMessage}
      />
    </>
  );
}

export default App;
