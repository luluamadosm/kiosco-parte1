import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { CATEGORIES } from "../types";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filtered = category ? products.filter((p) => p.category === category) : products;

  const handleCategoryChange = (value: string) => {
    if (value === "") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <section>
      <div className="page-header">
        <h1>Productos</h1>
        <label>
          Categoría:{" "}
          <select value={category ?? ""} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="">Todas</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <div className="grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
