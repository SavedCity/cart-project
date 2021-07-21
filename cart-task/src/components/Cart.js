import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App(props) {
  const [quantity, setQuantity] = useState(1);
  const [products] = useState([
    {
      id: 1,
      name: "Ray-Ban Sunglasses",
      description: "Men's Sunglasses, Ray-Ban shiny black wit...",
      price: 138.39,
      image:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/media/catalog/product/4/6/46-001661_f.jpg",
    },
    {
      id: 2,
      name: "Extra Tall Top Hat",
      description:
        "Whether you're dressing up as Abraham Lincoln or a magician for Halloween this yea...",
      price: 28.99,
      image:
        "https://i5.walmartimages.com/asr/39487394-5fae-41ec-a61c-d3265295f11c_1.503a5c8f4aea1eaa4d67a59e6af9ec3c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 3,
      name: "Men's Navy Blue Coat",
      description:
        "The navy blue single-breasted cashmere coat is perfectly tailored in a timeless, regul...",
      price: 179.99,
      image:
        "https://images-dynamic-arcteryx.imgix.net/S21/1350x1710/Keppel-Trench-Coat-Megacosm.jpg?auto=format&w=1350",
    },
    {
      id: 4,
      name: "Sneakers DIESEL",
      description: "S-Nentish Y01172 P1159 H2582 Black/Gold",
      price: 114.99,
      image:
        "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000199592942_1__pl.jpg",
    },
  ]);
  const [inCartItems, setInCartItems] = useState(products);

  // Clears the cart by emptying the items array
  const clearCart = () => {
    setInCartItems([]);
  };

  // Mapping through the items' prices in the cart and setting it to a variable
  let pricesArray = inCartItems.map((items) => {
    return items.price;
  });
  // Sum of the cart items before there's any updates on their quantity
  let initialTotal = pricesArray.reduce((a, b) => {
    return a + b;
  }, 0);
  // cartTotal state which takes an initial value of the initial cart items' prices
  const [cartTotal, setCartTotal] = useState(initialTotal);

  // Updating the quantity
  let updateQuantity = () => {
    pricesArray = [];
    for (let i = 0; i < inCartItems.length; i++) {
      let qtyInput = document.querySelectorAll("#quantity")[i];
      let itemPrice = document.querySelectorAll("#price")[i];
      let qtyMult = qtyInput.value * itemPrice.firstChild.wholeText;
      pricesArray.push(qtyMult);
    }
    setCartTotal(
      pricesArray.reduce((a, b) => {
        return a + b;
      }, 0)
    );
  };

  let handleChange = (event) => {};

  // Removing item from the cart
  let removeFromCart = (productToRemove) => {
    setInCartItems(inCartItems.filter((item) => item !== productToRemove));
  };

  props.setCheckoutTotal(cartTotal.toFixed(2));

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
                            key={item.id}
                          />
                        </div>
                        <div className="col-xs-2">
                          <span
                            onClick={(e) => {
                              removeFromCart(item);
                            }}
                            className="btn btn-link btn-xs glyphicon glyphicon-trash"
                          >
                            {" "}
                          </span>
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
                      <h6 className="text-right">Added or removed items?</h6>
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
                        : "Total: $" + cartTotal.toFixed(2)}
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
