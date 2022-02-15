import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getIssues,
  getFilter,
  getLoading,
} from "../../redux/issues/issuesSelectors";
import Loader from "../Loader/Loader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import s from "./IssuesList.module.css";

const IssuesList = () => {
  const issues = useSelector(getIssues);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const location = useLocation();

  const filterIssues = (issues, filter) => {
    const { label, assignee, oldest } = filter;

    const newIssues = issues.filter((issue) => {
      const labelString = JSON.stringify(issue.labels).toLowerCase();
      const assigneeString = JSON.stringify(issue.assignees).toLowerCase();
      return (
        labelString.includes(label.toLowerCase()) &&
        assigneeString.includes(assignee.toLowerCase())
      );
    });
    if (!oldest) {
      return newIssues;
    } else {
      return newIssues.reverse();
    }
  };

  const filteredIssues = filterIssues(issues, filter) || [];

  return (
    <>
      {loading && <Loader />}
      {filteredIssues && !loading && (
        <TableContainer component={Paper}>
          <Table
            sx={{ width: 1200 }}
            aria-label="customized table"
            align="center"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" className={s.title}>
                  Name
                </TableCell>
                <TableCell align="left" className={s.title}>
                  Labels
                </TableCell>
                <TableCell align="right" className={s.title}>
                  Assignees
                </TableCell>
                <TableCell align="right" className={s.title}>
                  Number of comments
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredIssues?.map(
                ({ id, title, number, labels, assignees, comments }) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" className={s.cell}>
                      {
                        <>
                          <p className={s.name}>{title}</p>
                          <Link
                            to={{
                              pathname: `/${number}`,
                              state: { from: location },
                            }}
                          >
                            <span className={s.link}>More details</span>
                          </Link>
                        </>
                      }
                    </TableCell>
                    <TableCell align="left">
                      {labels.length > 0 ? (
                        <ul className={s.list}>
                          {labels.map(({ id, name }) => (
                            <li className={s.labelItem} key={id}>
                              {name}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "none"
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {assignees.length > 0 ? (
                        <ul className={s.list}>
                          {assignees.map(({ id, login }) => (
                            <li key={id}>{login}</li>
                          ))}
                        </ul>
                      ) : (
                        0
                      )}
                    </TableCell>
                    <TableCell align="right">{comments}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default IssuesList;
