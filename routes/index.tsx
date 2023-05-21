import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranav's Website</title>
      </Head>
      <Header active="/about_me"></Header>
    </>
  );
}
