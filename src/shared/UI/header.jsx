import logo from '../../app/assets/logo.png';
const Header = ({ heading, desc }) => {
  return (
    <header className="bg-white border-b-5 border-main flex items-center p-6 rounded-t-xl mt-5">
      <img className='w-50' src={logo} alt="logo" />
      <div className='w-full text-center'>
        <h2 className='font-bold text-xl'>{heading}</h2>
        <p className='text-sm text-sec'>{desc}</p>
      </div>
    </header>
  );
};

export default Header;
