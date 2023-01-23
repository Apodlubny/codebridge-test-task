import { FC, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { getLatestArticles } from "../redux/articlesApi";
import { useAppDispatch } from "../hooks/storeHooks";

import Loader from "../components/Loader";

const Homepage = lazy(() => import("../pages/Homepage"));
const ArticlePage = lazy(() => import("../pages/ArticlePage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="article/:articleId/" element={<ArticlePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
