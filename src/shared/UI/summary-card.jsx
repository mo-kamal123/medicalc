const SummaryCard = ({ header, inputs }) => {
  return (
    <div className="bg-white w-full p-7 rounded-xl shadow flex flex-col gap-10">
      <div className="flex items-center gap-2 text-gray-900">
        <p className="text-xl font-semibold">{header.title}</p>
      </div>
      {inputs && (
        <div className="flex flex-col gap-5">
          <>
            {inputs.map((input, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-sm text-gray-900 font-semibold">
                  {input.label}
                </label>
                <input
                  type="text"
                  value={input.defaultValue}
                  // onChange={(e) =>
                  //   handleManualChange(planKey, ageKey, e.target.value)
                  // }
                  className="w-full rounded-md p-2  focus:outline-none border border-blue-400 placeholder:text-stone-700"
                  placeholder="Enter employees"
                  readOnly={true}
                />
              </div>
            ))}
          </>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
