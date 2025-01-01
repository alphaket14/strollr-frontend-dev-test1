const StatCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="flex overflow-hidden gap-2.5 items-center p-5 h-[110px] bg-white rounded-3xl shadow-box-shadow w-full">
      <div
        className={`flex gap-2.5 items-center self-stretch p-2.5 my-auto w-14 h-14 ${bgColor} rounded-lg`}
      >
        <img
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          className="object-contain w-9 aspect-square"
        />
      </div>
      <div className="px-2.5 leading-none text-neutral-600">
        <div className="text-sm font-extrabold tracking-normal">{title}</div>
        <div className="mt-1.5 text-start text-3xl font-bold tracking-wide">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
