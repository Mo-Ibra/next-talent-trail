import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    rating: 5,
    content:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    author: {
      name: "Coriss Ambady",
      role: "Financial Analyst",
      image: "/images/avatars/1.jpg",
    },
  },
  {
    rating: 5,
    content:
      "Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    author: {
      name: "Cory Zamora",
      role: "Marketing Specialist",
      image: "/images/avatars/2.jpg",
    },
  },
  {
    rating: 5,
    content:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Curabitur blandit tempus porttitor.",
    author: {
      name: "Nikolas Brooten",
      role: "Sales Manager",
      image: "/images/avatars/3.jpg",
    },
  },
  {
    rating: 5,
    content:
      "Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam rhoncus. Donec id elit non mi porta gravida at eget metus.",
    author: {
      name: "Coriss Ambady",
      role: "Financial Analyst",
      image: "/images/avatars/4.jpg",
    },
  },
  {
    rating: 5,
    content:
      "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    author: {
      name: "Laura Widerski",
      role: "Sales Specialist",
      image: "/images/avatars/1.jpg",
    },
  },
  {
    rating: 5,
    content:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    author: {
      name: "Jackie Sanders",
      role: "Investment Planner",
      image: "/images/avatars/2.jpg",
    },
  },
];

function Testimonials2() {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            HAPPY CUSTOMERS
          </Badge>
          <h2 className="text-4xl font-bold">
            Don't take our word for it. See what
            <br />
            customers are saying about us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-darkgray">
              <CardContent className="p-6">
                <div
                  className="flex gap-1 mb-4"
                  aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400">"{testimonial.content}"</p>
                </blockquote>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.author.image || "/placeholder.svg"}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-400">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 -z-10 rounded-full blur-3xl -bottom-10 -left-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 dark:bg-orange-500/10 opacity rounded-full top-10 -right-52 -z-10"></div>
      </div>
    </section>
  );
}

export default Testimonials2;
