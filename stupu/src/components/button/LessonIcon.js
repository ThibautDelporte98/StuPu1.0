const LessonIcon = ({ fill = "white", width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 364 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="90" width="19" height="40" rx="9.5" fill="white" />
      <rect x="145" width="19" height="40" rx="9.5" fill="white" />
      <rect x="200" width="19" height="40" rx="9.5" fill="white" />
      <rect x="255" width="19" height="40" rx="9.5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 81C0 47.8629 26.8629 21 60 21H303.817C336.954 21 363.817 47.8629 363.817 81V386.751C363.817 419.888 336.954 446.751 303.817 446.751H59.9999C26.8628 446.751 0 419.888 0 386.751V81ZM140.364 302.671C147.698 294.412 146.948 281.771 138.688 274.437L100.373 240.415L136.606 201.658C144.149 193.59 143.723 180.933 135.654 173.39C127.585 165.847 114.929 166.273 107.386 174.342L57.1403 228.088C53.4572 232.028 51.5213 237.288 51.7719 242.676C52.0224 248.063 54.4381 253.121 58.471 256.702L112.13 304.347C120.389 311.681 133.031 310.931 140.364 302.671ZM207.72 368.011C199.46 375.345 198.71 387.986 206.044 396.246C213.378 404.505 226.019 405.256 234.278 397.922L287.937 350.276C291.97 346.695 294.386 341.637 294.636 336.25C294.887 330.862 292.951 325.602 289.268 321.663L239.023 267.916C231.479 259.847 218.823 259.421 210.754 266.964C202.685 274.508 202.259 287.164 209.803 295.233L246.035 333.99L207.72 368.011ZM42 95C42 83.9543 50.9543 75 62 75H109C120.046 75 129 83.9543 129 95C129 106.046 120.046 115 109 115H62C50.9543 115 42 106.046 42 95ZM164 75C152.954 75 144 83.9543 144 95C144 106.046 152.954 115 164 115H211C222.046 115 231 106.046 231 95C231 83.9543 222.046 75 211 75H164Z"
        fill={fill}
      />
    </svg>
  );
};

export default LessonIcon;