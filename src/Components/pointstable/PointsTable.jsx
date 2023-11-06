import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./pointsTable.css";

function PointsTable() {
  const params = useParams();
  const { seriesId } = params;
  const [pointsTableData, setPointsTableData] = useState("");
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/${seriesId}/points-table`,
    headers: {
      "X-RapidAPI-Key": "d2fc17f472msh4c90723ed46589bp1405d5jsn63f6b09b3aa7",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fn() {
      try {
        const { data } = await axios.request(options);
        console.log(data);
        setPointsTableData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fn();
  }, [seriesId]);

  if (pointsTableData) {
    pointsTableData.pointsTable[0].pointsTableInfo.forEach((val) => {
      if (val.matchesDrawn == undefined) {
        val.matchesDrawn = 0;
      }
      if (val.noRes == undefined) {
        val.noRes = 0;
      }
      if (val.matchesWon == undefined) {
        val.matchesWon = 0;
      }
    });
  }

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {pointsTableData && (
            <>
              <h3 className="h3">
                {pointsTableData.appIndex.seoTitle.split("|")[0]}
              </h3>
              <div className="table-cont">
                <table className="points-table">
                  <thead>
                    <tr>
                      <th id="first">Teams</th>
                      <th>Mat</th>
                      <th>Won</th>
                      <th>Lost</th>
                      <th>Tied</th>
                      <th>NR</th>
                      <th>Pts</th>
                      <th>NRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pointsTableData.pointsTable[0].pointsTableInfo.map(
                      (val) => {
                        return (
                          <tr>
                            <td id="first">{val.teamFullName}</td>
                            <td>{val.matchesPlayed}</td>
                            <td>{val.matchesWon}</td>
                            <td>
                              {val.matchesPlayed -
                                val.matchesWon -
                                val.matchesDrawn -
                                val.noRes}
                            </td>
                            <td>{val.matchesDrawn}</td>
                            <td>{val.noRes}</td>
                            <td>{val.points}</td>
                            <td>{val.nrr}</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PointsTable;
