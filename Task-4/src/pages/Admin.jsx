import { useEffect, useState } from "react";

function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await fetch(`http://localhost:3000/products/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setEditingId(null);
    } else {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    }

    setForm({
      title: "",
      price: "",
      image: "",
    });

    getProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    getProducts();
  };

  const editProduct = (product) => {
    setEditingId(product.id);

    setForm({
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-pink-600">
          Admin Panel
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mb-10 rounded-2xl bg-white p-6 shadow"
        >
          <h2 className="mb-5 text-2xl font-bold">
            {editingId ? "Edit Product" : "Add Product"}
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Product name"
              className="rounded-lg border p-3"
            />

            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              type="number"
              className="rounded-lg border p-3"
            />

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="mt-5 rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* PRODUCTS */}
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white p-5 shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="mb-4 h-48 w-full rounded-xl object-cover"
              />

              <h3 className="text-xl font-bold">
                {product.title}
              </h3>

              <p className="my-2 text-pink-500">
                ${product.price}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => editProduct(product)}
                  className="rounded-lg bg-yellow-400 px-4 py-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="rounded-lg bg-red-500 px-4 py-2 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;