import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

function Cart() {
  const { items, totalPrice, clearCart } = useCart();
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    setMessage("¡Pedido realizado con éxito!");
    clearCart();
  };

  return (
    <section>
      <h1>Carrito</h1>

      {message && <p className="success">{message}</p>}

      {items.length === 0 ? (
        <p>
          Tu carrito está vacío. <Link to="/products">Ver productos</Link>
        </p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </ul>

          <p className="total">Total: ${totalPrice}</p>

          <div className="actions">
            <button className="btn" onClick={clearCart}>
              Vaciar carrito
            </button>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Finalizar pedido
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
