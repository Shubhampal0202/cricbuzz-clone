import React from "react";
import "./matchCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MatchCard({ match }) {
  const navigate = useNavigate();
  const handleClick = (matchId) => {
    navigate(`/match/${matchId}`);
  };

  const goToPointsTable = (e, seriesId) => {
    navigate(`/match/pointsTable/${seriesId}`);
    e.stopPropagation();
  };
  return (
    <div
      className="matchCard"
      onClick={(e) => handleClick(match.matchInfo.matchId)}
    >
      
      <div className="details">
        <div className="matchNum">{match.matchInfo.matchDesc}</div>
        <div className="seriesName">{match.matchInfo.seriesName}</div>
        <div className="format">{match.matchInfo.matchFormat}</div>
      </div>

      <div className="teams">
        <div className="teamName">
          {match.matchInfo.team1.teamName} <span className="vs">V/S</span>{" "}
          {match.matchInfo.team2.teamName}
        </div>
      </div>
      <div className="result">{match.matchInfo.status}</div>
      <div
        className="pointstable"
        onClick={(e) => goToPointsTable(e, match.matchInfo.seriesId)}
      >
        points table
      </div>
    </div>
  );
}

export default MatchCard;
