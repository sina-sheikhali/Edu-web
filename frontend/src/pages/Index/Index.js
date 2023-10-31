import React from "react";
import Header from "../../Components/Header/Header";
import "./Index.css";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import LastArticles from "../../Components/LastArticle/LastArticles";

export default function Index() {
  return (
    <div>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
    </div>
  );
}
