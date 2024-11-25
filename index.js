import { GetAllSuppliers } from "./function";
import BaseURL from "./BaseURL";

let col = document.querySelector(".col")

function GetData() {
    GetAllSuppliers(BaseURL)
    .then(res=>ShowSuppliers(res.data))
}

GetData()

function ShowSuppliers(array){
    col.innerHTML=""
    array.forEach(element => {
        row.innerHTML +=`
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>`
    });
}