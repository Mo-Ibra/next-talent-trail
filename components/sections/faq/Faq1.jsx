"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Play } from "lucide-react";

import { faqs } from "@/data/faqs";

function FAQ1() {
  return (
    <section className="py-32 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/3.jpg"
                alt="Professional woman celebrating"
                width={640}
                height={400}
                className="w-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="bg-orange-600 rounded-full p-4 cursor-pointer transition-transform hover:scale-110">
                  <Play className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
              {/* Thumbnail overlay */}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-2xl overflow-hidden border-8 border-white shadow-lg">
                <Image
                  src="/images/5.jpg"
                  alt="Professional woman with laptop"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ1;
