import ReactDOMServer from "react-dom/server";
import { fetchContestList } from "../api-client";
import { App } from "../components/App";
const serverRender = async () => {
  const contest = await fetchContestList();
  const initialMarkUp = ReactDOMServer.renderToString(
    <App initialData={ contest } />,
  );
  return { initialMarkUp, initialData:  contest };
};

export default serverRender
