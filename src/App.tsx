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
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
