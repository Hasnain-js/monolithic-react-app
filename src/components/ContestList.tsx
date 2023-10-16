import { useEffect, useState } from "react";
import * as React from "react";

import ContestPreview from "./ContestPreview";
import { fetchContestList } from "../api-client";

const ContestList: React.FC<{
  initialContests: object;
  onContestClick: Function;
}> = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(
    initialContests ?? [],
  );
  useEffect(() => {
    if (!initialContests) {
      fetchContestList().then((contests: any) => {
        setContests(contests);
      });
    }
  }, [initialContests]);
  return (
    <>
      <h1 className="header">Naming Contest</h1>
      <div className="contest-list">
        {contests.map((contest: any) => {
          return (
            <ContestPreview
              key={contest.id}
              contest={contest}
              onClick={onContestClick}
            />
          );
        })}
      </div>
    </>
  );
};
export default ContestList;
