import { FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/storeHooks";

import { Box, Typography, Button } from "@mui/material";
import { SlArrowLeft } from "react-icons/sl";

const ArticlePage: FC = () => {
  const { articleId } = useParams();
  const articles = useAppSelector((state) => state.list);
  const article = articles.find((article) => article.id === Number(articleId));
  const navigate = useNavigate();
  useEffect(() => {
    if (!article) navigate("/notFound");
  }, [article, navigate]);
  return (
    <>
      <img
        className="image"
        src={article?.imageUrl}
        alt="article poster"
        height="245px"
      />
      <Box
        sx={{
          mx: "40px",
          px: "70px",
          pt: "30px",
          pb: "50px",
          transform: "translateY(-100px)",
          backgroundColor: "#efebeb",
          border: "1px solid #1738a3",
          boxShadow: "0px 8px 24px rgba(60, 43, 138, 0.05)",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            mt: "35px",
            fontSize: 25,
            lineHeight: 1.21,
            textAlign: "center",
          }}
        >
          {article?.title}
        </Typography>
        <Typography
          sx={{
            mt: "35px",
            fontSize: 25,
            lineHeight: 1.21,
            textAlign: "center",
          }}
        >
          {article?.summary}
        </Typography>
        <Typography paragraph sx={{ mt: "50px", fontSize: 16 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          harum tempora blanditiis soluta sequi animi deserunt, inventore est,
          excepturi ab unde pariatur architecto ut quibusdam sit quis culpa
          consequatur nostrum iusto quisquam maiores. Quo atque distinctio
          voluptates earum velit. Modi quos molestiae velit, cupiditate aut
          quidem nam adipisci doloremque sint quisquam nihil debitis
          necessitatibus quasi officia placeat soluta, perferendis magni
          deleniti enim ipsa harum cum et hic distinctio. Inventore, at earum id
          expedita ullam modi voluptatem sapiente facere minus quidem sunt
          dolores suscipit, laboriosam explicabo autem voluptas, ratione tempora
          debitis. Accusamus corporis quaerat ea ad architecto veniam nemo
          explicabo similique!
        </Typography>
      </Box>
      <Button
        onClick={() => navigate("/")}
        startIcon={<SlArrowLeft color="blue" />}
        sx={{
          mt: "-60px",
          mb: "45px",
          ml: "150px",
          textTransform: "none",
          fontWeight: 700,
          color: "inherit",
        }}
      >
        Back to homepage
      </Button>
    </>
  );
};

export default ArticlePage;
