import { useCallback, useEffect, useRef, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();
  const [show, setShow] = useState(false); // control animation state

  // Animate out before closing
  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 200); // matches transition duration
  }, [onClose]);

  // Handle click outside to close
  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    },
    [handleClose]
  );

  // Control fade-in animation
  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      setShow(false);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-200 px-4 sm:px-6 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] w-full max-h-[90vh] overflow-y-auto transform transition-all duration-200 ${
          show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
