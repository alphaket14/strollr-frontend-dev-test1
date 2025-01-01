import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { Logo } from "./Logo";
import dashboard from "../../assets/dashboard.svg";
import dashboardActive from "../../assets/dashboard-active.svg";
import listingManagement from "../../assets/listing-management.svg";
import listingManagementActive from "../../assets/listing-management-active.svg";
import userManagement from "../../assets/user-management.svg";
import userManagementActive from "../../assets/user-management-active.svg";
import setting from "../../assets/setting.svg";
import settingActive from "../../assets/settingActive.svg";
import help from "../../assets/help.svg";
import helpActive from "../../assets/helpActive.svg";

const mainNavItems = [
  {
    activeIcon: dashboardActive,
    icon: dashboard,
    label: "Dashboard",
    active: true,
  },
  {
    activeIcon: listingManagementActive,
    icon: listingManagement,
    label: "Listing Management",
    subMenu: [
      {
        label: "Businesses",
      },
      {
        label: "Venue",
      },
      {
        label: "Activities",
      },
    ],
  },
  {
    activeIcon: userManagementActive,
    icon: userManagement,
    label: "User Management",
  },
  {
    activeIcon: settingActive,
    icon: setting,
    label: "Settings",
  },
];

const bottomNavItems = [
  {
    activeIcon: helpActive,
    icon: help,
    label: "Help",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5990866ee441ab1f816b738eb4784ba0380cfd52def6f683a397088e69c8cab?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75",
    label: "Logout",
  },
];

export const NavigationLayout = ({ isSidebarOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const [isActiveMenu, setIsActiveMenu] = React.useState("Dashboard");

  return (
    <nav
      className={` flex-col rounded-r-[40px] overflow-auto scroll-bar z-10 h-[100vh] lg:flex bg-[#126322]  w-full text-white max-w-[300px] ${
        window.innerWidth < 992
          ? isSidebarOpen
            ? "fixed left-0 "
            : "hidden"
          : ""
      }`}
      role="navigation"
    >
      <div className="flex h-fit  relative  justify-between flex-col py-10 lg:py-16 w-full aspect-[0.32] fill-green-900">
        <div>
          <div
            className={`${
              isSidebarOpen ? "block absolute top-[30px] right-5" : "hidden"
            }`}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
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
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#fff"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Logo />
          <div className="flex mt-20 flex-col justify-center px-6 lg:pl-8 lg:pr-0 w-full">
            {mainNavItems.map((item, index) => (
              <React.Fragment>
                <NavigationItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  item={item}
                  setIsSubMenuOpen={setIsSubMenuOpen}
                  isSubMenuOpen={isSubMenuOpen}
                  setIsActiveMenu={setIsActiveMenu}
                  isActiveMenu={isActiveMenu}
                  activeIcon={item.activeIcon}
                />
                {item?.subMenu?.length > 0 &&
                  isSubMenuOpen &&
                  item?.subMenu?.map((obj, index) => (
                    <div key={index}>
                      <NavigationItem
                        label={obj?.label}
                        className="!pl-[52px]"
                        setIsActiveMenu={setIsActiveMenu}
                        isActiveMenu={isActiveMenu}
                      />
                    </div>
                  ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center lg:pl-8 w-full whitespace-nowrap">
          {bottomNavItems.map((item, index) => (
            <NavigationItem
              key={index}
              icon={item.icon}
              label={item.label}
              setIsActiveMenu={setIsActiveMenu}
              isActiveMenu={isActiveMenu}
              activeIcon={item.activeIcon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
