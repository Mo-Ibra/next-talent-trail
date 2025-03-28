"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Printer } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion
import { plans } from "@/data/plans";

function Pricing() {
  const [isYearly, setIsYearly] = React.useState(true);

  const getPrice = (price) => {
    const yearlyPrice = price * 12 * 0.8;
    return isYearly ? (yearlyPrice / 12).toFixed(0) : price;
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 1.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 px-4 md:px-6 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-8 lg:px-12"
      >
        <div className="text-center space-y-4 mb-6">
          <h2 className="text-4xl font-bold">Plans that match your needs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No matter how many team members you have - our pricing is simple,
            transparent and adapts to the size of your company.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                isYearly
                  ? "bg-white dark:bg-darkbackground shadow-sm text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Bill Yearly{" "}
              <span className="text-orange-600 font-bold">-20%</span>
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                !isYearly
                  ? "bg-white dark:bg-darkbackground shadow-sm text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Bill Monthly
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                className={
                  plan.highlighted
                    ? "bg-slate-900 text-slate-50 dark:bg-darkbackground dark:text-gray-400"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="flex flex-col gap-4">
                    <span>{plan.name}</span>
                    <span className="text-3xl">
                      ${getPrice(plan.price)}
                      <span className="text-sm font-normal text-muted-foreground">
                        /month
                      </span>
                    </span>
                  </CardTitle>
                  <p
                    className={`text-sm ${
                      plan.highlighted
                        ? "text-slate-400"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check
                          className={`h-4 w-4 ${
                            plan.highlighted
                              ? "text-slate-50"
                              : "text-orange-500"
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-slate-900 hover:bg-slate-200 dark:bg-darkbackground dark:text-gray-400 dark:hover:bg-orange-600 dark:hover:text-white dark:border-gray-700 dark:border"
                        : "bg-orange-600 text-white hover:bg-orange-700"
                    }`}
                  >
                    Try for free
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Printer
          className="absolute w-60 h-60 text-orange-500/20 opacity-40 -z-10 top-20 right-10"
          strokeWidth={3}
        />
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-40 -z-10 rounded-full blur-3xl dark:blur-0 bottom-20 -left-20"></div>
      </div>
    </section>
  );
}

export default Pricing;
