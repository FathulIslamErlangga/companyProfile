import Hero from "@/components/section/Hero";
import OverviewPage from "@/components/section/OverviewPage";
import ServiceHero from "@/components/section/ServiceHero";
import Testimoni from "@/components/section/Testimoni";
import TagLine from "@/components/section/TagLine";

export default function Home() {
  return (
    <main>
      <Hero />
      <OverviewPage />
      <ServiceHero />
      <TagLine />
      <Testimoni />
    </main>
  );
}
