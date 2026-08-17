import Navbar from "../components/Navbar";
import Products from "../features/products/Products";

function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold text-pink-600">
          Mini E-Commerce
        </h1>

        <Products />
      </div>
    </div>
  );
}

export default Home;