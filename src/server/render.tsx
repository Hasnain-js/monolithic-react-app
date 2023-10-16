import ReactDOMServer from "react-dom/server";
import { fetchContest, fetchContestList } from "../api-client";
import { App } from "../components/App";
const serverRender = async (require: any) => {
  const { contestId } = require.params;

  const initialData = contestId
    ? {
        currentContest: await fetchContest(contestId),
      }
    : {
        contests: await fetchContestList(),
      };
  const initialMarkUp = ReactDOMServer.renderToString(

    <App initialData={initialData} />,
  );
  return { initialMarkUp, initialData };
};

export default serverRender;
