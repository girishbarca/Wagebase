import React from "react";
import { useParams } from "react-router-dom";

import checkmark from "../img/checkmark.svg";
import questionmark from "../img/questionmark.svg";

import "./css/WageDetailList.css";

const PRIMARY_ROW_THEME = "primary";
const SECONDARY_ROW_THEME = "secondary";

const WageDetailRow = (props) => {
  return (
    <tr className={`wage-list-table-data-row-${props.theme}`}>
      <td className="wage-list-table-data-cell">{props.year}</td>
      <td className="wage-list-table-data-cell">
        <img
          src={props.verified ? checkmark : questionmark}
          className={
            props.verified
              ? "checkmark-icon list-icon"
              : "questionmark-icon list-icon"
          }
          alt="verification-icon"
        />
        <span className="horizontal-spacer"></span>
        {props.verified ? "Verified" : "Unverified"}
      </td>
      <td className="wage-list-table-data-cell">{props.wage}/hr</td>
    </tr>
  );
};

const WageDetailList = (props) => {
  const { roleID } = useParams();
  const { roleWages } = props;
  const { role, allWageSubmissions } = roleWages[roleID];

  return (
    <div className="wage-list-container">
      <div className="wage-list-title">All {role} Wages</div>
      <table className="wage-list-table">
        <tr className="wage-list-table-header">
          <th className="wage-list-table-header-cell">Year</th>
          <th className="wage-list-table-header-cell"> Verification Status</th>
          <th className="wage-list-table-header-cell">Wage</th>
        </tr>
        {allWageSubmissions.map((wageSubmission, idx) => {
          const theme = idx % 2 ? PRIMARY_ROW_THEME : SECONDARY_ROW_THEME;
          const props = { theme: theme, ...wageSubmission };
          return <WageDetailRow {...props} />;
        })}
      </table>
    </div>
  );
};

export default WageDetailList;
