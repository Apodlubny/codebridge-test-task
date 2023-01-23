import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import { FiCalendar } from "react-icons/fi";
import Highlighter from "react-highlight-words";
import { useAppSelector } from "../hooks/storeHooks";
import { Article } from "../types";
import { getFormatedDate } from "../helpers/getFormatedDate";

const ArticleCard: FC<Article> = (article) => {
  const filter = useAppSelector((state) => state.filter);
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/article/${article.id}`)}>
        <CardMedia
          component="img"
          height="200"
          image={article.imageUrl}
          alt="article image"
        />
        <CardContent
          sx={{
            minHeight: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: "25px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                opacity: 0.6,
              }}
            >
              <FiCalendar fontSize={20} />
              <Typography sx={{ fontSize: 14 }}>
                {getFormatedDate(article.publishedAt)}
              </Typography>
            </Box>
            <Typography
              sx={{
                mt: "25px",
                fontSize: 24,
                lineHeight: 1.21,
                filter:
                  "drop-shadow(0px 4px 4px rgba(48, 38, 103, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              <Highlighter
                searchWords={filter.split(" ")}
                textToHighlight={article.title}
              />
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ mt: "20px" }}>
              <Highlighter
                searchWords={filter.split(" ")}
                textToHighlight={article.summary.slice(0, 100)}
              />
              {article.summary.length > 100 && "..."}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                mt: "20px",
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Read more</Typography>
              <SlArrowRight color="blue" fontSize={20} />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
