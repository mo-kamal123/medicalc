import { IoPrintOutline } from 'react-icons/io5';
import Dropdown from '../../../../shared/UI/drop-down';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../shared/UI/breadcrumb';

const Installments = () => {
  const schedule = [
    {
      amount: '152,985,963',
      dueDate: '4/9/2025',
      payment: 'Payment 1',
    },
    {
      amount: '152,985,963',
      dueDate: '4/9/2025',
      payment: 'Payment 2',
    },
  ];
  // Breadcrumbs — mark all steps before current as active
  const breadcrumbItems = [
    { title: 'Plan Data', url: '/standard-package/plan-data', active: true },
    {
      title: 'Healthcare Services',
      url: '/standard-package/healthcare-services',
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: '/standard-package/reimbursement-details',
      active: true,
    },
    {
      title: 'Plan Summary',
      url: '/standard-package/plan-by-age/summary',
      active: true,
    },
    {
      title: 'Customize plan by age',
      url: '/standard-package/plan-by-age/summary',
      active: true,
    },
    {
      title: 'Coverage & Expense Details',
      url: '/standard-package/coverage-details',
      active: true,
    },
    {
      title: 'Installments',
      url: '/standard-package/installments',
      active: true,
    },
    { title: 'Summary', url: '/standard-package/summary', active: false },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div>
        <h3 className="text-2xl font-semibold">Installments</h3>
        <div className="bg-white p-5 my-5 rounded-xl flex flex-col gap-8 ">
          <div className="flex items-center justify-center">
            <div className="bg-main/10 py-8 px-8 rounded-xl">
              <h1 className="text-main text-4xl font-bold">
                EGP 196 ,854 ,985
              </h1>
              <p className="text-sm text-sec font-semibold text-center">
                Total Amount of Contract
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-sm text-dark font-semibold">
                Payment Frequency
              </label>
              <Dropdown
                data={['Payment 1', 'Payment 2']}
                defaultValue={'Payment 1'}
                placeholder={'select payment frequency'}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-sm text-dark font-semibold">
                Number Of Payments
              </label>
              <Dropdown
                data={['Annual', 'SemiAnnual']}
                defaultValue={'Annual'}
                placeholder={'select number of payments'}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section Title */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Payment Schedule</h3>
        <div className="p-6 bg-white rounded-xl shadow-sm w-full">
          {/* Table Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 - Amount */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Amount (EGP)</h4>
              <div className="flex flex-col gap-4">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl text-gray-800 text-center font-medium ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-yellow-50'
                    }`}
                  >
                    {item.amount}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Due Date */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Due Date</h4>
              <div className="flex flex-col gap-4">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl text-gray-800 text-center font-medium ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-yellow-50'
                    }`}
                  >
                    {item.dueDate}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 - Payment */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Payment</h4>
              <div className="flex flex-col gap-4">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl text-gray-800 text-center font-medium ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-yellow-50'
                    }`}
                  >
                    {item.payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <Link
          to={'/standard-package/summary'}
          className="flex items-center justify-center gap-2 bg-main text-white px-6 py-3 rounded-xl"
        >
          <IoPrintOutline />
          Print Benefit Tabel
        </Link>
      </div>
    </div>
  );
};

export default Installments;
