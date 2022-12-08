import { type NextPage } from "next";
import Head from "next/head";
import MainMenu from "../../server/common/MainMenu";

const Overview: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainMenu/>
        <div className="flex justify-center align-center m-20">
          {/* data */}
        </div>
      </main>
    </>
  );
};

export default Overview;
