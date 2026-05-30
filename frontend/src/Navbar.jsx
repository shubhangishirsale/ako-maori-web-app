import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px 20px",
        backgroundColor: "#1f2937",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Home
      </Link>

      <Link to="/lessons" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Lessons
      </Link>

      <Link to="/quiz" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Quiz
      </Link>

      <Link to="/progress" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Progress
      </Link>

      <Link to="/waiata" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Waiata
      </Link>

      <Link to="/prayers" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Prayers
      </Link>
    </nav>
  );
}

export default Navbar;