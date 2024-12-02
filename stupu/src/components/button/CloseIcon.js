
const CloseIcon = ({ strokeColor = "white", width = 26, height = 26 }) => {
  return (
    <svg
    width={width}
    height={height}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.01562 9.01562L27.0468 27.0468"
      stroke={strokeColor}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.01562 27.0469L27.0468 9.01565"
      stroke={strokeColor}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

export default CloseIcon;
