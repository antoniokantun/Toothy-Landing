import Hero from '@/components/sections/home/Hero';
import WhyUs from '@/components/sections/home/Features';
import Leaders from '@/components/sections/home/About';
import Treatments from '@/components/sections/home/Treatments';
import Team from '@/components/sections/home/Team';
import Testimonials from '@/components/sections/home/Testimonials';
import CallToAction from '@/components/sections/home/CallToAction';
import Location from '@/components/sections/home/Location';
import ContactForm from '@/components/sections/home/ContactForm';

export default function Home() {
  return (
    <div>
      <main>
      <Hero />
      <WhyUs />
      <Leaders />
      <Treatments />
      <Team />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      <Location />
    </main>
    </div>
  );
}
