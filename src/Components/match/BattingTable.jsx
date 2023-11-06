import React from "react";

function BattingTable({ matchData, data,i}) {
  return (
    <>
      <div className="inning">
        <span>
          {matchData && matchData.scoreCard[i].batTeamDetails.batTeamName}{" "}
          innings
        </span>
        <span>
          {matchData && matchData.scoreCard[i].scoreDetails.runs}-{" "}
          {matchData && matchData.scoreCard[i].scoreDetails.wickets}(
          {matchData && matchData.scoreCard[i].scoreDetails.overs} Ov)
        </span>
      </div>
      <table>
        <thead>
          <tr className="Team-heading">
            <th id="Team-firstChild">Batter</th>
            <th>R</th>
            <th>B</th>
            <th>4s</th>
            <th>6s</th>
            <th>SR</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((val) => {
              return (
                <tr className="Team-data">
                  <td id="TeamDataFirstChild">
                    <span className="batter">{val.batName}</span>
                    <span className="outDesc">{val.outDesc}</span>
                  </td>
                  <td>{val.runs}</td>
                  <td>{val.balls}</td>
                  <td>{val.fours}</td>
                  <td>{val.sixes}</td>
                  <td>{val.strikeRate}</td>
                </tr>
              );
            })}
          <div className="extraCont">
            <span className="extraTitle">Extras</span>
            <span className="extraValue">
              {matchData && matchData.scoreCard[i].extrasData.total}
            </span>
          </div>
        </tbody>
      </table>
    </>
  );
}

export default BattingTable;
