import { GithubIssue } from "@/@types/github-issue";
import { Publication } from "@/@types/publication";
import { defaultGithubUser } from "@/data";
import { gitHub } from "@/libs/github-api";
import { useCallback, useState } from "react";

interface ApiResponse {
  incomplete_results: boolean;
  items: Array<GithubIssue>;
  total_count: number;
}

export const useGetPublications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPublications = useCallback(async (queryString: string) => {
    setIsLoading(true);
    gitHub
      .get<ApiResponse>(
        `/search/issues?q=${encodeURIComponent(queryString)}%20repo:${
          defaultGithubUser.name
        }/${defaultGithubUser.repo}`
      )
      .then((response) => {
        console.log(response);
        setPublications(
          response.data.items.map((issue) => ({
            id: issue.number,
            title: issue.title,
            body: issue.body,
            updatedAt: issue.updated_at,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { publications, isLoading, getPublications };
};
