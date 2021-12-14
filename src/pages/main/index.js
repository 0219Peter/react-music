import React, { memo, Suspense } from "react";
import { HashRouter, Routes } from "react-router-dom";
// import { renderRoutes } from "react-router-config";

import routes from "@/router";

import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
import HYRecommend from ".././discover/c-pages/recommend/index";

export default memo(function HYMain() {
  return (
    <div>
      <HashRouter>
        <HYAppHeader />
        {/* <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense> */}
        <HYRecommend routes={routes}></HYRecommend>
        <HYAppFooter />
      </HashRouter>
    </div>
  );
});
