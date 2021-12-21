import React from "react";
import {SearchField} from "../../components/SearchField/SearchField";
import {ForecastBlock} from "../../components/ForecastBlock/ForecastBlock";
import {useSelector} from "react-redux";

export function App () {
    const loading = useSelector((state) => state.status.isLoading);
    const trouble = useSelector((state) => state.status.isError);
    const used = useSelector((state) => state.status.isUsed);

    return (
        <div className="App">
            {loading && (
                <div>
                    <SearchField/>
                    <h1 className="loadinganderror">Loading...</h1>
                </div>
            )}
            {trouble && (
                <div>
                    <SearchField/>
                    <h1 className="loadinganderror">Error occurred, try again</h1>
                </div>
            )}
            {!used && (
                <div>
                    <SearchField/>
                </div>
            )}
            {used && !loading && !trouble && (
                <div>
                    <SearchField/>
                    <ForecastBlock/>
                </div>
            )}
        </div>
    );

}


