import React from "react";
import statements from "../data/statements";
import StatementCard from "./StatementCard";

function Statements() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:mx-32 lg:mx-16 md:mx-8 mx-4">
      {statements.map((statementInfo) => {
        return (
          <StatementCard
            key={`statement_${statementInfo["id"]}`}
            statementInfo={statementInfo}
          />
        );
      })}
    </div>
  );
}

export default Statements;
