export default function HeaderWithLogin() {
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
                <i class="ion-compose"></i>&nbsp;New Article
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {" "}
                <i class="ion-gear-a"></i>&nbsp;Settings{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                User Name
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
