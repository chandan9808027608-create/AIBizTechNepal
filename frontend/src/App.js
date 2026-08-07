import "@/App.css";
import { Toaster } from "sonner";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

function App() {
  return (
    <div className="App bg-slate-950 font-body text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
