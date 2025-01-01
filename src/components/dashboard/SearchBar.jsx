const SearchBar = () => {
  return (
    <div className="flex flex-1 shrink gap-2.5 items-center px-5 py-2.5 h-[60px] md:h-full text-lg tracking-wider leading-loose whitespace-nowrap bg-white rounded-2xl shadow-box-shadow basis-0 min-w-[240px] text-neutral-600">
      <form className="flex justify-between items-center w-full md:min-w-[240px]">
        <label htmlFor="searchInput" className="self-stretch my-auto">
          Search
        </label>  
        <input
          type="search"
          id="searchInput"
          className="hidden"
          aria-label="Search"
        />
        <button type="submit" aria-label="Submit search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78b9d3bc0dcff8bfe6cd04429598b0e045d9131155eb16beb2223abfe08495ce?placeholderIfAbsent=true&apiKey=994c19f71edd4e5dbd3d68baf498cf75"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
