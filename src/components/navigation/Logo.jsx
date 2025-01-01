import * as React from "react";

export const Logo = () => {
  return (
    <div className="flex px-8 relative justify-center items-center w-full text-5xl tracking-wide leading-none whitespace-nowrap min-h-[44px]">
      <div className="flex gap-2 items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6015e56799509f0557a769262c8b3481153592b9b0e77c52d55bf62fc4549d09?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] w-[47px]"
          alt="Strollr logo"
        />
        <div className="self-stretch logo-text my-auto font-baloo font-bold">strollr</div>
      </div>
    </div>
  );
}