import { CountdownTimer } from "@/components/common/countdown-timer";

export default function Maintenance() {

  // Set target date to 5 days from now
  const targetDate = new Date();

  targetDate.setDate(targetDate.getDate() + 5);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/soon/3.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          We Are on Maintenance...
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          We are on maintenance and will be back online in the next few hours,
          thank you for your patience.
        </p>

        <CountdownTimer targetDate={targetDate} />

      </div>
    </div>
  );
}