import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { Itechnologies } from "./types/technologiesType";
import Footer from "./components/Footer";

function App() {
  const technologiesFetch = async (): Promise<Itechnologies[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="flex min-h-[300px] items-center justify-center">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
          </div>
        }
      >
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
