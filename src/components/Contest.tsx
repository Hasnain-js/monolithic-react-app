import { useEffect, useState } from "react";
import {
  addNewNameToContest,
  fetchContest,
} from "../api-client";

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
  const handleNewNameSubmit = async (event: any) => {
    event.preventDefault();
    const newNamesInput = event.target.newName;
    const updatedContest = await addNewNameToContest({
      contestId: contest.id,
      newNameValue: newNamesInput.value,
    });
    setContest(updatedContest);
  };
  return (
    <>
      <h1 className="header">{contest.contestName}</h1>
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>
        <div className="title">Proposed Names</div>
        <div className="body">
          {contest.names?.length > 0 ? (
            <div className="list">
              {contest.names.map((proposedNames, index) => (
                <div key={index} className="item">
                  {proposedNames.name}
                </div>
              ))}
            </div>
          ) : (
            <div>No names proposed yet</div>
          )}
        </div>
        <div className="title">Proposed a new name</div>
        <div className="body">
          <form onSubmit={handleNewNameSubmit}>
            <input
              type="text"
              name="newName"
              placeholder="New Names here..."
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <a href="/" className="link" onClick={handleContestList}>
          Contest list
        </a>
      </div>
    </>
  );
};
export default Contest;
