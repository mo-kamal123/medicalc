import logo from '../../app/assets/logo.png';
const Header = ({ heading, desc }) => {
  return (
    <header className="bg-white border-b-5 border-main flex items-center p-6 rounded-t-xl w-full mt-5">
      <img className="w-50" src={logo} alt="logo" />
      <div className="w-full text-center mr-7">
        <h2 className="font-semibold text-xl text-dark">{heading}</h2>
        <p className="text-xs text-sec">{desc}</p>
      </div>
    </header>
  );
};

export default Header;
