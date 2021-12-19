import React from 'react';
import {SearchField} from "./components/SearchField/SearchField";
import {ForecastBlock} from "./components/ForecastBlock/ForecastBlock";
import {useSelector} from "react-redux";

export function App () {
    const loading = useSelector((state) => state.status.isLoading);
    const trouble = useSelector((state) => state.status.isError);
    const used = useSelector((state) => state.status.isUsed);

    if (loading) {
        return (
            <div className="App">
                <SearchField/>
                <h1 className="loadinganderror">Loading...</h1>
            </div>
        );
    } else if (trouble) {
        return (
            <div className="App">
                <SearchField/>
                <h1 className="loadinganderror">Error occurred, try again</h1>
            </div>
        );
    } else if (used === false) {
        return (
            <div className="App">
                <SearchField/>
            </div>
        );
    } else {
        return(
            <div className="App">
                <SearchField/>
                <ForecastBlock/>
            </div>
        );
    }

}

