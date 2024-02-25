import { setupServer } from "msw/native";
import { userHandlers } from "./user";

export const server = setupServer(...userHandlers);
