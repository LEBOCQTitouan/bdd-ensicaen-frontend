import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainMenu from "../../server/common/MainMenu";

const Open: NextPage = () => {
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
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={() => {console.log("temp form submission")}}>
            <div>
              <div className="align-bottom mb-4">
                <Image className="inline-block w-10 h-10" src="/logo-arkea.png" alt="logo société arkea" />
                <span>Ouverture d&aposun compte</span>
              </div>
              <div className="flex h-10 mb-4">
                <Image src="/info.png" alt="logo information" className="object-contain flex-initial"/>
                <span className="flex-initial">Veuillez remplir le formulaire ci-dessous afin d&aposouvrir un nouveau compte bancaire.</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="titulaire" className="block text-gray-700 text-sm font-bold mb-2">Titulaire du compte</label>
              <select id="titulaire" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option selected>Template value</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type de compte</label>
              <select id="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option selected>Template value</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="solde_init" className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
              <input type="text" id="solde_init" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            {/* action part of the form */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enregistrer client</button>
              <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Effacer le formulaire</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Open;
