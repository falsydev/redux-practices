export default function BreadCrumb({ children }) {
  return (
    <div className="mb-8 flex justify-items-start gap-0 bg-gray-700">
      {children}
    </div>
  );
}
