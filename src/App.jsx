import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import { useDarkMode } from "./hooks/useDarkMode";

const Destinations = lazy(() => import("./sections/Destinations"));
const Packages = lazy(() => import("./sections/Packages"));
const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Gallery = lazy(() => import("./sections/Gallery"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleDark } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Navbar isDark={isDark} toggleDark={toggleDark} />
          <main>
            <Hero />
            <Suspense fallback={<SectionFallback />}><Destinations /></Suspense>
            <Suspense fallback={<SectionFallback />}><Packages /></Suspense>
            <Suspense fallback={<SectionFallback />}><WhyChooseUs /></Suspense>
            <Suspense fallback={<SectionFallback />}><Testimonials /></Suspense>
            <Suspense fallback={<SectionFallback />}><Gallery /></Suspense>
            <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
