const AvailibleIcon = ({ fill = "white", width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 364 452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="89" width="25" height="40" rx="12.5" fill={fill} />
      <rect x="144" width="25" height="40" rx="12.5" fill={fill} />
      <rect x="199" width="25" height="40" rx="12.5" fill={fill} />
      <rect x="254" width="25" height="40" rx="12.5" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60 26C26.8629 26 0 52.8629 0 86V391.751C0 424.888 26.8628 451.751 59.9999 451.751H303.817C336.954 451.751 363.817 424.888 363.817 391.751V86C363.817 52.8629 336.954 26 303.817 26H60ZM82 130C92.4934 130 101 121.493 101 111C101 100.507 92.4934 92 82 92C71.5066 92 63 100.507 63 111C63 121.493 71.5066 130 82 130ZM169 111C169 121.493 160.493 130 150 130C139.507 130 131 121.493 131 111C131 100.507 139.507 92 150 92C160.493 92 169 100.507 169 111ZM218 130C228.493 130 237 121.493 237 111C237 100.507 228.493 92 218 92C207.507 92 199 100.507 199 111C199 121.493 207.507 130 218 130ZM305 111C305 121.493 296.493 130 286 130C275.507 130 267 121.493 267 111C267 100.507 275.507 92 286 92C296.493 92 305 100.507 305 111ZM82 213C92.4934 213 101 204.493 101 194C101 183.507 92.4934 175 82 175C71.5066 175 63 183.507 63 194C63 204.493 71.5066 213 82 213ZM169 194C169 204.493 160.493 213 150 213C139.507 213 131 204.493 131 194C131 183.507 139.507 175 150 175C160.493 175 169 183.507 169 194ZM218 213C228.493 213 237 204.493 237 194C237 183.507 228.493 175 218 175C207.507 175 199 183.507 199 194C199 204.493 207.507 213 218 213ZM101 280C101 290.493 92.4934 299 82 299C71.5066 299 63 290.493 63 280C63 269.507 71.5066 261 82 261C92.4934 261 101 269.507 101 280ZM150 299C160.493 299 169 290.493 169 280C169 269.507 160.493 261 150 261C139.507 261 131 269.507 131 280C131 290.493 139.507 299 150 299ZM216.492 365.399C199.652 365.399 186 351.747 186 334.907C186 318.066 199.652 304.414 216.492 304.414H235.601V284.492C235.601 267.652 249.253 254 266.093 254C282.934 254 296.586 267.652 296.586 284.492V304.414H316.508C333.348 304.414 347 318.066 347 334.907C347 351.747 333.348 365.399 316.508 365.399H296.586V384.508C296.586 401.348 282.934 415 266.093 415C249.253 415 235.601 401.348 235.601 384.508V365.399H216.492Z"
        fill={fill}
      />
    </svg>
  );
};

export default AvailibleIcon;