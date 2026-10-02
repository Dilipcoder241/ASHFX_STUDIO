import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}
