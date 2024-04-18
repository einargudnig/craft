import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
              <h1 className="md:text-2xl font-bold">Crafting</h1>
              <ThemeToggle />
          </div>
          <div>
            This is a component I will build!
          </div>
        </div>
      </div>
    </section>
  );
}
