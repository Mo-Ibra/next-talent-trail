import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaTwitter } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

import { testimonials } from "@/data/testimonials";

function Testimonials1() {
  return (
    <section
      className="py-16 px-4 md:px-6 relative"
      style={{
        maskImage: "linear-gradient(to top,rgb(255 255 255/.3),black 800px)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold">
            Wow! We got an
            <br />
            Awesome testimonials
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-xl pt-5 bg-card text-card-foreground border-0 shadow-lg dark:bg-gray-800 ${testimonial.author.class}`}
            >
              <div className="p-6 pt-0">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                      />
                      <AvatarFallback>
                        {testimonial.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.author.handle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaTwitter className="h-4 w-4" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-40 -z-10 rounded-full blur-3xl bottom-2/4 right-2/4"></div>
        <div className="absolute w-96 h-96 bg-orange-50 dark:bg-orange-500/10 opacity rounded-full top-10 -right-52 -z-10"></div>
        <MapPin className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -left-20 -z-10" />
      </div>
    </section>
  );
}

export default Testimonials1;
