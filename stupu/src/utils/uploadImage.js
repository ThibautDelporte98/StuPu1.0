// utils/imageUtils.js
export const handleImageChange = (event, setSelectedImage, setFileName) => {
    const file = event.target.files[0];
  
    if (file && file.type.startsWith("image/")) {
      if (file.size < 5 * 1024 * 1024) {
        // 5MB size limit
        setSelectedImage(URL.createObjectURL(file));
        setFileName(file.name); // Set the file name
      } else {
        alert("File size should be under 5MB.");
      }
    } else {
      alert("Please select a valid image file.");
    }
  };
  
  export const handleDeleteImage = (setSelectedImage, setFileName, hiddenFileInput) => {
    setSelectedImage(null);
    setFileName("");
    hiddenFileInput.current.value = null; // Clear the file input value
  };
  