import { House } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeading({ children }) {
  return (
    <h1 className="flex items-center justify mb-8 text-3xl font-bold">
      <div className="mr-3 mt-1">
        <Link to="/">
          <House size={24} />
        </Link>
      </div>
      <div>{children}</div>
    </h1>
  );
}
