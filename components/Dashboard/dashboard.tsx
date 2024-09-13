import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import ChartOne from "../Charts/ChartOne";

export function Dashboard(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen w-full bg-muted/40">
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:p-2">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle>My Portfolio</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Manage and track your investments in stocks, mutual funds, ETFs,
              and other asset classes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {/* Cards for different investment categories */}
              {/* Stocks */}
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Stocks</CardDescription>
                  <CardTitle className="text-4xl">$45,231.89</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View Stocks
                  </Link>
                </CardFooter>
              </Card>
              {/* Mutual Funds */}
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Mutual Funds</CardDescription>
                  <CardTitle className="text-4xl">$25,329.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View Mutual Funds
                  </Link>
                </CardFooter>
              </Card>
              {/* ETFs */}
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>ETFs</CardDescription>
                  <CardTitle className="text-4xl">$15,129.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +15% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View ETFs
                  </Link>
                </CardFooter>
              </Card>
              {/* Other Investments */}
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Other Investments</CardDescription>
                  <CardTitle className="text-4xl">$7,500.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +5% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View Other Investments
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* New Section: Recent Transactions and Chart on the same row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-8">
          {/* Recent Transactions Section - spans 2 columns */}
          <Card className="col-span-3">
            <CardHeader className="pb-3">
              <CardTitle>Total Investment</CardTitle>
              <CardDescription>View your total investment.</CardDescription>
            </CardHeader>
            <ChartOne />
          </Card>
          <Card className="col-span-2" x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-3">
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                View your recent investment transactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Existing Transaction */}
                  <TableRow>
                    <TableCell>Bought</TableCell>
                    <TableCell>AAPL</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>$120.00</TableCell>
                    <TableCell>June 1, 2024</TableCell>
                    <TableCell>$1,200.00</TableCell>
                  </TableRow>
                  {/* Additional Entries */}
                  <TableRow>
                    <TableCell>Sold</TableCell>
                    <TableCell>MSFT</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell>June 5, 2024</TableCell>
                    <TableCell>$1,250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bought</TableCell>
                    <TableCell>GOOGL</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>$1500.00</TableCell>
                    <TableCell>June 10, 2024</TableCell>
                    <TableCell>$12,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sold</TableCell>
                    <TableCell>AMZN</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>$3100.00</TableCell>
                    <TableCell>June 15, 2024</TableCell>
                    <TableCell>$9,300.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bought</TableCell>
                    <TableCell>TSLA</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>$720.00</TableCell>
                    <TableCell>June 20, 2024</TableCell>
                    <TableCell>$2,880.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Chart Section - spans 1 column */}
        </div>
      </div>
    </main>
  );
}
