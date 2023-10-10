import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";

import { CChart } from "@coreui/react-chartjs";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const drinks = products?.filter((item) => item.product_category === "drinks");
  const deserts = products?.filter(
    (item) => item.product_category === "deserts"
  );
  const veg = products?.filter((item) => item.product_category === "veg");
  const nonveg = products?.filter((item) => item.product_category === "nonveg");
  const soups = products?.filter((item) => item.product_category === "soups");
  const noodles = products?.filter(
    (item) => item.product_category === "noodels"
  );
  const momo = products?.filter((item) => item.product_category === "momo");
  const burger = products?.filter((item) => item.product_category === "burger");
  const khanaset = products?.filter((item) => item.product_category === "khanaset");
  const sekuwa = products?.filter((item) => item.product_category === "sekuwa");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Drinks",
                  "Deserts",
                  "Momo",
                  "Noodles",
                  "Soup",
                  "Non-Veg",
                  "Veg",
                  "Burger",
                  "Khana-Set",
                  "Sekuwa",
                ],
                datasets: [
                  {
                    label: "Category wise Count",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      deserts?.length,
                      momo?.length,
                      soups?.length,
                      noodles?.length,
                      nonveg?.length,
                      veg?.length,
                      burger?.length,
                      khanaset?.length,
                      sekuwa?.length,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  "Orders",
                  "Delivered",
                  "Cancelled",
                  "Paid",
                  "Not Paid",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#FFD100",
                      "#FF00FB",
                    ],
                    data: [40, 20, 80, 34, 54],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
