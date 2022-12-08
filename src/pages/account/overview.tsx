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
        <h1>Arkea Bonjour !</h1>
        <p>
          Le Crédit Mutuel Arkéa est un groupe de bancassurance coopératif et mutualiste en France.
        </p>
        <p>
          Il est composé des fédérations du Crédit Mutuel de Bretagne et du Sud-Ouest ainsi que d’une trentaine de filiales spécialisées
          (Suravenir, Fortuneo Banque, Financo, Monext, Mangopay, Kengo, Arkéa Investment Services (anciennement Federal Finance), Arkéa
          Assistance, Arkéa Banking Services, Arkéa Crédit Bail, Arkéa Banque Entreprises et Institutionnels, et d’autres). Son siège
          social est implanté au Relecq-Kerhuon dans le Finistère.
        </p>
        <p>
          Crédit Mutuel Arkéa est l&aposune des six caisses fédérales du Crédit Mutuel. Il s&aposagit de la seconde caisse fédérale en termes
          d&aposimportance au sein du groupe Crédit Mutuel, après le Crédit Mutuel Alliance Fédérale et avant le Crédit Mutuel Nord Europe.
          </p>
      </main>
    </>
  );
};

export default Overview;
