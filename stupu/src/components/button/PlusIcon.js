const PlusIcon = ({ className, strokeColor = "#468275", width = 33, height = 33 }) => {
  return (
    <svg
        className={className}
      width={width}
      height={height}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 4V54"
        stroke={strokeColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 29L54 29"
        stroke="#468275"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
