import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaTwitter } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const testimonials = [
  {
    author: {
      name: "Peter Lowe",
      handle: "@peterlowex",
      image: "/images/avatars/1.png",
      class: "rotate-2",
    },
    content:
      "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can't imagine my life without it.",
    date: "May 19, 2027",
  },
  {
    author: {
      name: "Rodri Alba",
      handle: "@rodri_spn",
      image: "/images/avatars/2.png",
      class: "-rotate-1",
    },
    content:
      "As a busy professional, Simple has been a lifesaver. It streamlines my workflow, allowing me to focus on what truly matters. Plus, its minimalist design is a breath of fresh air.",
    date: "May 19, 2027",
  },
  {
    author: {
      name: "Michele Lex",
      handle: "@MikyBrown",
      image: "/images/avatars/3.png",
      class: "-rotate-2",
    },
    content:
      "I've tried countless builder tools, but none compare to Simple. Its straightforward approach to creating websites keeps me on track without overwhelming me.",
    date: "May 05, 2027",
  },
  {
    author: {
      name: "Michael Ross",
      handle: "@michjack",
      image: "/images/avatars/3.png",
      class: "rotate-2",
    },
    content:
      "I've struggled to find a website builder that suits my needs until I found Simple. Its clean design and user-friendly features make staying organized a breeze. I highly recommend it.",
    date: "Apr 12, 2027",
  },
  {
    author: {
      name: "Mike Bryan",
      handle: "@mike0point7",
      image: "/images/avatars/2.png",
      class: "-rotate-1",
    },
    content:
      "Simple lives up to its name in every way. It's incredibly easy to use yet powerful enough to handle all my tasks effortlessly. It's become an essential part of my daily routine.",
    date: "Mar 10, 2027",
  },
  {
    author: {
      name: "Sarah Rodriguez",
      handle: "@sararodriguez",
      image: "/images/avatars/1.png",
      class: "-rotate-2",
    },
    content:
      "I was blown away by how easy it was to create my website using this tool! Within a few hours, I had a professional-looking site up and running, and my client could not believe.",
    date: "Feb 27, 2027",
  },
  {
    author: {
      name: "Duncan Mitch",
      handle: "@lovingme_",
      image: "/images/avatars/2.png",
      class: "-rotate-3",
    },
    content:
      "Simple has simplified my life in more ways than one. From managing my clients to keeping track of deadlines, it's become my go-to tool for staying on top of everything. I couldn't imagine managing without it!",
    date: "Feb 08, 2027",
  },
  {
    author: {
      name: "Kavisha Mills",
      handle: "@kavigirl99",
      image: "/images/avatars/1.png",
      class: "-rotate-1",
    },
    content:
      "I'm a freelancer, and having a professional website is crucial for attracting clients. This tool not only helped me create a beautiful portfolio but also boosted my visibility.",
    date: "Jan 28, 2027",
  },
  {
    author: {
      name: "Dante Luzzi",
      handle: "@dante1987",
      image: "/images/avatars/3.png",
      class: "rotate-2",
    },
    content:
      "I've never been a fan of complicated website builders, which is why Simple is perfect for me. Its minimalist design and straightforward functionality make staying organized feel like second nature.",
    date: "Jan 02, 2027",
  },
];

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
              className={`rounded-xl bg-card text-card-foreground border-0 shadow-lg ${testimonial.author.class}`}
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
        <div className="absolute w-96 h-96 bg-orange-50 opacity rounded-full top-10 -right-52 -z-10"></div>
        <MapPin className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -left-20 -z-10" />
      </div>
    </section>
  );
}

export default Testimonials1;
