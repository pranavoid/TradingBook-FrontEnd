import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LinkItem } from "./utils/utils";


const brokers = [
  { name: "Zerodha", logo: "/zerodha-kite-seeklogo.svg" },
  { name: "Groww", logo: "/groww_logo-freelogovectors.net_.png" },
  { name: "AngelOne", logo: "/angeloneplaceholder.png" },
  { name: "Dhan", logo: "/dhanplaceholder.png" },
  { name: "Upstox", logo: "/upstoxplaceholder.png" },
  { name: "5Paisa", logo: "/path/to/5paisa-logo.png" },
  { name: "Axis", logo: "/path/to/axis-logo.png" },
  { name: "HDFC", logo: "/path/to/hdfc-logo.png" },
  { name: "ICICI", logo: "/path/to/icici-logo.png" },
  { name: "Kotak", logo: "/path/to/kotak-logo.png" },
  { name: "Fundzbazar", logo: "/path/to/fundzbazar-logo.png" },
  { name: "Alice Blue", logo: "/path/to/aliceblue-logo.png" },
  { name: "Nuvama", logo: "/path/to/nuvama-logo.png" },
  { name: "Motilal", logo: "/path/to/motilal-logo.png" },
];

const Brokers = () => {
  return (
    <>
      
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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