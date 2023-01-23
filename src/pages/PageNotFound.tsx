import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import image from "../img/pageNotFound.png";

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">404 Page Not Found</Typography>
      <img src={image} alt="Page Not Found" width={800} />
      <Typography>Oops! The page you're looking for doesn't exist.</Typography>
      <Button
        onClick={handleClick}
        sx={{ mt: "20px", fontSize: "24px", fontWeight: 700 }}
      >
        Go Home
      </Button>
    </Container>
  );
};

export default PageNotFound;
