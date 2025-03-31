import React from "react";
import {
  PATTERN_CUSTOMER_EMAIL,
  PATTERN_CUSTOMER_NAME,
} from "../const/patterns";
import "../styles/customer_form.css";
export const Customer_form = () => {
  return (
    <form className="customer-form">
      <div className="group-field form-floating">
        <input
          className="form-field form-control"
          pattern={PATTERN_CUSTOMER_NAME}
          type="text"
          placeholder="Add your name"
          name="CUSTOMER_NAME"
          id="CUSTOMER_NAME"
        />
        <label className="form-label" htmlFor="CUSTOMER_NAME">
          Name :
        </label>
      </div>
      <div className="group-field form-floating">
        <input
          className="form-field form-control"
          pattern={PATTERN_CUSTOMER_EMAIL}
          placeholder="Add your email"
          type="email"
          name="CUSTOMER_EMAIL"
          id="CUSTOMER_EMAIL"
        />
        <label className="form-label" htmlFor="CUSTOMER_EMAIL">
          Email :
        </label>
      </div>
      <div className="group-field form-floating">
        <textarea
          className="form-field form-control"
          name="CUSTOMER_MESSAGE"
          id="CUSTOMER_MESSAGE"
          required
        ></textarea>
        <label htmlFor="CUSTOMER_MESSAGE">Message :</label>
      </div>
      <button type="submit">SEND</button>
    </form>
  );
};
