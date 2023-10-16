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
    <a
      href={"/contest/" + contest.id}
      className="contest-preview"
      style={{ display: "block", textDecoration: 'none' }}
      onClick={handleClick}
    >
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </a>
  );
};

export default ContesPreview;
