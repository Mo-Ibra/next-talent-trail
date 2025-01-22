"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HandshakeIcon, HelpCircle } from "lucide-react";

import { faqs } from "@/data/faqs";
import { Badge } from "@/components/ui/badge";

function FAQ2() {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold">Questions And Answers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              type="single"
              collapsible
              className="bg-white dark:bg-darkgray rounded-lg shadow-sm"
            >
              <AccordionItem value={faq.id} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-2 text-left">
                    <HelpCircle className="h-5 w-5 flex-shrink-0 text-orange-600" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HandshakeIcon className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -right-20 -z-10" />
      </div>
    </section>
  );
}

export default FAQ2;
