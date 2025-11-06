import { useEffect, useRef, useState } from 'react';

export default function Dropdown({
  data = [],
  defaultValue = null,
  onChange = () => {},
  placeholder = 'Select an option',
  isInvalid = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
    onChange(item);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full px-4 py-2 border rounded-xl bg-white text-sec text-sm shadow-sm hover:shadow-md transition-all duration-200 ${
          isInvalid
            ? 'border-red-500'
            : isOpen
              ? 'border-main/50'
              : 'border-gray-300'
        }`}
      >
        <span>{selected || placeholder}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden max-h-60 overflow-y-auto">
          {data.length > 0 ? (
            data.map((item, i) => (
              <li
                key={i}
                onClick={() => handleSelect(item)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selected === item
                    ? 'bg-main text-white hover:bg-main hover:text-white'
                    : ''
                }`}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400 text-sm">
              No options available
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
