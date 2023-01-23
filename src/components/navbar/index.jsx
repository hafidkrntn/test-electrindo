import Honda from "../../assets/logohonda.png";

const Navbar = () => {
  return (
    <nav class="bg-[#4D4D4D] px-2 sm:px-4 py-2.5 ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/dashboard" class="flex items-center">
          <img src={Honda} class="h-6 mr-3 sm:h-9" alt="logo main" />
          <span class="self-center text-xl font-semibold text-white">
            Main Dashboard
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="text-right text-white w-96">
              <p>Friday, 30 November 2022</p>
              <p>10:19:00</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
