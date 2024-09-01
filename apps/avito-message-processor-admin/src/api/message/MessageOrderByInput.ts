import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
