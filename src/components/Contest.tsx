import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";

const Contest = ({ id }) => {
    const [ contest, setContest] = useState({})
    useEffect(() => {
    fetchContest(id).then((contest) => {
      setContest(contest);
    });
  }, []);
  return (
    <>
        <h1 className='header'>{contest.contestName}</h1>
        <div className="contest">
            <div className="title">{contest.categoryName}</div>
            <div className="description">{contest.description}</div>
        </div>
    </>
  );
};
export default Contest;
