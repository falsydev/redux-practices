export default function Layout({ children }) {
  return (
    <div className="w-full h-svh">
      <div className="w-full max-w-5xl p-4 mx-auto pt-6">{children}</div>
    </div>
  );
}
