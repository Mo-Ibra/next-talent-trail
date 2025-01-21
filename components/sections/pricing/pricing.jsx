"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Printer } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: 12,
    description:
      "For hobby, staging sites, and side hustles and personal projects.",
    features: [
      "2 pages",
      "Limited traffic",
      "50 form submissions",
      "1,000 visitors/mo",
    ],
  },
  {
    name: "Basic",
    price: 34,
    description: "For relatively simple, static sites and landing pages.",
    features: [
      "150 pages",
      "Custom domain",
      "200 form submissions",
      "10,000 visitors/mo",
    ],
  },
  {
    name: "Business",
    price: 47,
    description: "For larger sites, blogs, and other data-driven content.",
    features: [
      "150 pages",
      "Custom domain",
      "500 form submissions",
      "50,000 visitors/mo",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 79,
    description: "For those needing an enterprise-grade solution.",
    features: [
      "150 pages",
      "Custom domain",
      "500 form submissions",
      "50,000 visitors/mo",
    ],
  },
];

function Pricing() {
  const [isYearly, setIsYearly] = React.useState(true);

  const getPrice = (price) => {
    const yearlyPrice = price * 12 * 0.8; // 20% discount
    return isYearly ? (yearlyPrice / 12).toFixed(0) : price;
  };

  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
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
          {plans.map((plan) => (
            <Card
              key={plan.name}
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
                          plan.highlighted ? "text-slate-50" : "text-orange-500"
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
          ))}
        </div>
      </div>
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
