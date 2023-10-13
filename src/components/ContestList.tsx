import { useEffect, useState } from "react";
import ContestPreview from "./ContestPreview";

const ContestList = ({ initialContest, onContestClick }) => {
  const [contests, setContests] = useState(initialContest);
  // useEffect(() => {
  //   fetchContestList().then((contests: any) => {
  //     setContests(contests);
  //   });
  // }, []);
  return (
    <>
      <h1 className='header'>Naming Contest</h1>
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
