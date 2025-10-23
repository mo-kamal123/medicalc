// import Header from '../../../shared/UI/header';
// import PackageCard from '../../packages/components/package-card';
// import standard from '../assets/standard.png';
// import premium from '../assets/premium.jpg';
// import { FaCrown, FaStar, FaMedal } from 'react-icons/fa';

// const PackageSelection = () => {
//   // Premium Package Plans
//   const premiumPlans = [
//     {
//       name: 'Program 1',
//       price: '200k',
//     },
//     {
//       name: 'Program 2',
//       price: '100k',
//     },
//     {
//       name: 'Program 3',
//       price: '50k',
//     },
//     {
//       name: 'Program 4',
//       price: '25k',
//     },
//   ];

//   // Standard Package Plans
//   const standardPlans = [
//     {
//       name: 'Gold Plane',
//       icon: <FaCrown className="text-yellow-500" />,
//       price: '100k',
//     },
//     {
//       name: 'Silver Plane',
//       icon: <FaMedal className="text-gray-400" />,
//       price: '50k',
//     },
//     {
//       name: 'White Plane',
//       icon: <FaStar className="text-blue-400" />,
//       price: '20k',
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center gap-10 w-full h-full pb-10">
//       <Header
//         heading={'Package Selection'}
//         desc={'Choose the insurance package that best fits your needs.'}
//       />
//       <div className="flex flex-col gap-5 w-[90%] m-auto text-center">
//         <h2 className="text-3xl text-text font-bold">
//           Find the right plan for your business.
//         </h2>
//         <p className="text-sec">
//           Every subscription comes with our core features choose the one that
//           matches your goals and unlock advanced functionality as you grow.
//         </p>
//         <div className="flex items-center justify-center gap-5">
//           <button className="border border-main p-3 px-6 rounded-4xl">
//             Custom Packages
//           </button>
//           <button className="border border-main bg-main text-white p-3 px-6 rounded-4xl">
//             Ready Packages
//           </button>
//         </div>
//         <div className='flex items-center justify-between w-[80%] m-auto'>
//             <PackageCard
//               img={premium}
//               header={'Premium Package'}
//               plans={premiumPlans}
//               btnTitle={'Choose Premium'}
//             />
//           <PackageCard
//             img={standard}
//             header={'Standard Package'}
//             plans={standardPlans}
//             btnTitle={'Choose Standard'}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PackageSelection;
