import { useEffect, useState } from 'react'
import ContestPreview from "./ContestPreview";
import { fetchContests } from '../api-client';

const ContestList = ({ initialContest }) => {
    const [contests, setContests] = useState(initialContest)
        useEffect(() => {
            fetchContests().then((data: any) => {
                setContests(data.contests)
            })
        },[])
  return (
    <div className="contest-list">
      {contests.map((contest: any) => {
        return <ContestPreview key={contest.id} contest={contest} />;
      })}
    </div>
  );
};
export default ContestList;
