import { GithubIssue } from "@/@types/github-issue";
import { Publication } from "@/@types/publication";
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

  const getPublications = useCallback(
    async (userName: string, repo: string, queryString: string) => {
      setIsLoading(true);
      gitHub
        .get<ApiResponse>(
          `/search/issues?q=${encodeURIComponent(
            queryString
          )}%20repo:${userName}/${repo}`
        )
        .then((response) => {
          setPublications(
            response.data.items.map((issue) => ({
              id: issue.id,
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
    },
    []
  );

  return { publications, isLoading, getPublications };
};
