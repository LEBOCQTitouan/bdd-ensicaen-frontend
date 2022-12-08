import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import MainMenu from "../../../server/common/MainMenu";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainMenu />
        <div className="flex justify-center m-20">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex h-10 mb-4">
              <Image src="/info.png" alt="logo information" className="object-contain flex-initial" />
              <span className="flex-initial">Veuillez remplir le formulaire ci-dessous afin d&aposouvrir un nouveau compte bancaire.</span>
            </div>
            <div className="">
              <h3>Titre partie</h3>
              <div className="mb-4">
              <label htmlFor="titulaire" className="block text-gray-700 text-sm font-bold mb-2">Titulaire du compte</label>
              <select id="titulaire" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option selected>Template value</option>
              </select>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
