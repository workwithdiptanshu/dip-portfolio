import Footer from "@/components/Common/Footer";
import { PawTrail } from "@/components/Common/Handwriting";
import BitgrainFeature from "@/components/portfolio/Bitgrain/BitgrainFeature";
import About from "@/components/portfolio/About/About";
import Experience from "@/components/portfolio/Experience/Experience";
import Header from "@/components/portfolio/Header/Header";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Skills from "@/components/portfolio/Skills/Skills";
import Work from "@/components/portfolio/Work/Work";

export default function Home() {
    return (
        <main className="relative overflow-x-clip">
            <Navbar />
            <Header />
            <BitgrainFeature />
            <Work />
            <PawTrail className="mt-20 sm:mt-24 -mb-10" />
            <Experience />
            <Skills />
            <About />
            <PawTrail color="indigo" className="mt-16 -mb-6" steps={6} />
            <Footer />
        </main>
    );
}
