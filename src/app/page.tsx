import { BentoGrid } from "@/components/BentoGrid";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <div className="grid-bg min-h-screen p-4 md:p-6 lg:p-8">
      <TargetCursor 
        spinDuration={3}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.15}
      />
      <BentoGrid />
    </div>
  );
}
