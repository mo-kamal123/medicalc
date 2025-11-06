import Dropdown from './drop-down';

const PlanCard = ({
  header,
  inputs = [],
  invalidFields = {},
  planId,
  clearInvalidField,
}) => {
  return (
    <div className="bg-white w-full p-7 rounded-xl shadow flex flex-col gap-10">
      {/* Header */}
      <div className="flex items-center gap-2 text-dark">
        {header.icon && (
          <p className="bg-[#EBEBEB3D] w-8 h-8 flex items-center justify-center rounded-lg">
            {header.icon}
          </p>
        )}
        <p className="text-xl font-semibold">{header.title}</p>
      </div>

      {/* Inputs */}
      {inputs.map((input, i) => {
        const fieldKey = `${planId}-${input.label}`;
        const isInvalid = invalidFields[fieldKey];

        const handleChange = (value) => {
          input.onChange && input.onChange(value);
          clearInvalidField(fieldKey); // 👈 clear error immediately
        };

        return (
          <div key={i} className="flex flex-col gap-2">
            <label className="text-sm text-dark font-semibold">
              {input.label}
            </label>

            {input.type === 'input' ? (
              <>
                <input
                  type="text"
                  placeholder={input.placeholder}
                  defaultValue={input.defaultValue}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-xl bg-white text-sec text-sm shadow-sm hover:shadow-md transition-all duration-200 ${
                    isInvalid
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-main'
                  } focus:outline-none`}
                />
                {isInvalid && (
                  <p className="text-red-500 text-xs">This field is required</p>
                )}
              </>
            ) : (
              <>
                <Dropdown
                  data={input.data}
                  defaultValue={input.defaultValue}
                  placeholder={input.placeholder}
                  onChange={handleChange}
                  isInvalid={isInvalid}
                />
                {isInvalid && (
                  <p className="text-red-500 text-xs">Please select a value</p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PlanCard;
