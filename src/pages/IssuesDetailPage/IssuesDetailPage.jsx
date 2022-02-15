import React from "react";
import { useEffect } from "react";
import s from "./IssuesDetailPage.module.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import {
  getIssue,
  getSearchParams,
  getLoading,
} from "../../redux/issues/issuesSelectors";
import { fetchIssuesByNumber } from "../../redux/issues/issuesOperations";
import Loader from "../../components/Loader/Loader";

const IssuesDetailPage = () => {
  const { issueNumber } = useParams();
  const issue = useSelector(getIssue);
  const { user, repository } = useSelector(getSearchParams);
  const loading = useSelector(getLoading);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  useEffect(() => {
    const searchParams = {
      user: user,
      repository: repository,
      number: issueNumber,
    };
    dispatch(fetchIssuesByNumber(searchParams));
  }, [dispatch, user, repository, issueNumber]);

  return (
    <>
      <Button variant="outlined" className={s.button} onClick={onGoBack}>
        Go back
      </Button>
      {loading && <Loader />}
      {issue && !loading && (
        <div className={s.issueBlock}>
          <h3 className={s.title}>Title</h3>
          <p className={s.issueTitle}>{issue.title}</p>

          {issue.labels.length > 0 && (
            <>
              <h3 className={s.title}>Labels</h3>
              <ul className={s.list}>
                {issue.labels.map(({ id, name }) => (
                  <li className={s.labelItem} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            </>
          )}

          {issue.assignees.length > 0 && (
            <>
              <h3 className={s.title}>Assignees</h3>
              <ul className={s.list}>
                {issue.assignees.map(({ id, login }) => (
                  <li key={id}>{login}</li>
                ))}
              </ul>
            </>
          )}
          <h3 className={s.title}>Number of comments</h3>
          <p className={s.state}>{issue.comments}</p>
          <h3 className={s.title}>Status</h3>
          <p className={s.state}>{issue.state}</p>
          <h3 className={s.title}>Descriprion</h3>
          <p className={s.body}>{issue.body}</p>
        </div>
      )}
    </>
  );
};

export default IssuesDetailPage;
