import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  changeUser,
  changeRepository,
  changeFilterLabel,
  changeFilterAssignee,
  changeFilterNewest,
  changeFilterOldest,
} from "./issuesActions";
import { fetchIssues, fetchIssuesByNumber } from "./issuesOperations";

const itemsReducer = createReducer([], {
  [fetchIssues.fulfilled]: (state, { payload }) => (state = payload),
});

const issueReducer = createReducer(null, {
  [fetchIssuesByNumber.fulfilled]: (state, { payload }) => (state = payload),
});

const loadingReducer = createReducer(false, {
  [fetchIssues.pending]: () => true,
  [fetchIssues.fulfilled]: () => false,
  [fetchIssues.rejected]: () => false,
  [fetchIssuesByNumber.pending]: () => true,
  [fetchIssuesByNumber.fulfilled]: () => false,
  [fetchIssuesByNumber.rejected]: () => false,
});

const userReducer = createReducer("", {
  [changeUser]: (state, { payload }) => (state = payload),
});

const repositoryReducer = createReducer("", {
  [changeRepository]: (state, { payload }) => (state = payload),
});

const filterLabelReducer = createReducer("", {
  [changeFilterLabel]: (state, { payload }) => (state = payload),
});

const filterAssigneeReducer = createReducer("", {
  [changeFilterAssignee]: (state, { payload }) => (state = payload),
});

const filterNewestReducer = createReducer(true, {
  [changeFilterNewest]: (state, _) => (state = !state),
  [changeFilterOldest]: () => false,
});

const filterOldestReducer = createReducer(false, {
  [changeFilterOldest]: (state, _) => (state = !state),
  [changeFilterNewest]: () => false,
});

const searchParamsReducer = combineReducers({
  user: userReducer,
  repository: repositoryReducer,
});

const filterReducer = combineReducers({
  label: filterLabelReducer,
  assignee: filterAssigneeReducer,
  newest: filterNewestReducer,
  oldest: filterOldestReducer,
});

const issuesReducer = combineReducers({
  items: itemsReducer,
  issue: issueReducer,
  loading: loadingReducer,
  searchParams: searchParamsReducer,
  filter: filterReducer,
});

export default issuesReducer;
