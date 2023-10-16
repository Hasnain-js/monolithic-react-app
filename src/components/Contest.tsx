import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";

const Contest = ({ initialContest, onContestListClick }) => {
  const [contest, setContest] = useState(initialContest);
  useEffect(() => {
    if (!contest.names) {
      fetchContest(contest.id).then((contest) => {
        setContest(contest);
      });
    }
  }, [contest.id, contest.names]);

  const handleContestList = (event: any) => {
    event.preventDefault();
    onContestListClick();
  };
  return (
    <>
      <h1 className="header">{contest.contestName}</h1>
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>
        <a
          href="/"
          className="link"
          onClick={handleContestList}
        >
          Contest list
        </a>
      </div>
    </>
  );
};
export default Contest;
