import { Link } from 'react-router-dom';

const PackageCard = ({ img, header, plans, btnTitle, navigate }) => {
  return (
    <div className="bg-white rounded-xl flex flex-col gap-2 items-center justify-between w-[500px] h-[650px]">
      <img
        className={`${header === 'Premium Package' ? 'w-82' : 'w-50'}`}
        src={img}
        alt="package-img"
      />
      <h2 className="text-2xl font-semibold text=dark">{header}</h2>
      <div className="flex flex-col gap-5 w-[90%]">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-xl bg-[#3C79E708]"
          >
            <div className="flex items-center gap-2">
              {plan.icon && <p className="text-lg">{plan.icon}</p>}
              <p className="text-text">{plan.name}</p>
            </div>
            <p className="text-main">{plan.price} EGP</p>
          </div>
        ))}
      </div>
      <Link
        to={navigate}
        className="flex items-center justify-center gap-2 w-[90%] bg-main text-white p-3 rounded-xl"
      >
        {btnTitle}
      </Link>
    </div>
  );
};

export default PackageCard;
