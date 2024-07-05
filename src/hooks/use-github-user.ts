import { GitHubUserContext } from "@/contexts/github-user.context";
import { useContext } from "react";

export const useGitHubUser = () => useContext(GitHubUserContext);
