import Hero from '@/components/sections/home/Hero';
import WhyUs from '@/components/sections/home/Features';
import Leaders from '@/components/sections/home/About';
import Treatments from '@/components/sections/home/Treatments';
import Team from '@/components/sections/home/Team';

export default function Home() {
  return (
    <div>
      <main>
      <Hero />
      <WhyUs />
      <Leaders />
      <Treatments />
      <Team />
    </main>
    </div>
  );
}
