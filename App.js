import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  };
  const addProduct = () => {
    if (title === "") {
      alert("Nhập tên sản phẩm");
      return;
    }
    axios
      .post("https://fakestoreapi.com/products", {
        title: title,
      })
      .then(() => {
        alert("Thêm thành công");
        setTitle("");
        loadProducts();
      });
  };
  const deleteProduct = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        alert("Xóa thành công");
        loadProducts();
      });
  };
  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addProduct}>
          Thêm
        </button>
      </div>
      <div className="list">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Giá: ${item.price}</p>
            <button onClick={() => deleteProduct(item.id)}>
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;