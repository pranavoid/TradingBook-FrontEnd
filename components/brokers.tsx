import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { LinkItem } from './utils/utils';

const brokers = [
    { name: "Zerodha", logo: "/zerodha-kite-seeklogo.svg" },
    { name: "Groww", logo: "/groww_logo-freelogovectors.net_.png" },
    { name: "Angel One", logo: "/path/to/angel-broking-logo.png" },
    { name: "Dhan", logo: "/path/to/dhan-logo.png" },
    { name: "Upstox", logo: "/upstox-seeklogo.svg" },
];

const Brokers = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <Card className="relative w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Connect with your broker</CardTitle>
            <CardDescription className="text-center">
              Login securely to get started.
            </CardDescription>
          </CardHeader>

          
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {brokers.map((broker) => (
                <div
                  key={broker.name}
                  className="flex flex-col items-center space-y-2"
                >
                  <LinkItem
                    href={`/connect/${broker.name}`}
                    text={broker.name}
                    imageSrc={broker.logo}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Brokers;