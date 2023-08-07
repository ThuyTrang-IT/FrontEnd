import React from "react";
import "../CheckOut/Payment.scss";


const Payment = ({
  
  handleStageChange,
  customerInfo,
  paymentInfo,
  handlePaymentInfoChange,
  handleSubmit,
  
}) => {
  
  return (
    <div>
      <h2 className="form-group__label">Thông tin thanh toán</h2>
      {/* Phần Name */}
      <div className="layout__item 1/1 form-group">
        <div className="layout layout--flush">
          <div className="layout__item 3/10 form-group__label-container">
            <label className="form-group__label_Personal">Thông tin khách hàng</label>
          </div>
          <div className="layout__item 7/10 form-group__controls-container">
            <div className="form-group__controls">
              <p>Họ và tên: {customerInfo.fullName}</p>
              <p>Email: {customerInfo.email}</p>
              <p>Số điện thoại: {customerInfo.phoneNumber}</p>
              <p>Địa chỉ: {customerInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="layout__item 1/1  form-group">
        <div className="layout layout--flush">
          <div className="layout__item 3/10 form-group__label-container">
            <label
              className="form-group__label"
              htmlFor="form-card_details.field-cardholder"
            >
              <i className="fa fa-user fa-fw" aria-hidden="true"></i> Name
            </label>
          </div>
          <div className="layout__item 7/10 form-group__controls-container">
            <div className="form-group__controls--if-palm-cushion-right">
              <input
                className="form-control 1/1"
                tabIndex="1"
                id="form-card_details.field-cardholder"
                aria-labelledby="form-card_details.arialabel-cardholder"
                name="cardholder"
                type="text"
                value={paymentInfo.cardholder || ""}
                onChange={handlePaymentInfoChange}
                maxLength="255"
                autoComplete="off"
                title="Enter the cardholder's name exactly as it appears on the front of the card. Cannot be left empty."
                required
              />
              <p className="hidden" id="form-card_details.arialabel-cardholder">
                Enter the cardholder's name exactly as it appears on the front
                of the card. Cannot be left empty.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Phần Card */}
      <div className="layout__item 1/1 form-group">
        <div className="layout layout--flush">
          <div className="layout__item 3/10 form-group__label-container">
            <label
              className="form-group__label"
              htmlFor="form-card_details.field-pan"
            >
              <i className="fa fa-credit-card fa-fw" aria-hidden="true"></i>{" "}
              Card
            </label>
          </div>
          <div className="layout__item 7/10 form-group__controls-container">
            <div className="form-group__controls--if-palm-cushion-right">
              <input
                className="form-control 1/1"
                tabIndex="2"
                id="form-card_details.field-pan"
                aria-labelledby="form-card_details.arialabel-pan"
                name="cardnumber"
                type="tel"
                placeholder="0000 0000 0000 0000"
                pattern="(\s*[0-9]+)+\s*"
                autoComplete="off"
                title="Enter the digits exactly as they appear on the front of the card. Spaces are okay. Cannot be left empty."
                required
              />
              <p className="hidden" id="form-card_details.arialabel-pan">
                Enter the digits exactly as they appear on the front of the
                card. Spaces are okay. Cannot be left empty.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Phần Expiry */}
      <div className="layout__item 1/1 form-group">
        <div className="layout layout--flush">
          <div className="layout__item 3/10 form-group__label-container">
            <label
              className="form-group__label"
              htmlFor="form-card_details.field-expiry_mm"
            >
              <i className="fa fa-calendar fa-fw" aria-hidden="true"></i> Expiry
            </label>
          </div>
          <div className="layout__item 7/10 form-group__controls-container">
            <div className="form-group__controls">
              <div className="form-control form-control--wrap">
                <input
                  className="form-control form-control--flush 1/8 text-align--center"
                  tabIndex="3"
                  id="form-card_details.field-expiry_mm"
                  aria-labelledby="form-card_details.arialabel-expiry_mm"
                  name="expirymonth"
                  type="tel"
                  maxLength="2"
                  placeholder="MM"
                  pattern="^(0?[1-9]|1[012])$"
                  autoComplete="off"
                  title="Enter the two expiration month digits exactly as they appear on the front of the card. Cannot be left empty."
                  required
                />
                <p
                  className="hidden"
                  id="form-card_details.arialabel-expiry_mm"
                >
                  Enter the two expiration month digits exactly as they appear
                  on the front of the card. Cannot be left empty.
                </p>
                <span className="text-align--center" aria-hidden="true">
                  /
                </span>
                <input
                  className="form-control form-control--flush 1/8 text-align--center"
                  tabIndex="4"
                  id="form-card_details.field-expiry_yy"
                  aria-labelledby="form-card_details.arialabel-expiry_yy"
                  name="expiryyear"
                  type="tel"
                  maxLength="2"
                  placeholder="YY"
                  pattern="[0-9]{2}"
                  autoComplete="off"
                  title="Enter the two expiration year digits exactly as they appear on the front of the card. Cannot be left empty."
                  required
                />
                <p
                  className="hidden"
                  id="form-card_details.arialabel-expiry_yy"
                >
                  Enter the two expiration year digits exactly as they appear on
                  the front of the card. Cannot be left empty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Phần CVC */}
      <div className="layout__item 1/1  form-group">
        <div className="layout layout--flush">
          <div className="layout__item 3/10  form-group__label-container">
            <label
              className="form-group__label"
              htmlFor="form-card_details.field-cvc"
              title="Card Verification Code"
            >
              <i className="fa fa-shield fa-fw" aria-hidden="true"></i> CVC
            </label>
          </div>
          <div className="layout__item 7/10  form-group__controls-container">
            <div className="form-group__controls">
              <input
                className="form-control 1/5"
                tabIndex="5"
                id="form-card_details.field-cvc"
                aria-labelledby="form-card_details.arialabel-cvc"
                name="securitycode"
                type="tel"
                maxLength="4"
                placeholder="123"
                pattern="[0-9]{3,4}"
                autoComplete="off"
                title="Enter the security code digits exactly as they appear on the back of the card."
                required
              />
              <a
                className="form-group__help-trigger"
                href="#form-card_details.help-cvc"
                tabIndex="6"
                data-title="Card Verification Code (CVC)"
              >
                <i className="fa fa-question-circle" aria-hidden="true"></i>
              </a>
              <p className="hidden" id="form-card_details.arialabel-cvc">
                Enter the security code digits exactly as they appear on the
                back of the card.
              </p>
            </div>
            <div className="form-group__help" id="form-card_details.help-cvc">
              <div className="cvc-info">
                <img
                  className="cvc-info__image"
                  src="https://assets.sagepay.com/assets/MobileFirstDefault/images/2.0.51/components/cvc-info/tooltip-1x.png"
                  srcSet="https://assets.sagepay.com/assets/MobileFirstDefault/images/2.0.51/components/cvc-info/tooltip-2x.png 2x, https://assets.sagepay.com/assets/MobileFirstDefault/images/2.0.51/components/cvc-info/tooltip-3x.png 3x"
                  alt=""
                />
                <p className="cvc-info__text">
                  Card Verification Code, the three-digit number printed on the
                  back of your card. For American Express, it's the four-digit
                  number printed on the front.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Các phần còn lại */}
      {/* ... */}
      
      {/* Nút thanh toán */}
      <div className="layout__item 1/1">
        <div className="layout layout--rev">
          <div className="layout__item 1/1">
            <div className="text-align--right">
              <div className="cushion-vertical--large" aria-hidden="true"></div>
              <button
                className="btn btn--positive btn--large--if-palm btn--full--if-palm"
                name="action"
                value="proceed"
                type="submit"
                tabIndex="7"
                data-please-wait="Please wait..."
              >
                Confirm card details{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="layout__item 1/1">
            <div className="cushion-vertical" aria-hidden="true"></div>
            <a
        className="btn btn--hollow btn--small--if-palm"
        href="javascript:void(0);"
        onClick={() => window.history.back()}
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i> Cancel
      </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
