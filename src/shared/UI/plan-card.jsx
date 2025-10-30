import Dropdown from './drop-down';

const PlanCard = ({ header, inputs }) => {
  return (
    <div className="bg-white w-full p-7 rounded-xl shadow flex flex-col gap-10">
      <div className="flex items-center gap-2 text-dark">
        {header.icon && (
          <p className="bg-[#EBEBEB3D] w-8 h-8 flex items-center justify-center rounded-lg">
            {header.icon}
          </p>
        )}
        <p className="text-xl font-semibold">{header.title}</p>
      </div>
      {inputs && (
        <div className="flex flex-col gap-5">
          <>
            {inputs.map((input, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-sm text-dark font-semibold">
                  {input.label}
                </label>
                <Dropdown
                  data={input.data}
                  defaultValue={input.defaultValue}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
          </>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
