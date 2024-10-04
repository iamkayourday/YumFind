import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
        <div className="w-full h-14 bg-[#21412F] sticky top-0 z-20">
          <div className="text-white text-2xl font-bold text-center pt-3 cursor-pointer lg:text-left md:text-left">
            <Link to='/home'>YumFind</Link>
          </div>
        </div>
      </>
    );
  };
  export default Header;
  