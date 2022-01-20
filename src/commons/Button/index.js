// import React from "react";
// import ReactLoading from "react-loading";
// import { COLORS } from "../../style";
// import "./style.css";

// export const Button = ({
//   title,
//   primary = true,
//   secondary,
//   Icon,
//   disabled,
//   loading,
//   width,
//   height,
//   margin,
//   ...props
// }) => {
//   return (
//     <button
//       disabled={disabled || loading}
//       className={
//         disabled || loading
//           ? "disabled-button basic-button "
//           : primary
//           ? "basic-button custom-button-primary "
//           : secondary && "basic-button custom-button-secondary"
//       }
//       style={{ width, height, margin }}
//       {...props}
//     >
//       {loading ? (
//         <ReactLoading
//           type={"spin"}
//           color={COLORS.primary}
//           height={20}
//           width={20}
//         />
//       ) : (
//         <div>{title}</div>
//       )}
//     </button>
//   );
// };

import React from "react";
import { Loading } from "../Loading";
import { COLORS } from "../../style";
import "./style.css";

export const Button = ({
  title,
  primary = true,
  secondary,
  Icon,
  disabled,
  loading,
  width,
  margin,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={
        disabled || loading
          ? "disabled-button basic-button "
          : primary
          ? "basic-button custom-button-primary "
          : secondary && "basic-button custom-button-secondary"
      }
      style={{ width, margin }}
      {...props}
    >
      {loading ? (
        <Loading width="20px" height="20px" color={COLORS.primary} />
      ) : (
        title
      )}

      {Icon && <div className="button-right-icon"> {Icon}</div>}
    </button>
  );
};
