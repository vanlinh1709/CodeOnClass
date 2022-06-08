import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
//
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import StudentAddEdit from "./pages/StudentAddEdit";
//
import { Products } from "./pages/Students";
import { ProductDetail } from "./pages/StudentDetail";
import { ProductAdd } from "./pages/StudentAddEdit";
// Import đối tượng router về.
import router from "./helpers/router";
//Main
const render = async (content, id) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#content").innerHTML = await content.render(id);
  document.querySelector("#footer").innerHTML = Footer.render();

  if (content.afterRender) {
    content.afterRender(id);
  } //Thêm sự kiện vào trong button.
};
//
router.on({
  "/": () => render(Home),
  "/about": () => render(About),
  "/news": () => render(News),
  "/students": () => render(Students),
  "/students/add": () => render(StudentAddEdit),
  "/students/detail/:id": (data) => render(StudentDetail, data.data.id),
  "/students/edit/:id": (data) => render(StudentAddEdit, data.data.id),
  //

  "/products": () => render(Products),
  "/products/add": () => render(ProductAdd),
  "/products/detail/:id": (data) => render(ProductDetail, data.data.id),
});
router.resolve();
