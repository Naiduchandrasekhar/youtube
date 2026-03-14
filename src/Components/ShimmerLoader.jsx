const ShimmerLoader = () => {
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      {/* Video Placeholder */}
      <div className="w-full h-100 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Title placeholder */}
      <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse mb-2"></div>

      {/* Channel info placeholder */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/4 animate-pulse"></div>
      </div>

      {/* Related videos placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex gap-3">
            <div className="w-32 h-20 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="h-4 bg-gray-300 rounded-md animate-pulse mb-2"></div>
              <div className="h-3 bg-gray-300 rounded-md w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerLoader;