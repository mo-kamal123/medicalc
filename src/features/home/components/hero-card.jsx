const HeroCard = ({ img, heading, desc }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-3 p-5 rounded-lg max-w-90">
      <img className="w-60" src={img} alt="hero section imgs" />
      <h2 className="font-bold text-xl">{heading}</h2>
      <p className="text-sec text-sm text-center">{desc}</p>
    </div>
  );
};

export default HeroCard;
