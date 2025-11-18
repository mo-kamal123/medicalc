import logo from '../../app/assets/logo.png';
const Header = ({ heading, desc }) => {
  return (
    <header className="bg-white border-b-5 border-main flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-t-xl w-full mt-3 sm:mt-4 lg:mt-5">
      <img
        className="w-32 sm:w-40 lg:w-50 h-auto shrink-0"
        src={logo}
        alt="logo"
      />
      <div className="w-full text-center sm:text-left sm:mr-7 flex-1">
        <h2 className="font-semibold text-base text-center sm:text-lg lg:text-xl text-dark leading-tight">
          {heading}
        </h2>
        <p className="text-xs text-center sm:text-sm text-sec mt-1 sm:mt-0">
          {desc}
        </p>
      </div>
    </header>
  );
};

export default Header;
