import Honda from "../../assets/logohonda.png";

const Navbar = () => {
  return (
    <nav className="p-2 border bg-[#4D4D4D] flex">
      <div className="container flex flex-wrap items-center text-white">
        <img src={Honda} alt="logo" className="h-12 w-12" />
        <h1 className="text-2xl ml-2">Main Dashboard</h1>
      </div>
          <div className="text-right text-white w-96">
            <p>Friday, 30 November 2022</p>
            <p>10:19:00</p>
          </div>
    </nav>
  );
};

export default Navbar;
