"use client";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import React from "react";

import { plans, plansFeatures } from "@/data/plans";

function PricingFeatures() {
  return (
    <section className="py-16 px-4 md:px-6 bg-orange-50 dark:bg-darkbackground">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 min-w-[200px]"></th>
                {plans.map((plan) => (
                  <th key={plan.name} className={`p-4 min-w-[160px] text-left`}>
                    <div className="space-y-4">
                      <div className="text-lg font-semibold text-gray-700">
                        {plan.name}
                      </div>
                      <Button
                        className={`w-full ${
                          plan.name === "Business"
                            ? "bg-white text-slate-900 hover:bg-slate-200 dark:bg-darkbackground dark:text-gray-400 dark:hover:bg-orange-600 dark:hover:text-white dark:border-gray-700 dark:border"
                            : "bg-orange-600 text-white hover:bg-orange-700"
                        }`}
                      >
                        Free trial
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plansFeatures.map((group, groupIndex) => (
                <React.Fragment key={group.id}>
                  <tr>
                    <td colSpan={5} className="p-4 pt-8">
                      <div className="font-semibold">{group.title}</div>
                    </td>
                  </tr>
                  {group.features.map((feature, featureIndex) => (
                    <tr key={feature.id}>
                      <td className="p-4 text-muted-foreground border-t">
                        {feature.name}
                      </td>
                      {plans.map((plan) => (
                        <td
                          key={plan.id}
                          className={`p-4 text-center border-t
                          }`}
                        >
                          {typeof feature.values[plan.name] === "boolean" ? (
                            feature.values[plan.name] ? (
                              <Check
                                className={`mx-auto h-4 w-4 text-emerald-500`}
                              />
                            ) : <X className="mx-auto h-4 w-4 text-red-500" />
                          ) : (
                            <span>{feature.values[plan.name]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PricingFeatures;