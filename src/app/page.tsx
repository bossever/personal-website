import About from "./_components/about/About";
import Home from "./_components/home/Home";
import Projects from "./_components/projects/Projects";
import Navbar from "./_components/navbar/Navbar";
import Work from "./_components/work/Work";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Work />
    </>
  );
}
