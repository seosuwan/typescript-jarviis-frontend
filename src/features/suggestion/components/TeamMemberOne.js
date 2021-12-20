import PropTypes from "prop-types";
import React from "react";
// import teamMemberData from "../data/team-member-one.json";
import TeamMemberOneSingle from "./TeamMemberOneSingle";


const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  const teamMemberData = 
  [
      {
        "contents": "비트캠프 방문",
        "location":"비트캠프 서초본원", 
        "routine": null,
        "start":"2021-12-23 ",
        "end":"2021-12-23"
      },
      {
        "contents": "자기소개서 작성",
        "location": null,
        "routine": [
            "월",
            "수"
        ],
        "start": [
            "2021-12-20",
            "2021-12-22"
        ],
        "end": null,
        "type": "ROUTINE"
    }
    ]
  return (
    // <div
    //   className={`team-area ${spaceTopClass ? spaceTopClass : ""} ${
    //     spaceBottomClass ? spaceBottomClass : ""
    //   }`}
    // >
     <div className="team-area">
        <div className="">
          {teamMemberData.map((single, key) => {
              return (
                <TeamMemberOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>
      </div>
 
  );
};

TeamMemberOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TeamMemberOne;
