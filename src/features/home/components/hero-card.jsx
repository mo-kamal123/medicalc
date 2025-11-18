const HeroCard = ({ img, heading, desc }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-lg w-full sm:max-w-[280px] lg:max-w-90">
      <img
        className="w-40 sm:w-48 lg:w-60 h-auto"
        src={img}
        alt="hero section imgs"
      />
      <h2 className="font-bold text-lg sm:text-xl text-center">{heading}</h2>
      <p className="text-sec text-xs sm:text-sm text-center">{desc}</p>
    </div>
  );
};

export default HeroCard;
