import { Head } from "$fresh/runtime.ts";
import Chatbox from "../islands/Chatbox.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranav's Website</title>
      </Head>
      <div class="flex flex-row justify-center p-5 w-screen h-screen">
        <Chatbox start={5} />
      </div>
    </>
  );
}
