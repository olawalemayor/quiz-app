import React from "react";
import { Routes, Route } from "react-router-dom";
import { FinishedTest, Quiz } from "./pages";

export default function AppRoutes() {
  return (
    <div className="p-2 h-full">
      <Routes>
        <Route path="" element={<Quiz />} />
        <Route path="/done" element={<FinishedTest />} />
      </Routes>
    </div>
  );
}
