import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.github.com/repos";

const fetchIssues = createAsyncThunk(
  "issues/fetchIssues",
  async (searchParams) => {
    const response = await axios.get(
      `${BASE_URL}/${searchParams.user}/${searchParams.repository}/issues?sort=created&per_page=100`
    );
    return response.data;
  }
);

const fetchIssuesByNumber = createAsyncThunk(
  "issues/fetchIssuesById",
  async (searchParams) => {
    const response = await axios.get(
      `${BASE_URL}/${searchParams.user}/${searchParams.repository}/issues/${searchParams.number}`
    );
    return response.data;
  }
);

export { fetchIssues, fetchIssuesByNumber };
