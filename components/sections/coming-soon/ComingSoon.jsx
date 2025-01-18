import { CountdownTimer } from "@/components/common/countdown-timer";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {

  // Set target date to 391 days from now
  const targetDate = new Date();

  targetDate.setDate(targetDate.getDate() + 391);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/soon/4.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          We Are Coming Soon...
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          We are currently working on our new website and will be launching in
          the next few months.
        </p>

        <CountdownTimer targetDate={targetDate} />

        <Link href="/" className="inline-flex items-center justify-center mt-8">
          <Button variant="outline">
            Return Home
            <HomeIcon className="ml-2 size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
