import { createStudent, getStudent, updateStudent } from "../api/student";
import { createProduct } from "../api/products";

import router from "../helpers/router";
const StudentAddEdit = {
  render: async (id) => {
      let student ={
          name: '',
          msv: '',
          avatar: '',
      }
      if(id) {
           const response = await getStudent(id);
           student = response.data;//student là obj
      }
    return `<div>
              <form>
                  <div class='form-group'>
                      <label>Tên</label>
                      <input value = "${student.name}" class='form-control' id='name' />
                  </div>
                  <div class='form-group'>
                      <label>MSV</label>
                      <input value = "${student.ms}" class='form-control' id='msv' />
                  </div>
                  <div class='form-group'>
                      <label>Avatar</label>
                      <input value = "${student.avatar}" class='form-control' id='avatar' />
                  </div>
                  <div class='form-group'>
                      <button type='button' class='btn btn-success'>${
                          id ? 'Cập nhập' : 'Tạo mới' 
                      }</button>
                  </div>
                  
              </form>
          </div>`;
  },
  afterRender: (id) => {
    const submitBtn = document.querySelector(".btn");
    submitBtn.addEventListener("click", async () => {
      const name = document.querySelector("#name").value;
      const msv = document.querySelector("#msv").value;
      const avatar = document.querySelector("#avatar").value;

      const submitData = {
        name: name,
        msv: msv,
        avatar: avatar,
      };
      // createStudent(submitData);
      if(id) {
        await updateStudent(id, submitData);
    } else {
        await createStudent(submitData);
    }     
      router.navigate("/students");
    });
  },
};

//++++++PRODUCTS
export const ProductAdd = {
  render: () => {
    return `<div>
                <form>
                    <div class='form-group'>
                        // <label>Tên</label>
                        // <input class='form-control' id='name' />
                    </div>
                    <div class='form-group'>
                        <label>Description</label>
                        <input class='form-control' id='des' />
                    </div>
                    <div class='form-group'>
                        <label>Price</label>
                        <input class='form-control' id='price' />
                    </div>
                    <div class='form-group'>
                        <label>Status</label>
                        <input class='form-control' id='status' />
                    </div>
                    <div class='form-group'>
                        <button type='button' class='btn btn-success'>Tạo mới</button>
                    </div>
                </form>
            </div>`;
  },
  afterRender: () => {
    const submitBtn = document.querySelector(".btn");
    submitBtn.addEventListener("click", async () => {
      const name = document.querySelector("#name").value;
      const des = document.querySelector("#des").value;
      const price = document.querySelector("#price").value;
      const status = document.querySelector("#status").value;

      const submitData = {
        name,
        des,
        price,
        status,
      };
      // createStudent(submitData);
      await createProduct(submitData);
      window.location.replace("/products");
    });
  },
};

export default StudentAddEdit;
