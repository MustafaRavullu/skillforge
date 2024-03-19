import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      NotFound go back to: <Link to={"/"}>Landing Page</Link>
    </div>
  );
}
