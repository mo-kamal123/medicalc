import GeneralBenefited from '../components/general-benefited';
import InpatientBenfite from '../components/inpatient-benefite';
import Mediactions from '../components/mediactions';
import OutpatientBenefit from '../components/outpatient-benefit';

const Summary = () => {
  return (
    <div className="flex flex-col gap-10">
      <GeneralBenefited />
      <InpatientBenfite />
      <OutpatientBenefit />
      <Mediactions />
      <button className="bg-main text-white text-xl font-semibold p-4 rounded mb-10">
        These prices are approximate and subject to change.
      </button>
    </div>
  );
};

export default Summary;
