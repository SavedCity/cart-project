import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 12 Pro Max",
      description: "Pacific blue iPhone 12 Pro. 5G speed...",
      price: 1049.99,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
    },

    {
      id: 2,
      name: "Toothbrush",
      description: "Bamboo toothbrush with replaceable head",
      price: 4.79,
      image:
        "https://cdn.shopify.com/s/files/1/1704/0849/products/ToothBrushTeal_bc4c6c15-cf79-4bb5-87cc-28109b5e7605_1024x1024.jpg?v=1607029152",
    },
    {
      id: 3,
      name: "Wallet",
      description: "Credit Wallet with ID Pass-case",
      price: 49.99,
      image:
        "https://bosca.com/media/catalog/product/cache/64a917206e88052f26a2cdad740e4c36/1/9/195-59_1_1.jpg",
    },
  ]);
  const [inCartItems, setInCartItems] = useState(products);

  const removeFromCart = (productToRemove) => {
    setInCartItems(
      inCartItems.filter((products) => products !== productToRemove)
    );
  };

  let pricesArray = inCartItems.map((items) => {
    return items.price;
  });
  let total = pricesArray.reduce((a, b) => {
    return a + b;
  }, 0);

  const clearCart = () => {
    setInCartItems([]);
  };

  let updateQuantity = () => {
    for (let i = 0; i < inCartItems.length; i++) {
      var qtyInput = document.querySelectorAll("#quantity")[i];
      var itemPrice = document.querySelectorAll("#price")[i];
      let qtyMult = qtyInput.value * itemPrice.firstChild.wholeText;
      console.log(qtyMult);
    }
  };

  let handleChange = (e) => {
    console.log(e.target.value);
  };

  console.log(total);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h5>
                      <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                      Shopping Cart
                    </h5>
                  </div>
                  <div className="col-xs-6">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-block"
                    >
                      <span className="glyphicon glyphicon-share-alt"></span>{" "}
                      Continue shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              {inCartItems.map((item, key) => {
                return (
                  <div key={key}>
                    <div className="row">
                      <div className="col-xs-2">
                        <img
                          className="img-responsive"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="col-xs-4">
                        <h4 className="product-name">
                          <strong>{item.name}</strong>
                        </h4>
                        <h4>
                          <small>{item.description}</small>
                        </h4>
                      </div>
                      <div className="col-xs-6">
                        <div className="col-xs-6 text-right">
                          <h6>
                            <span id="price">{item.price}</span>{" "}
                            <span className="text-muted">x</span>
                          </h6>
                        </div>
                        <div className="col-xs-4">
                          <input
                            onChange={handleChange}
                            type="number"
                            className="form-control input-sm"
                            defaultValue={quantity}
                            id="quantity"
                            min={1}
                          />
                        </div>
                        <div className="col-xs-2">
                          <button
                            onClick={() => {
                              removeFromCart(item);
                            }}
                            className="btn btn-link btn-xs"
                          >
                            <span className="glyphicon glyphicon-trash"> </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}

              <div className="row">
                {pricesArray.length >= 1 && (
                  <div className="text-center">
                    <div className="col-xs-9">
                      <h6 className="text-right">Added items?</h6>
                    </div>
                    <div className="col-xs-3">
                      <button
                        className="btn btn-warning btn-sm btn-block"
                        onClick={updateQuantity}
                      >
                        Update cart
                      </button>
                      <button
                        className="btn btn-danger btn-sm btn-block"
                        onClick={clearCart}
                      >
                        Clear cart
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="panel-footer">
              <div className="row text-center">
                <div className="col-xs-9">
                  <h4 className="text-right">
                    <strong>
                      {pricesArray.length < 1
                        ? "Your cart is empty"
                        : "Total: " + total}
                    </strong>
                  </h4>
                </div>
                <div className="col-xs-3">
                  {pricesArray.length < 1 ? (
                    <button
                      type="button"
                      className="btn btn-success btn-lg"
                      disabled
                    >
                      Checkout
                    </button>
                  ) : (
                    <Link
                      to="/checkout"
                      className="btn btn-success btn-lg btn-block"
                    >
                      Checkout
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
