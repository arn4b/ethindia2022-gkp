import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Common/Navbar";
import LandingPageContainer from "../components/LandingPage/LandingPageContainer";
import Footer from "../components/Common/Footer";

export default function Home() {
  return (
    <div className="h-full bg-black">
      <Head>
        <title>GateKeeping Protocol</title>
        <meta name="description" content="Gate Keeping Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full bg-black">
        <Navbar />
        <LandingPageContainer />
        <img src="images/gkp-intro.png" className="flex mx-auto w-2/5 h-200" />
      </main>
      <Footer />
    </div>
  );
}
