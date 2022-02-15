import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeUser, changeRepository } from "../../redux/issues/issuesActions";
import s from "./SearchIssuesForm.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchIssuesForm = () => {
  const [user, setUser] = useState("");
  const [repository, setRepository] = useState("");
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ ...location });
    dispatch(changeUser(user));
    dispatch(changeRepository(repository));
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      className={s.SearchForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-user"
        size="small"
        label="User"
        value={user}
        autoFocus
        onChange={(e) => setUser(e.target.value)}
      />
      <TextField
        id="outlined-repository"
        size="small"
        label="Repository"
        value={repository}
        onChange={(e) => setRepository(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default SearchIssuesForm;
