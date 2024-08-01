import Testimonials from "@/components/main/Testimonials";
import Courses from "@/components/main/Courses";
import Hero from "@/components/main/Hero";
import Features from "@/components/main/features";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Courses/>
        <Features/>
        <Testimonials/>
      </div>
    </main>
  );
}
