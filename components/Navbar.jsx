const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <p className="text-2xl font-bold text-grey-800">My Todos</p>
      {/* <div className="flex">
        <a
          href="/api/auth/logout"
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        >
          Logout
        </a>
        <a
          href="/api/auth/login"
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        >
          Login
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
