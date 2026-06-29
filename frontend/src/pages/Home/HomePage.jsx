import Hero from "./Hero";
import Features from "./Features";
import BackendStatus from "../../components/common/BackendStatus";

function HomePage() {
  return (
    <>
      <Hero />
      <BackendStatus />
      <Features />
    </>
  );
}

export default HomePage;