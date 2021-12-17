import React from 'react';
import {SearchField} from "./components/SearchField/SearchField";
import {ForecastBlock} from "./components/ForecastBlock/ForecastBlock";
import {SvgCondition} from "./components/SvgCondition/SvgCondition";

export function App () {
  return (
    <div className="App">
      <SearchField/>
      <ForecastBlock/>
      <SvgCondition/>
    </div>
  );
}

