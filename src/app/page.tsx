import About from "./_components/about/About";
import Home from "./_components/home/Home";
import Navbar from "./_components/shared/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}
