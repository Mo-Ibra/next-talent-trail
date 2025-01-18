import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/not-found/1.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Ops! Page Not Found
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto my-4">
          Please make sure the URL is correct and try again.
        </p>

        <Link href="/" className="inline-flex items-center justify-center">
          <Button variant="outline">
            Return Home
            <HomeIcon className="ml-2 size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;