import Index from "./pages/Index/Index";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
];

export default routes;
