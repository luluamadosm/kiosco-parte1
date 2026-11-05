import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <section>
        <h1>Producto no encontrado</h1>
        <Link to="/products" className="btn">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="detail">
      <h1>{product.name}</h1>
      <p>
        <strong>Categoría:</strong> {product.category}
      </p>
      <p>
        <strong>Precio:</strong> ${product.price}
      </p>
      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
      <p>{product.description}</p>

      <div className="add-form">
        <input
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Math.min(Math.max(Number(e.target.value), 1), product.stock))}
        />
        <button className="btn btn-primary" onClick={() => addToCart(product, quantity)}>
          Agregar al carrito
        </button>
      </div>

      <Link to="/products" className="btn">
        Volver al catálogo
      </Link>
    </section>
  );
}

export default ProductDetail;
