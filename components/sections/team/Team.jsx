import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import { FaTwitter, FaFacebookSquare, FaDribbble } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";

import { team } from "@/data/team";

const Team = () => {
  return (
    <section className="py-16 pb-24 px-4 md:px-6 bg-orange-50 dark:bg-darkbackground relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Our Team
          </Badge>
          <h2 className="text-4xl font-bold">
            We are here to help you
            <br />
            to achieve your goals.
          </h2>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="border border-orange-50 dark:border-gray-800 shadow-md p-5">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="mb-4 relative w-24 h-24 mx-auto">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-orange-600 font-bold mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.social.twitter}
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <FaTwitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href={member.social.facebook}
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <FaFacebookSquare className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href={member.social.dribbble}
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <FaDribbble className="h-4 w-4" />
                      <span className="sr-only">Dribbble</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
