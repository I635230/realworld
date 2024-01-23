import { getCurrentUser } from "@/app/lib/data";
import Logout from "@/app/ui/auth/logout";
import Link from "next/link";

export default async function HeaderWithLogin() {
  const currentUser = await getCurrentUser();
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/editor">
                <i className="ion-compose"></i>&nbsp;New Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                {" "}
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href={`/profile/${currentUser.user.username}`}
              >
                {currentUser.user.username}
              </Link>
            </li>
            <Logout />
          </ul>
        </div>
      </nav>
    </>
  );
}
