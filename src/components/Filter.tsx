import { FC } from "react";
import { setFilter } from "../redux/articlesReducer";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";

import { Typography, TextField, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import { FcSearch } from "react-icons/fc";

const Filter: FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <Typography sx={{ lineHeight: 1.25, fontWeight: 600 }}>
        Filter by keywords
      </Typography>
      <Box>
        <TextField
          label="search"
          id="outlined-basic"
          variant="outlined"
          sx={{
            width: "600px",
            mt: "10px",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, .2)",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FcSearch color="blue" />
              </InputAdornment>
            ),
            sx: { height: "50px", pl: "20px", lineHeight: 1.5 },
          }}
          value={filter}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default Filter;
