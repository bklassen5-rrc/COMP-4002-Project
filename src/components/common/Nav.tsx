type NavProps = {
  setPage: (page: "landing" | "info") => void;
};

function Nav({ setPage }: NavProps) {
  return (
    <nav>
      <button onClick={() => setPage("landing")}>Home</button>
      <button onClick={() => setPage("info")}>Info</button>
    </nav>
  );
}

export default Nav;
