import { getProduct } from "../api/products";
import { getStudent } from "../api/student"

const StudentDetail = {
  render: async (id) => {
    const response = await getStudent(id);
    const {data} = response;

    return  `<div>
        <div>ID: ${data.id} </div>
        <div>Name: ${data.name} </div>
        <div>MSV: ${data.msv} </div>

      </div>`
     
  }
}
// +++++PRODUCT
export const ProductDetail = {
  render: async (id) => {
    const response = await getProduct(id);
    const {data} = response;

    return  `<div>
        <div>ID: ${data.id}</div>
                  <div>Name: ${data.name}</div>
                  <div>Descriptoon: ${data.description}</div>
                  <div>Price: ${data.price} vnđ</div>
                  <div>Status: ${data.status}</div>
      </div>`
     
  }
}
export default StudentDetail;
