import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const FilterLink = ({ title, route, icon}) => {


  return (
    <div className="inline-block md:ml-6 rounded p-1 hover:bg-purple-100 cursor-pointer">
      <FontAwesomeIcon icon={icon} size="1x" />
      <Link
        className="text-black no-underline md:inline-block ml-1"
        key={title}
        to={route}
      >
        {title}
      </Link>
    </div>

  );
};

FilterLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
  icon: PropTypes.string
};


export default FilterLink;