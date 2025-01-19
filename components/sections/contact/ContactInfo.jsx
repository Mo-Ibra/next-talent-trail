import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5 text-orange-500" />,
    title: "Phone",
    details: ["+1 (555) 000-0000", "+1 (555) 000-0001"],
  },
  {
    icon: <Mail className="h-5 w-5 text-orange-500" />,
    title: "Email",
    details: ["support@example.com", "info@example.com"],
  },
  {
    icon: <MapPin className="h-5 w-5 text-orange-500" />,
    title: "Location",
    details: ["123 Business Avenue", "New York, NY 10001"],
  },
  {
    icon: <Clock className="h-5 w-5 text-orange-500" />,
    title: "Business Hours",
    details: ["Monday - Friday: 9am to 5pm", "Saturday & Sunday: Closed"],
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-orange-50 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer duration-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 opacity-10"></div>
    </section>
  );
};

export default ContactInfo;
