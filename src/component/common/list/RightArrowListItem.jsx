import PropTypes from "prop-types"
import { ChevronForwardOutline } from "react-ionicons";
import { Link } from "react-router-dom";

export function Right({ title, to, handleClick }) {
  return (
    <div className="flex text-white gap-3 font-bold text-lg my-2">
      <ChevronForwardOutline
        color={"#51c5ff"}
        title={title}
        height="23px"
        width="23px"
      />
      <Link to={to} onClick={handleClick}>
        <div className="hover:text-blue-300 text-white text-lg">{title}</div>
      </Link>
    </div>
  );
}

Right.propTypes = {
  handleClick: PropTypes.any,
  title: PropTypes.any,
  to: PropTypes.any
}
