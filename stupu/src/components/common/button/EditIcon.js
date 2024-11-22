
const EditableIcon = ({ strokeColor = "#59B2A5", width = 26, height = 26 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_727_723)">
        <path
          d="M18.4165 3.25C18.701 2.96547 19.0388 2.73977 19.4106 2.58578C19.7823 2.43179 20.1808 2.35254 20.5832 2.35254C20.9856 2.35254 21.384 2.43179 21.7558 2.58578C22.1275 2.73977 22.4653 2.96547 22.7498 3.25C23.0344 3.53453 23.2601 3.87232 23.4141 4.24408C23.568 4.61583 23.6473 5.01428 23.6473 5.41667C23.6473 5.81906 23.568 6.2175 23.4141 6.58926C23.2601 6.96102 23.0344 7.2988 22.7498 7.58334L8.12484 22.2083L2.1665 23.8333L3.7915 17.875L18.4165 3.25Z"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_727_723">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditableIcon;
