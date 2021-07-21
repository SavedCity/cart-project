import { Link } from "react-router-dom";

export default function Checkout(props) {
  // function paymentConfirmed() {
  //   alert(
  //     "Thank you for your purchase! $" +
  //       props.checkoutTotal +
  //       " will be charged to your account."
  //   );
  // }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Payment Details</h3>
                <div className="checkbox pull-right">
                  <label>
                    <input type="checkbox" />
                    Remember
                  </label>
                </div>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        placeholder="Valid Card Number"
                        required
                        autoFocus
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-lock"></span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-7 col-md-7">
                      <div className="form-group">
                        <label htmlFor="expityMonth">EXPIRY DATE</label>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityMonth"
                            placeholder="MM"
                            required
                          />
                        </div>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityYear"
                            placeholder="YY"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-5 col-md-5 pull-right">
                      <div className="form-group">
                        <label htmlFor="cvCode">CV CODE</label>
                        <input
                          type="password"
                          className="form-control"
                          id="cvCode"
                          placeholder="CV"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active">
                      <Link href="/checkout">
                        <span className="badge pull-right">
                          <span className="glyphicon glyphicon-usd"></span>
                          {props.checkoutTotal}
                        </span>{" "}
                        Final Payment
                      </Link>
                    </li>
                  </ul>
                  <br />

                  <button
                    type="submit"
                    className="btn btn-success btn-lg btn-block"
                  >
                    Pay
                  </button>
                </form>
              </div>
            </div>

            <Link to="/" className="btn btn-warning btn-md" role="button">
              Back to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
