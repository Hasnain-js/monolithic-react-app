import ContestList from "./ContestList";

export const App = ({ initialData}) => {
    return (
        <div className='container' title="hello world">
            <h1>Hello React</h1>
            <ContestList initialContest={ initialData } />
        </div>
    );
}
