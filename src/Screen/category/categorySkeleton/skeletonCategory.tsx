const TableCategorySkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col">
        {/* Header Skeleton */}
        <div className="flex justify-between mb-4">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/6"></div>
        </div>
        {/* Rows Skeleton */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-between mb-2 border-b-2 border-gray-200 pb-2">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="flex space-x-2">
              <div className="h-4 bg-gray-300 rounded w-1/12"></div>
              <div className="h-4 bg-gray-300 rounded w-1/12"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCategorySkeleton;
