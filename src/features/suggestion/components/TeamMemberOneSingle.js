import PropTypes from "prop-types";
import React from "react";

const TeamMemberOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div>
      <div
        className={ `team-wrapper ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <div className="team-img">
          <img
            alt=""
            className="img-fluid"
          />
          <div className="team-action">
          <h4>할까 말까</h4>  
            <a
              className="check"
              href= '/accept'
            >
              <i className="fa fa-check" />
            </a>
            <a
              className="remove"
              href='/reject'
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-remove" />
            </a>
          </div>
        </div>
        <div className="team-content">
          <h4>{data.contents} </h4>
          <span>{data.location}</span>
          <span>{`${data.start}`}{data.end !=null ? '~' : ''}{data.end}</span>
          <span>{data.routine !=null ? `루틴 : ${data.routine}`:''}</span>
        </div>
      </div>
    </div>
  );
};

TeamMemberOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default TeamMemberOneSingle;
