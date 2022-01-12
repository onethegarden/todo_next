import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TodoLayout({ children }: Props) {
  return (
    <div className="App">
      <Head>
        <title>next-todo</title>
        <meta name="description" content="next로 만드는 todoApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">{children}</div>
    </div>
  );
}

export default TodoLayout;
