import { Navbar } from "@/components/Shared/Navbar/Navbar";
import SliderVideo from "@/app/(routes)/(home)/components/SliderVideo/SliderVideo";
import Footer from "@/components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <SliderVideo />
      </main>
      <Footer />
    </>
  );
}
