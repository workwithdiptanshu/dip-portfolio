import Bakcground from "@/components/Common/Bakcground";
import Footer from "@/components/Common/Footer";
import Heading from "@/components/Common/Heading";
import { SmoothScrollProvider } from "@/components/Locomotive/SmoothScroll";
import Contact from "@/components/portfolio/Contact/Contact";
import Header from "@/components/portfolio/Header/Header";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Services from "@/components/portfolio/Services/Services";
import Work from "@/components/portfolio/Work/Work";

export default function Home() {
    return (
        <main className="relative">
            <Navbar />
            <SmoothScrollProvider options={{ smooth: true }}>
                <Header />
                <Heading
                    heading={["Enough Talk", "Let's See", "My work"]}
                    number={1}
                />
                <Work />
                <Services />
                <Contact />
                <Bakcground />
            </SmoothScrollProvider>
            <Footer />
        </main>
    );
}
