import { FC } from "react";
import { useAppSelector } from "../hooks/storeHooks";
import { getFilteredList } from "../helpers/getFilteredList";
import ArticleCard from "./ArticleCard";

import { Typography, Grid, Divider } from "@mui/material";

const ArticlesList: FC = () => {
  const articles = useAppSelector((state) => state.list);
  const filter = useAppSelector((state) => state.filter);
  const list = getFilteredList(articles, filter.split(" "));
  return (
    <>
      <Typography sx={{ mt: 5, lineHeight: 1.25, fontWeight: 600 }}>
        {filter ? `Results: ${list.length}` : `Last ${list.length} articles`}
      </Typography>
      <Divider sx={{ mb: "45px", borderColor: "#EAEAEA" }} />
      <Grid container spacing={{ md: "45px" }} columns={{ md: 12 }}>
        {list.map((article) => (
          <Grid item md={4} key={article.id}>
            <ArticleCard {...article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArticlesList;
