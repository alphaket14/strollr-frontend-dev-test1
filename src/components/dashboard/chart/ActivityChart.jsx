/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import * as React from "react";
import ReactApexChart from "react-apexcharts";

const ActivityChart = () => {
  const state = {
    series: [
      {
        name: "Active",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Inactive",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      colors: ["#126322", "#e5e5e5"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Tru", "Fri", "Sat"],
      },
      // yaxis: {
      //   title: {
      //     text: "User ",
      //   },
      // },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.2,
          },
        },
      },
      legend: {
        markers: {
          shape: "circle",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          console.log(series);
          // You can define a custom tooltip content here if needed
          return `<div style="padding: 10px; font-size: 12px; background-color: white; border-radius: 5px; display :flex;align-items :center;gap : 5px">
          <div style="background-color : ${w.globals.colors[seriesIndex]};height : 10px;width :10px ;border-radius : 50%"></div>
                    <strong>${w.globals.seriesNames[seriesIndex]} Users: ${series[seriesIndex][dataPointIndex]}</strong>
                  </div>`;
        },
        y: {
          formatter: function (val) {
            return val + " Users";
          },
        },
        x: {
          show: false,
        },
      },
    },
  };

  return (
    <div className="flex px-[30px] py-5 flex-col items-center max-w-full h-full  bg-white rounded-3xl mt-5">
      <div className="w-full h-full">
        <div className="flex justify-between">
          <h1 className="text-sm font-extrabold leading-[26px] text-[#4B4B4B]">
            User Status Overview
          </h1>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-0 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 border-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_6_1865"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_1865)">
                  <path
                    d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                    fill="#4B4B4B"
                  />
                </g>
              </svg>
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in w-[109px]"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Week
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Month
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Year
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div id="chart" className="h-full">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
