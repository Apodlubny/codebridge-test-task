import { Article } from "../types";

export const getFilteredList = (list: Article[], keywords: string[]) => {
  if (keywords.length === 0) return list;
  const resultTitle = list.filter((article) =>
    keywords.some((word) =>
      article.title.toLowerCase().includes(word.toLowerCase())
    )
  );
  const resultSummary = list.filter((article) =>
    keywords.some((word) =>
      article.summary.toLowerCase().includes(word.toLowerCase())
    )
  );
  const result = resultTitle.concat(resultSummary);
  return result.filter((article, index) => result.indexOf(article) === index);
};
