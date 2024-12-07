const ArrowIcon = ({
  fill = "white",
  width = 40,
  height = 40,
  direction = "right",
}) => {
  const rotation = direction === "left" ? "rotate(180deg)" : "rotate(0deg)";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotation, transition: "transform 0.3s ease" }}
    >
      <path
        d="M6 51L31 29.0769L6 6"
        stroke={fill}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
