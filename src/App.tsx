import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader/Loader";
import Hero from "./sections/Hero/Hero";
import "./styles/global.scss";
import MarketPlace from "./sections/MarketPlace/MarketPlace";
import Overview from "./sections/Overview/Overview";
import Features from "./sections/Features/Features";
import FullWidthBg from "./components/FullWidthBg/FullWidthBg";

import bottomBg from "./images/bottom-bg.jpg";
import Characters from "./sections/Characters/Characters";
import Footer from "./sections/Footer/Footer";

const hidenComponents = {
  open: {
    display: 'block'
  },
  close: {
    display: 'none'
  }
}

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [isShowPage, setIsShowPage] = useState(false);

  return (
    <main>
      {!loaderFinished && <Loader setLoaderFinished={setLoaderFinished} />}
      <motion.div
        variants={hidenComponents}
        animate={loaderFinished ? 'open' : 'closed'}
        initial="close"
      >
        <Hero showPage={setIsShowPage} loaderFinished={loaderFinished}/>
      </motion.div>
      <motion.div
        variants={hidenComponents}
        animate={isShowPage ? 'open' : 'closed'}
        initial="close"
      >
        <Root />
      </motion.div>
    </main>
  );
}

const Root = () => (
  <>
    <Overview />
    <MarketPlace />

    <FullWidthBg url={bottomBg}>
      <Characters />
      <Features />
      <Footer />
    </FullWidthBg>
  </>
);

export default App;
