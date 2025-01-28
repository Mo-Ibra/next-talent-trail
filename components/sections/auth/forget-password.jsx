"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { LogIn } from "lucide-react";

import { motion } from "framer-motion";

const ForgetPassword = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-40 pb-20 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4">
          <motion.div
            className="mx-auto w-full max-w-sm rounded-md p-6 shadow border"
            variants={animationVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-6 flex flex-col items-center">
              <Image
                src="/logo.svg"
                alt="logo"
                width={48}
                height={48}
                className="mb-7 h-10 w-auto"
              />
              <p className="mb-2 text-2xl font-bold">Forget your password</p>
            </div>
            <div>
              <div className="grid gap-4">
                <Input type="email" placeholder="Enter your email" required />
                <Button
                  type="submit"
                  className="mt-2 w-full bg-orange-600 hover:bg-orange-700"
                >
                  Send a code.
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Already have an account?</p>
                <Link href="/auth/login" className="font-medium text-primary">
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-50 dark:bg-orange-500/10 opacity rounded-full top-20 -right-52 -z-10"></div>
        <LogIn className="absolute w-96 h-96 text-orange-500/5 bottom-10 -left-20 -z-10" />
      </div>
    </section>
  );
};

export default ForgetPassword;
