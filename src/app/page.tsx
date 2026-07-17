import BlogHome from "@/components/BlogHome/BlogHome";
import Bakcground from "@/components/Common/Bakcground";
import Footer from "@/components/Common/Footer";
import Heading from "@/components/Common/Heading";
import { SmoothScrollProvider } from "@/components/Locomotive/SmoothScroll";
import Contact from "@/components/portfolio/Contact/Contact";
import Experience from "@/components/portfolio/Experience/Experience";
import Header from "@/components/portfolio/Header/Header";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Work from "@/components/portfolio/Work/Work";

export default function Home() {
    return (
        <main className="relative">
            <Navbar />
            <SmoothScrollProvider options={{ smooth: true }}>
                <Header />
                <Heading heading={"Enough Talk, Where Have I Worked?"} number={1} />
                <Experience />
                <Heading heading={"And Here's What I've Built"} number={2} />
                <Work />
                <BlogHome />
                <Contact />
                <Bakcground />
            </SmoothScrollProvider>
            <Footer />
        </main>
    );
}
