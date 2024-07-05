import { GitHubUser } from "@/@types/github-user";
import { createContext } from "react";

type GitHubUserContextProps = {
  gitHubUser: GitHubUser | undefined;
  isLoading: boolean;
};

export const GitHubUserContext = createContext({} as GitHubUserContextProps);
