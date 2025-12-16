import { House } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeading({
  children,
  showHome = false,
  tag = "h1",
}) {
  const Tag = tag;
  return (
    <Tag className="flex items-center justify mb-6 text-3xl font-bold">
      {showHome && (
        <div className="mr-3 mt-1">
          <Link to="/">
            <House size={24} />
          </Link>
        </div>
      )}
      <div>{children}</div>
    </Tag>
  );
}
