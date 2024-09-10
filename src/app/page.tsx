import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer"


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  

     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <Testimonial/>
   <UpcomingWebinars/>
   <Instructors/>
   <Footer/>
   </main>
      
   
  );
}
