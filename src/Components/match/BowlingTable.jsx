import React from "react";

function BowlingTable({data}) {
  return (
    <>
      <table>
        <thead>
          <tr className="bowl-head">
            <th id="bowl-headChild">Bowler</th>
            <th>O</th>
            <th>M</th>
            <th>R</th>
            <th>W</th>
            <th>NB</th>
            <th>WD</th>
            <th>ECO</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((val) => {
              return (
                <tr className="bowlData">
                  <td id="bowlDataChild">{val.bowlName}</td>
                  <td>{val.overs}</td>
                  <td>{val.maidens}</td>
                  <td>{val.runs}</td>
                  <td>{val.wickets}</td>
                  <td>{val.no_balls}</td>
                  <td>{val.wides}</td>
                  <td>{val.economy}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default BowlingTable;
