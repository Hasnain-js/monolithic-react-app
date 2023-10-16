import { useState, useEffect } from "react";
import ContestList from "./ContestList";
import Contest from "./Contest";

export const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    initialData.currentContest ? "contest" : "contestList",
  );
  const [currentContest, setCurrentContest] = useState<
    object | undefined
  >(initialData.currentContest);

  useEffect(() => {
    window.onpopstate = (event: any) => {
      const newPage = event.state?.contestId
        ? "contest"
        : "contestList";
      setPage(newPage);
      setCurrentContest({ id: event.state?.contestId });
    };
  }, []);
  const navigateToContest = (contestId: string) => {
    window.history.pushState(
      { contestId },
      "",
      `/contest/${contestId}`,
      );
      setPage("contest");
      console.log(page);
    setCurrentContest({ id: contestId });
  };

  const navigateToContestList = () => {
    window.history.pushState({}, "", "/");
    setPage("contestList");
    console.log(page);
    setCurrentContest(undefined);
  };
  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );
      case "contest":
        return <Contest initialContest={currentContest} onContestListClick={navigateToContestList} />;
    }
  };
  return (
    <div className="container" title="hello world">
      {pageContent()}
    </div>
  );
};
