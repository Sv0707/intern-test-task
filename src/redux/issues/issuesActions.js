import { createAction } from "@reduxjs/toolkit";

const changeUser = createAction("issues/user_change");

const changeRepository = createAction("issues/repository_change");

const changeFilterLabel = createAction("issues/filter_label_change");

const changeFilterAssignee = createAction("issues/filter_assignee_change");

const changeFilterNewest = createAction("issues/filter_newest_change");

const changeFilterOldest = createAction("issues/filter_oldest_change");

export {
  changeUser,
  changeRepository,
  changeFilterLabel,
  changeFilterAssignee,
  changeFilterNewest,
  changeFilterOldest,
};
