import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./NamePerson";
import PersonDetail from "./PersonDetail";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortPeople from "./SortPeople";
import GroupPeople from "./GroupPeople";
import AverageAgeByOccupation from "./AverageAgeByOccupation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetail />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <SortPeople />
    <GroupPeople />
    <AverageAgeByOccupation />
  </React.StrictMode>
);

reportWebVitals();