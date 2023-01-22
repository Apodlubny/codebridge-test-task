import { FC } from "react";
import { Box } from "@mui/material";
import { ArticlesList, Filter } from "../components";

const Homepage: FC = () => {
  return (
    <Box px="75px" pt="50px" pb="63px">
      <Filter />
      <ArticlesList />
    </Box>
  );
};

export default Homepage;
