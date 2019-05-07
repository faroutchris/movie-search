import React from "react";

const CastList = ({ cast }) => {
  return (
    <ul className="cast-list">
      {cast.map((member, index) => {
        return (
          <li key={index} className="cast-member">
            <div className="cast-member-profile">
              <img
                className="cast-member-profile-img"
                src={member.profile}
                alt={member.actor}
              />
            </div>
            <h3 className="cast-member-actor">{member.actor}</h3>
            <span className="cast-member-character">{member.character}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
