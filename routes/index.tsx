import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

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
