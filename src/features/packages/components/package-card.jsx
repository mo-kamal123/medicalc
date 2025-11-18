import { Link } from 'react-router-dom';

const PackageCard = ({ img, header, plans, btnTitle, navigate }) => {
  return (
    <div className="bg-white rounded-xl flex flex-col gap-2 sm:gap-3 items-center justify-between w-full sm:w-[400px] lg:w-[450px] xl:w-[500px] min-h-[600px] sm:h-[650px] p-4 sm:p-5">
      <img
        className={`w-full h-auto ${header === 'Premium Package' ? 'max-w-72 sm:max-w-80 lg:max-w-82' : 'max-w-48 sm:max-w-52 lg:max-w-50'}`}
        src={img}
        alt="package-img"
      />
      <h2 className="text-xl sm:text-2xl font-semibold text-dark text-center">
        {header}
      </h2>
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#3C79E708]"
          >
            <div className="flex items-center gap-2">
              {plan.icon && <p className="text-base sm:text-lg">{plan.icon}</p>}
              <p className="text-text text-sm sm:text-base">{plan.name}</p>
            </div>
            <p className="text-main text-sm sm:text-base font-medium">
              {plan.price} EGP
            </p>
          </div>
        ))}
      </div>
      <Link
        to={navigate}
        className="flex items-center justify-center gap-2 w-full bg-main text-white p-2.5 sm:p-3 rounded-xl text-sm sm:text-base mt-auto"
      >
        {btnTitle}
      </Link>
    </div>
  );
};

export default PackageCard;
