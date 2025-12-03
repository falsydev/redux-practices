export default function AppLayout({ demo, children }) {
  return (
    <div className="flex justify-between align-middle">
      <div className="w-full pr-4">{children}</div>
      <div className="w-full border-l-2 border-l-gray-700 pl-4">{demo}</div>
    </div>
  );
}
