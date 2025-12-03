export default function AppLayout({ demo, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4">
      <div>{children}</div>
      <div className="border-l-2 border-l-gray-700 pl-4 max-[1100px]:pr-4">
        {demo}
      </div>
    </div>
  );
}
