import * as React from "react";
const ContesPreview: React.FC<{
  contest: object;
  onClick: any;
}> = ({ contest, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    // navigate to a new contest
    onClick(contest.id);
  };
  return (
    <div className="contest-preview link" onClick={handleClick}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContesPreview;
