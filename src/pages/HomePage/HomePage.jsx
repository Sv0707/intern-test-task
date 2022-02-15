import React from "react";
import { useEffect } from "react";
import s from "./HomePage.module.css";
import { fetchIssues } from "../../redux/issues/issuesOperations";
import { getSearchParams, getIssues } from "../../redux/issues/issuesSelectors";
import { useDispatch, useSelector } from "react-redux";
import SearchIssuesForm from "../../components/SearchIssuesForm/SearchIssuesForm";
import IssuesList from "../../components/IssuesList/IssuesList";
import Filter from "../../components/Filter/Filter";

const HomePage = () => {
  const issues = useSelector(getIssues);
  const searchParams = useSelector(getSearchParams);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIssues(searchParams));
  }, [dispatch, searchParams]);

  return (
    <div className={s.searchFormBlock}>
      <SearchIssuesForm />
      {issues.length > 0 && (
        <>
          <Filter />
          <IssuesList issues={issues} />
        </>
      )}
    </div>
  );
};

export default HomePage;
