import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import {
  changeFilterLabel,
  changeFilterAssignee,
  changeFilterNewest,
  changeFilterOldest,
} from "../../redux/issues/issuesActions";
import { getFilter } from "../../redux/issues/issuesSelectors";

const Filter = () => {
  const { label, assignee, newest, oldest } = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={s.title}>Filters</h2>
      <div className={s.form}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          className={s.filtersForm}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-label"
            size="small"
            label="Labels"
            value={label}
            onChange={(e) => dispatch(changeFilterLabel(e.target.value))}
          />
          <TextField
            id="outlined-assignee"
            size="small"
            label="Assignees"
            value={assignee}
            onChange={(e) => dispatch(changeFilterAssignee(e.target.value))}
          />

          <div className={s.checkboxWrapper}>
            <label>
              Newest
              <Checkbox
                checked={newest}
                onChange={() => dispatch(changeFilterNewest())}
              />
            </label>
            <label>
              Oldest
              <Checkbox
                checked={oldest}
                onChange={() => dispatch(changeFilterOldest())}
              />
            </label>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Filter;
