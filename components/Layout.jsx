import Head from "next/head";
import Nav from "./Navigation/Nav";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Unibans</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav /> */}
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
