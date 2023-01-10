import React from "react";
import Styles from "../../Styles/Componet-Styles/Rates.module.scss";

import Table from "react-bootstrap/Table";

const Rates = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}></p>
        <p className={Styles.Section_Title}>Mono Hull</p>
      </div>

      <Table className={Styles.Table} bordered variant="dark">
        <thead>
          <tr>
            <th>Days</th>
            <th>Cost</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-30</td>
            <td>US $1.25</td>
            <td>Per Feet</td>
          </tr>
          <tr>
            <td>30 & Over</td>
            <td>US$ .90</td>
            <td>Per Feet</td>
          </tr>
        </tbody>
      </Table>

      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}></p>
        <p className={Styles.Section_Title}>Catamaran</p>
      </div>

      <Table className={Styles.Table} bordered variant="dark">
        <thead>
          <tr>
            <th>Days</th>
            <th>Cost</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-30</td>
            <td>US $2.50</td>
            <td>Per Feet</td>
          </tr>
          <tr>
            <td>30 & Over</td>
            <td>US$ 1.80</td>
            <td>Per Feet</td>
          </tr>
        </tbody>
      </Table>

      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}></p>
        <p className={Styles.Section_Title}>Anchorage</p>
      </div>

      <Table className={Styles.Table} bordered variant="dark">
        <thead>
          <tr>
            <th>Days</th>
            <th>Cost</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anchorage</td>
            <td> US$ 10.00</td>
            <td>Per Person / Day</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Rates;
