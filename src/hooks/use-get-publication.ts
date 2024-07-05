import { Publication } from "@/@types/publication";
import { gitHub } from "@/libs/github-api";
import { useState } from "react";

export const useGetPublication = () => {
  const [publication, setPublication] = useState<Publication | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPublication = async (
    userName: string,
    repo: string,
    publicationId: string
  ) => {
    setIsLoading(true);

    gitHub
      .get(`/repos/${userName}/${repo}/issues/${publicationId}`)
      .then((response) => {
        console.log(response.data);
        setPublication(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    getPublication,
    publication,
    isLoading,
  };
};
