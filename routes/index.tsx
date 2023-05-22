import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranav's Site</title>
      </Head>
      <Header active="/"></Header>
      <div class="flex flex-row justify-evenly items-center">
        <img src="/graduation_pic.png" class="rounded w-64" />
        <div class="flex flex-col justify-center max-w-md">
          <p class="text-4xl font-bold self-center mb-4">Pranav's Site</p>
          <q class="self-center">
            We live on this speck called Earth - think about what you might do,
            today or tomorrow - and make the most of it.
          </q>
          <p class="self-end">
            <b>- Neil deGrasse Tyson</b>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
