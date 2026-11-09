import { useState } from "react";

import "./App.css";

const products = [

  { id: 1, name: "iPhone 17 Pro", price: 89990, category: "Телефоны", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600" },

  { id: 2, name: "MacBook Pro", price: 119990, category: "Ноутбуки", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" },

  { id: 3, name: "AirPods Pro", price: 17990, category: "Аксессуары", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600" },

  { id: 4, name: "PlayStation 5", price: 49990, category: "Игры", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600" },

];

   function App() {

  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Все");

  const addToCart = (product) => {

    setCart([...cart, product]);

  };

  const filtered = products.filter((product) =>

    product.name.toLowerCase().includes(search.toLowerCase()) &&

    (category === "Все" || product.category === category)

  );

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (

    <div className="app">

      <header>

        <h1>NOVA<span>STORE.</span></h1>

        <div className="cart">🛒 Корзина: {cart.length}</div>

      </header>

      <section className="hero">

        <p>ТЕХНОЛОГИИ БУДУЩЕГО</p>

        <h2>Выбирай лучшее.<br />Покупай с умом.</h2>

        <span>Премиальная техника в Кыргызстане 🇰🇬</span>

      </section>

      <main>

        <h2>Наш каталог</h2>

        <input

          placeholder="Поиск товаров..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

        />

        <div className="filters">

          {["Все", "Телефоны", "Ноутбуки", "Аксессуары", "Игры"].map((item) => (

            <button

              className={category === item ? "active" : ""}

              onClick={() => setCategory(item)}

              key={item}

            >

              {item}

            </button>

          ))}

        </div>

        <div className="products">

          {filtered.map((product) => (

            <div className="card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <p>{product.category}</p>

              <h3>{product.name}</h3>

              <h2>{product.price.toLocaleString("ru-RU")} сом</h2>

              <button onClick={() => addToCart(product)}>

                В корзину +

              </button>

            </div>

          ))}

        </div>

        <section className="checkout">

          <h2>Твоя корзина</h2>

          {cart.map((item, index) => (

            <p key={index}>{item.name} — {item.price.toLocaleString("ru-RU")} сом</p>

          ))}

          <h3>Итого: {total.toLocaleString("ru-RU")} сом</h3>

          <button onClick={() => setCart([])}>Очистить корзину</button>

        </section>

      </main>

      <footer>NOVA STORE © 2026 | Кыргызстан 🇰🇬</footer>

    </div>

  );

}

export default App


