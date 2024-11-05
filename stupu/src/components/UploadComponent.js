import React from 'react';

const UploadComponent = ({
  label,
  handleClick,
  handleImageChange,
  handleDeleteImage,
  hiddenFileInput,
  fileName,
  selectedImage,
}) => {
  return (
    <div className="upload-item">
      <label htmlFor="uploadId">{label}</label>
      <button className="custom-button" onClick={handleClick}>
        Upload bestand
      </button>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        ref={hiddenFileInput}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <div className="upload-file">
        {fileName && <p>Bestand naam: {fileName}</p>}
        {selectedImage && (
          <button className="button-delete" onClick={handleDeleteImage}>
            <svg
              width="18"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.01562 9.01562L27.0468 27.0468"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.01562 27.0469L27.0468 9.01565"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
