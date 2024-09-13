import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      gradientToColors: ["#FFFFFF"],
    },
  },
  colors: ["#3C50E0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 355,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [1, 0],
    curve: "monotoneCubic",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const series = [
    {
      name: "Total Investments",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
  ];

  return (
    <>
      <div className="col-span-12 rounded-sm bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <p className="text-sm font-small mr-2">Invested Value:</p>
              <p className="font-semibold text-primary">100000</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-small mr-2">Total Returns:</p>
              <p className="font-semibold text-primary">500000</p>
              <span className="ml-3 text-sm font-bold text-meta-3">500%</span>
              <span className="flex h-8 w-8 items-center justify-center">
                <svg
                  className="h-3 w-3 text-meta-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md p-1.5 ">
              <Button variant={"outline"}>Day</Button>
              <Button variant={"outline"}>Week</Button>
              <Button variant={"outline"}>Month</Button>
            </div>
          </div>
        </div>
        <div>
          <div id="chartOne" className="-ml-5">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={450}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartOne;
