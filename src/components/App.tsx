import { useState, useEffect } from "react";
import ContestList from "./ContestList";
import Contest from "./Contest";

export const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    "contestList",
  );
  const [currentContestId, setCurrentContestId] = useState<
    string | undefined
  >();

  useEffect(() => {
    window.onpopstate = (event: any) => {
        const newPage = event.state?.contestId ? 'contest' : 'contestList'
        setPage(newPage)
        setCurrentContestId(event.state?.contestId)
    }
  })
  const navigateToContest = (contestId: string) => {
    window.history.pushState(
      { contestId },
      "",
      `/contest/${contestId}`,
    );
    setPage("contest");
    setCurrentContestId(contestId);
  };
  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContest={initialData}
            onContestClick={navigateToContest}
          />
        );
      case "contest":
        return <Contest id={currentContestId} />;
    }
  };
  return (
    <div className="container" title="hello world">
      {pageContent()}
    </div>
  );
};
