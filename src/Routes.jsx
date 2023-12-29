import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound";
const Accueil21440pxdesktop = React.lazy(
  () => import("pages/Accueil21440pxdesktop"),
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/accueil21440pxdesktop" />} />
          <Route path="/accueil21440pxdesktop" element={<Accueil21440pxdesktop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
