export const Loading = () => {
  return (
    <div className="w-1/2 mx-auto flex text-center">
        <span className="sr-only flex-1">...</span>
      <div className="flex-1">
        <div className="border-orange-200 border-4 border-l-orange-600 animate-spin rounded-full w-20 h-20 mx-auto mt-52"></div>
      </div>
      <span className="sr-only flex-1">Loading...</span>
    </div>
  );
}
