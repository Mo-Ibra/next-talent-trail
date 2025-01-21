import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import React from "react";

const plans = ["Hobby", "Basic", "Business", "Enterprise"];

const featureGroups = [
  {
    title: "Key features",
    features: [
      {
        name: "Translated Words",
        values: {
          Hobby: "5,000",
          Basic: "15,000",
          Business: "25,000",
          Enterprise: "50,000",
        },
      },
      {
        name: "Search Page Limit",
        values: {
          Hobby: "100",
          Basic: "1,000",
          Business: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Custom Fonts",
        values: {
          Hobby: true,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        name: "Code Editor",
        values: {
          Hobby: false,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    title: "Hosting",
    features: [
      {
        name: "Bandwidth",
        values: {
          Hobby: "100MB",
          Basic: "1GB",
          Business: "10GB",
          Enterprise: "100GB",
        },
      },
      {
        name: "Visitors",
        values: {
          Hobby: "1,000",
          Basic: "10,000",
          Business: "50,000",
          Enterprise: "100,000",
        },
      },
      {
        name: "Max Upload Size",
        values: {
          Hobby: "5MB",
          Basic: "15MB",
          Business: "25MB",
          Enterprise: "Custom",
        },
      },
      {
        name: "SSL Certificate",
        values: {
          Hobby: true,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    title: "Creation",
    features: [
      {
        name: "Created Words",
        values: {
          Hobby: "Unlimited",
          Basic: "Unlimited",
          Business: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Team Projects",
        values: {
          Hobby: false,
          Basic: false,
          Business: true,
          Enterprise: true,
        },
      },
    ],
  },
];

function PricingFeatures() {
  return (
    <section className="py-16 px-4 md:px-6 bg-orange-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 min-w-[200px]"></th>
                {plans.map((plan) => (
                  <th key={plan} className={`p-4 min-w-[160px] text-left`}>
                    <div className="space-y-4">
                      <div className="text-lg font-semibold text-gray-700">
                        {plan}
                      </div>
                      <Button
                        className={`w-full ${
                          plan === "Business"
                            ? "bg-white text-slate-900 hover:bg-slate-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-orange-700 dark:hover:text-white border dark:border-gray-400"
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
              {featureGroups.map((group, groupIndex) => (
                <React.Fragment key={group.title}>
                  <tr>
                    <td colSpan={5} className="p-4 pt-8">
                      <div className="font-semibold">{group.title}</div>
                    </td>
                  </tr>
                  {group.features.map((feature, featureIndex) => (
                    <tr key={feature.name}>
                      <td className="p-4 text-muted-foreground border-t">
                        {feature.name}
                      </td>
                      {plans.map((plan) => (
                        <td
                          key={plan}
                          className={`p-4 text-center border-t
                          }`}
                        >
                          {typeof feature.values[plan] === "boolean" ? (
                            feature.values[plan] ? (
                              <Check
                                className={`mx-auto h-4 w-4 text-emerald-500`}
                              />
                            ) : <X className="mx-auto h-4 w-4 text-red-500" />
                          ) : (
                            <span>{feature.values[plan]}</span>
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