import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📝 BlogHub
        </Link>

        <div className="navbar-nav ms-auto align-items-center">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/create">
            Create Blog
          </Link>

          <Link className="nav-link" to="/myblogs">
            My Blogs
          </Link>

          {user ? (
            <>
              <span className="nav-link fw-bold">
                👤 {user.name}
              </span>

              <button
                className="btn btn-light btn-sm ms-2"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>

              <Link className="nav-link" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;