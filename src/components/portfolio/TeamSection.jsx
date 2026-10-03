import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Reveal } from "./Reveal";
import pravinImage from "../../assets/pr.png";
import srijanImage from "../../assets/shrijan.png";
import meenalImage from "../../assets/minal.png";
import { m } from "motion/react";
import risabhImage from "../../assets/rishabh.png";
import sahilImage from "../../assets/sahil.png";


export function TeamSection() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Srijan Pandey",
      designation: "Lead Editor",
      src: srijanImage,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Sahil Gupta",
      designation: "Video Editor & Motion Graphic Design",
      src: sahilImage,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Meenal Choudhary",
      designation: "Model - Representative",
      src: meenalImage,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Rishabh Sharma",
      designation: "Cinematographer",
      src: risabhImage,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Pravin Gurjar",
      designation: "Graphic Designer",
      src: pravinImage,
    },
  ];
  return (
    <section id="team" className="relative bg-ink/50 py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-5">
         <Reveal>
           <div className="text-center">
             <h2 className="display-xl text-[clamp(2.5rem,8vw,6rem)] text-blush">
               Introducing
             </h2>
             <p className="font-script text-3xl text-primary sm:text-4xl">
               our team
             </p>
           </div>
        </Reveal>
      </div>
    <AnimatedTestimonials testimonials={testimonials} />
    </section>
  )
}

