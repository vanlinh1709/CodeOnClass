import { getStudents, delStudent } from "../api/student";
//products
import { getProducts, delProduct } from "../api/products";

import reRender from "../helpers/reRender";

const Students = {
  render: async () => {
    const response = await getStudents();

    const { data } = response;
    return `<div>
        ${data
          .map(
            (student) =>
              `<div>
                  <div>ID: ${student.id}</div>
                  <div>Name: ${student.name}</div>
                  <div>MSV: ${student.msv}</div>
                  <div>
                    <a href = "/students/detail/${student.id}">
                        <button class = 'btn btn-info'> Chi tiết </button>
                    </a>
                    <button class='btn btn-danger' data-id = "${student.id}" >Xoa</button>

                    <a href = "/students/edit/${student.id}">
                        <button class='btn btn-warning'>Chinh sua</button>
                    </a>
                  </div>
                  <br>
              </div>`
          )
          .join("")}
        </div>`;
  },

  //Hàm này để thêm các sự kiên xóa vào button "Xóa".
  afterRender: () => {
    const deleteBtns = document.querySelectorAll(".btn-danger");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", async () => {
        //addEvenListener: setup handler cho sự kiện
        const btnId = btn.dataset.id;
        await delStudent(btnId);
        await reRender(Students);
      });
    });
  },
};
//+++++PRODUCTS
const Products = {
  render: async () => {
    // đã đóng ngoặc nhọn phải có return ở trong
    // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
    // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
    // 3.1 fetch nhận vào đường dẫn API endpoint của BE
    // const response = await fetch('https://6291d18dcd0c91932b6876da.mockapi.io/students');
    //
    const response = await getProducts();

    // console.log(response.data);
    // const students = await response.json();
    // console.log('students', students);
    const { data } = response;

    return `<div>
        ${data
          .map(
            (Product) =>
              `<div>
                  <div>ID: ${Product.id}</div>
                  <div>Name: ${Product.name}</div>
                  <div>Descriptoon: ${Product.description}</div>
                  <div>Price: ${Product.price} vnđ</div>
                  <div>Status: ${Product.status}</div>

                  <div>
                    <a href = "/products/detail/${Product.id}">
                        <button class = 'btn btn-info'> Chi tiết </button>
                    </a>
                    <button class='btn btn-danger' data-id = "${Product.id}" >Xoa</button>
                  </div>
                  <br>
              </div>`
          )
          .join("")}
        </div>`;
  },
  //Hàm định nghĩa sự kiện xóa.
  afterRender: () => {
    const deleteBtns = document.querySelectorAll(".btn-danger");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const btnId = btn.dataset.id;
        await delProduct(btnId); //thực hiện việc xóa trên api
        await reRender(Products); //
      });
    });
  },
};
export default Students;
export { Products };
