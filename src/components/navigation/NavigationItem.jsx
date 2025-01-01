/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import "./NavigationItem.css";

export const NavigationItem = ({
  icon,
  label,
  activeIcon,
  item,
  isSubMenuOpen,
  className,
  isActiveMenu,
  setIsSubMenuOpen = () => {},
  setIsActiveMenu = () => {},
}) => {
  return item?.subMenu?.length > 0 ? (
    <button
      className={`flex gap-[15px] focus-visible:outline-none items-center p-5  lg:px-4 lg:py-5 w-full relative pr-8 ${
        isActiveMenu === label
          ? "font-bold text-[#126322] bg-[#F2F8F2] rounded-[40px] button-active"
          : ""
      }`}
      role="menuitem"
      tabIndex="0"
      onClick={() => {
        setIsSubMenuOpen(!isSubMenuOpen);
        setIsActiveMenu(label);
      }}
    >
      {icon && (
        <img
          loading="lazy"
          src={isActiveMenu === label ? activeIcon : icon}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      )}
      <span className="self-stretch my-auto">{label}</span>
    </button>
  ) : label === "Logout" ? (
    <a
      className={`flex gap-[15px]  focus-visible:outline-none items-center p-5 lg:px-4 lg:py-5 w-full relative pr-8  ${
        isActiveMenu === label
          ? "font-bold text-[#126322] bg-white rounded-[40px] button-active"
          : ""
      } ${className}`}
      role="menuitem"
      tabIndex="0"
      href="/"
    >
      {icon && (
        <img
          loading="lazy"
          src={isActiveMenu === label ? activeIcon : icon}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      )}
      <span className="self-stretch my-auto">{label}</span>
    </a>
  ) : (
    <button
      className={`flex gap-[15px]  focus-visible:outline-none items-center p-5 lg:px-4 lg:py-5 w-full relative pr-8  ${
        isActiveMenu === label
          ? "font-bold text-[#126322] bg-white rounded-[40px] button-active"
          : ""
      } ${className}`}
      onClick={() => setIsActiveMenu(label)}
      role="menuitem"
      tabIndex="0"
    >
      {icon && (
        <img
          loading="lazy"
          src={isActiveMenu === label ? activeIcon : icon}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      )}
      <span className="self-stretch my-auto">{label}</span>
    </button>
  );
};
