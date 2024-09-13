import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LinkItem } from "../utils/utils";

const brokers = [
  { name: "Zerodha", logo: "/zerodha-kite-seeklogo.svg" },
  { name: "Groww", logo: "/groww_logo-freelogovectors.net_.png" },
  { name: "AngelOne", logo: "/angeloneplaceholder.png" },
  { name: "Dhan", logo: "/dhanplaceholder.png" },
  { name: "Upstox", logo: "/" },
  { name: "5Paisa", logo: "/" },
  { name: "Axis", logo: "/" },
  { name: "HDFC", logo: "/" },
  { name: "ICICI", logo: "/" },
  { name: "Kotak", logo: "/" },
  { name: "Fundzbazar", logo: "/" },
  { name: "Alice Blue", logo: "/" },
  { name: "Nuvama", logo: "/" },
  { name: "Motilal", logo: "/" },
];

const Brokers = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-black bg-opacity-5 h-screen">
        <Card className="relative w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Connect with Your Broker
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Login securely to get started.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {brokers.map((broker) => (
                <LinkItem
                  key={broker.name}
                  href={`/connect/${broker.name}`}
                  text={broker.name}
                  imageSrc={broker.logo}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Brokers;