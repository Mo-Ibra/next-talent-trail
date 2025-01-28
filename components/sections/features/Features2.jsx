"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


import { features2 } from "@/data/features";

const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // Start from the left side
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features2 = () => {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-left space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Why US
          </Badge>
          <h2 className="text-4xl font-bold">
            Because we have the best
            <br />
            features.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features2.map((reason, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col py-6 shadow-md text-center border rounded-lg"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-orange-100 mx-auto my-2 hover:bg-orange-200 duration-300 cursor-pointer">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold my-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground max-w-60 mx-auto">
                {reason.description}
              </p>
              <Button variant="outline" className="mt-4 mx-auto">
                Read More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 -z-10 rounded-full blur-3xl -bottom-10 -right-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 dark:bg-orange-500/10 opacity rounded-full bottom-10 -left-52 -z-10"></div>
      </div>
    </section>
  );
};

export default Features2;