import { getCurrentUser } from "@/app/lib/data";
import Logout from "@/app/ui/auth/logout";

export default async function HeaderWithLogin() {
  const currentUser = await getCurrentUser();
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/editor">
                <i className="ion-compose"></i>&nbsp;New Article
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/profile/${currentUser.user.username}`}
              >
                {currentUser.user.username}
              </a>
            </li>
            <Logout />
          </ul>
        </div>
      </nav>
    </>
  );
}
