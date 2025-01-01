const ParticipationRate = ({ data }) => {
  return (
    <div className="flex flex-col mt-[30px] w-full font-bold tracking-wider leading-none">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col lg:px-5 pb-2.5 mt-5 w-full">
          <div className="flex flex-col justify-center w-full">
            <div className="flex gap-10 justify-between items-center w-full mb-2">
              <div className="self-stretch my-auto">{item.activity}</div>
              <div className="self-stretch my-auto">{item.rate}</div>
            </div>
            <div className="relative w-full h-[8px] bg-[#E5E5E5] rounded-lg">
              <div
                style={{
                  width: item.rate,
                  height: "8px",
                  background: "#d1d1d1",
                  backgroundColor: item?.color,
                }}
                className="absolute top-0 left-0 rounded-lg"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParticipationRate;
