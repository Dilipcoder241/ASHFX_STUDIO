import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Reveal } from "./Reveal";
import pravinImage from "../../assets/pr.png";


export function TeamSection() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Srijan Pandey",
      designation: "Lead Editor",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Sahil Gupta",
      designation: "Video Editor & Motion Graphic Design",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Rishabh Sharma",
      designation: "Cinematographer",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

