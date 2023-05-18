import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Chatbox(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="w-full lg:w-[70%] h-full border-4 border-indigo-500">
      <p>hello</p>
    </div>
  );
}
