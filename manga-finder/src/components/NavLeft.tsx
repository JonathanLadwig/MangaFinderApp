function NavLeft() {
  return (
    <div className="nav-left bg-blue-400 h-16 w-auto">
      <input
        type="text"
        placeholder="Search"
        className="search"
      />
      <button>Filter</button>
      <button>Login</button>
    </div>
  );
}
export default NavLeft;
