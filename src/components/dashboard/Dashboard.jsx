/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ActivityChart from "./chart/ActivityChart";
import AreaChart from "./chart/AreaChart";
import { cardData, participationData } from "./dashboardData";
import ParticipationRate from "./ParticipationRate";
import SearchBar from "./SearchBar";
import StatCard from "./StatCard";

const Dashboard = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex flex-col p-6 ls:p-12 w-full overflow-auto h-[100vh] bg-[#F2F8F2] max-md:px-5">
      <div className="flex flex-wrap gap-2 md:gap-8 w-full md:min-h-[62px] max-md:max-w-full">
        <div
          className="bg-white w-[60px] flex lg:hidden justify-center items-center rounded-2xl shadow-box-shadow"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 12H20M4 8H20M4 16H12"
                stroke="#4b4b4b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <SearchBar />
        <div className="flex gap-6 h-fit">
          <div className="flex overflow-hidden gap-2.5 justify-center items-center p-2.5 h-fit rounded-2xl w-[62px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b949613e8eab9a43a5b72985b168407d868458dfad26eedebc9a38a6d6c42fc?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75"
              alt="Notification icon"
              className="object-contain self-stretch my-auto w-7 aspect-[0.8] fill-neutral-600"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fe205165ebe7e11fa224715e189ba5fee70ee9debdade4c650c742cc562ba9e?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75"
            alt="User profile"
            className="object-contain shrink-0 aspect-square rounded-[32px] w-[62px]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center pl-5 mt-10 max-w-full bg-white rounded-3xl h-fit xl:h-[238px] text-neutral-600 ">
        <div className="flex justify-center flex-col xl:flex-row items-center max-w-[1200px] w-full">
          <div className="flex flex-col justify-between px-2.5 py-5 min-w-[240px] max-md:max-w-full">
            <div>
              <h1 className="text-3xl text-start font-bold tracking-wide leading-none logo-text">
                Hi, John Doe!
              </h1>
              <p className="mt-2.5 text-start text-lg font-semibold tracking-wider leading-none max-md:max-w-full">
                Let's pick up where we left off and keep the momentum going.
              </p>
            </div>
          </div>
          <div className="w-fit mx-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6a356c86e9165778ff290c65ac6f09b1443eac18998a2b2426c554d755c9ef?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75"
              alt=""
              className="object-contain self-start aspect-[2.33] min-w-[240px] w-[551px] max-md:max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-10 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap xl:flex-nowrap gap-5 justify-center xl:justify-between w-full min-h-fit max-md:max-w-full">
              {cardData.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </div>
            <ActivityChart />
          </div>

          <div className="flex flex-col justify-center p-5 text-sm font-extrabold bg-white rounded-3xl min-w-[240px] text-neutral-600 w-full lg:w-[328px] 2xl:w-[450px]">
            <h2 className="gap-1.5 text-start w-full text-lg tracking-normal leading-none">
              Activity Performance Overview
            </h2>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93e54f75241b64d8d94be14050b654ae4f13c88c0d7c5538842897203dad77b?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75"
              alt="Performance chart"
              className="object-contain self-center mt-8 max-w-full rounded-xl aspect-square w-[204px]"
            />
            <h3 className="gap-1.5 text-start self-stretch mt-8 w-full tracking-normal leading-none">
              Participation Rate
            </h3>
            <ParticipationRate data={participationData} />
          </div>
        </div>

        {/* Original chart section remains unchanged */}
      </div>
      <div className="py-5 px-5 lg:px-[35px] bg-white rounded-[20px] mt-5">
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
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
        <div className="flex items-start flex-col md:flex-row">
          <div className="w-[167px] py-[33px]">
            <h1 className="text-start text-sm font-extrabold leading-[18px] mb-5 text-[#4B4B4B]">
              Summary
            </h1>
            <div className="flex gap-2.5 items-center">
              <div className="bg-[#FF4B4B] flex justify-center items-center rounded-[5px] w-[40px] h-[40px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="account_balance_wallet">
                    <mask
                      id="mask0_6_1945"
                      style={{
                        maskType:"alpha",
                      }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect
                        id="Bounding box"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_6_1945)">
                      <path
                        id="account_balance_wallet_2"
                        d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V7.5H19V5H5V19H19V16.5H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM13 17C12.45 17 11.9792 16.8042 11.5875 16.4125C11.1958 16.0208 11 15.55 11 15V9C11 8.45 11.1958 7.97917 11.5875 7.5875C11.9792 7.19583 12.45 7 13 7H20C20.55 7 21.0208 7.19583 21.4125 7.5875C21.8042 7.97917 22 8.45 22 9V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H13ZM20 15V9H13V15H20ZM16 13.5C16.4167 13.5 16.7708 13.3542 17.0625 13.0625C17.3542 12.7708 17.5 12.4167 17.5 12C17.5 11.5833 17.3542 11.2292 17.0625 10.9375C16.7708 10.6458 16.4167 10.5 16 10.5C15.5833 10.5 15.2292 10.6458 14.9375 10.9375C14.6458 11.2292 14.5 11.5833 14.5 12C14.5 12.4167 14.6458 12.7708 14.9375 13.0625C15.2292 13.3542 15.5833 13.5 16 13.5Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm text-start font-extrabold leading-[18px] text-[#4B4B4B]">111, 741</p>
                <p className="text-sm text-start font-semibold leading-[18px] text-[#4B4B4B]">Total Reach</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center mt-[35px]">
              <div className="bg-[#1CB0F6] flex justify-center items-center rounded-[5px] w-[40px] h-[40px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<mask id="mask0_6_1953" style={{
  maskType:"alpha"
}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_6_1953)">
<path d="M16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11ZM8 9H13V7H8V9ZM4.5 21C3.93333 19.1 3.375 17.2042 2.825 15.3125C2.275 13.4208 2 11.4833 2 9.5C2 7.96667 2.53333 6.66667 3.6 5.6C4.66667 4.53333 5.96667 4 7.5 4H12.5C12.9833 3.36667 13.5708 2.875 14.2625 2.525C14.9542 2.175 15.7 2 16.5 2C16.9167 2 17.2708 2.14583 17.5625 2.4375C17.8542 2.72917 18 3.08333 18 3.5C18 3.6 17.9875 3.7 17.9625 3.8C17.9375 3.9 17.9083 3.99167 17.875 4.075C17.8083 4.25833 17.7458 4.44583 17.6875 4.6375C17.6292 4.82917 17.5833 5.025 17.55 5.225L19.825 7.5H22V14.475L19.175 15.4L17.5 21H12V19H10V21H4.5ZM6 19H8V17H14V19H16L17.55 13.85L20 13.025V9.5H19L15.5 6C15.5 5.66667 15.5208 5.34583 15.5625 5.0375C15.6042 4.72917 15.6667 4.41667 15.75 4.1C15.2667 4.23333 14.8417 4.4625 14.475 4.7875C14.1083 5.1125 13.8417 5.51667 13.675 6H7.5C6.53333 6 5.70833 6.34167 5.025 7.025C4.34167 7.70833 4 8.53333 4 9.5C4 11.1333 4.225 12.7292 4.675 14.2875C5.125 15.8458 5.56667 17.4167 6 19Z" fill="white"/>
</g>
</svg>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm text-start font-extrabold leading-[18px] text-[#4B4B4B]">111, 741</p>
                <p className="text-sm text-start font-semibold leading-[18px] text-[#4B4B4B]">Total Reach</p>
              </div>
            </div>
          </div>
          <AreaChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
