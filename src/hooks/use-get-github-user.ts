import { GithubUser } from "@/@types/github-user";
import { defaultGithubUser } from "@/data";
import { gitHub } from "@/libs/github-api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetGithubUser = () => {
  const getGithubUser = async () => {
    const resp = await gitHub.get<GithubUser>(
      `users/${defaultGithubUser.name}`
    );
    return resp.data;
  };

  return useQuery({
    queryKey: ["githubUser"],
    queryFn: getGithubUser,
    retry: 2,
    placeholderData: keepPreviousData,
  });
};
