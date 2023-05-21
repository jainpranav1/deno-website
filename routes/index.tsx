import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranav's Site</title>
      </Head>
      <Header active="/about_me"></Header>
      <Footer></Footer>
    </>
  );
}
