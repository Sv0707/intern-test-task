const getIssues = (state) => state.issues.items;
const getLoading = (state) => state.issues.loading;
const getSearchParams = (state) => state.issues.searchParams;
const getIssue = (state) => state.issues.issue;

const getFilter = (state) => state.issues.filter;

export { getIssues, getIssue, getLoading, getSearchParams, getFilter };
