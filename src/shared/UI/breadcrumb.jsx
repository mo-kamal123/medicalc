import { Link } from 'react-router-dom'; // or use <a> for plain React

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="breadcrumb bg-white p-2 sm:p-3 rounded-lg w-full overflow-x-auto"
    >
      <ol className="flex items-center space-x-1 sm:space-x-2 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.active ? (
                <>
                  <Link
                    to={item.url}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {item.title}
                  </Link>
                  <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
                </>
              ) : (
                <>
                  <span className="text-stone-800 font-medium">
                    {item.title}
                  </span>
                  {!isLast && (
                    <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
