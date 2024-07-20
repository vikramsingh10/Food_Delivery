const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 ">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-96 bg-gray-200 rounded-lg animate-pulse h"></div>
        ))}
    </div>
  );
};

export default Shimmer;
