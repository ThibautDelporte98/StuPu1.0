const ProfileIcon = ({ fill = "white", width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 420 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M316.654 120.798C316.654 187.427 269.101 241.44 210.441 241.44C151.781 241.44 104.228 187.427 104.228 120.798C104.228 54.17 144.926 -3.40618 210.441 0.157065C276.855 3.76923 316.654 54.17 316.654 120.798Z"
        fill={fill}
      />
      <path
        d="M297.297 252.834C224.636 301.701 149.512 270.807 124.2 250.446C20.1707 268.771 -1.86605 363.621 0.119244 408.756C8.85453 451.515 128.171 470.688 186.737 474.93C345.56 476.966 410.459 434.05 419.889 411.144C423.463 304.45 339.65 261.148 297.297 252.834Z"
        fill={fill}
      />
    </svg>
  );
};

export default ProfileIcon;