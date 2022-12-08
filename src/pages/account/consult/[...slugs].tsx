import { type NextPage } from "next";
import Head from "next/head";
import MainMenu from "../../../server/common/MainMenu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainMenu />
      </main>
    </>
  );
};

export default Home;
