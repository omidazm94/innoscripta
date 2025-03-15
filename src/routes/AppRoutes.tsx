import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Loading from "../components/common/Loading";
import Layout from "../layout/Layout";
import Error404 from "../pages/404";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading loading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
