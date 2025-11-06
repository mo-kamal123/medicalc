import React, { useState, useRef } from 'react';
import { MdOutlineCloudUpload } from 'react-icons/md';

const DragAndDrop = ({ allowedTypes, changeLogo }) => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // Handle dragging events
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  // Drop event
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  // File input selection
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  // File validation
  const validateAndSetFile = (file) => {
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      alert('❌ File type not supported.');
      return;
    }

    setFile(file);
    changeLogo((prev) => ({ ...prev, logo: file }));
    console.log('✅ File selected:', file.name);
  };

  return (
    <div className="w-full mx-auto">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept={allowedTypes.join(',')}
      />

      {/* Dropzone container */}
      <div
        className={`flex flex-col items-center justify-center border border-[#007bff] bg-[#eaf4ff] px-6 py-10 rounded-lg text-center transition cursor-pointer ${
          dragging ? 'opacity-80' : ''
        }`}
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Upload icon */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
          <MdOutlineCloudUpload className="text-[#007bff] text-2xl" />
        </div>

        {/* Instructions */}
        <p className="text-gray-700 text-sm sm:text-base">
          Drop your files here or{' '}
          <span className="text-[#007bff] underline">Click to upload</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          SVG, PNG, JPG or GIF (max. 800×400px)
        </p>

        {/* Selected file name */}
        {file && (
          <p className="text-green-600 mt-3 text-sm truncate max-w-xs">
            ✅ Selected: {file.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
