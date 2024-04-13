// import { BasicCalendar } from "@/components";
import Image from "next/image";
import Todos from "@/components/Todos";
import MakeTodo from "@/components/MakeTodo";

export default function Home() {
  return (
    <main className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      All Todos
      <MakeTodo />
      <Todos />
    </main>
  );
}
