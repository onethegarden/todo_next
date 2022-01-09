import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>next-todo</title>
        <meta name="description" content="next로 만드는 todoApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>next-todo</h1>
    </div>
  );
};

export default Home;
