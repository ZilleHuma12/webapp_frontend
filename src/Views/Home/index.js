import { Button, Table } from "antd/es";
import axios from "axios";
import i18next from "i18next";
import React, { memo, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../../Components/Modals/AddProduct";
import { getUser } from "../../redux/actions/authAction";
import { getProducts } from "../../redux/actions/productAction";

const Index = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [showProductModal, setShowProductModal] = useState(false);
  const addProduct = () => {
    setShowProductModal(true);
  };
  useEffect(() => {
    dispatch(getProducts());
    if (localStorage.getItem("user")) {
      dispatch(getUser(localStorage.getItem("user")));
    }
  }, [dispatch]);
  const translate = (name) => {
    let from = localStorage.getItem("lang") !== "en" ? "en" : "ar";
    let to = localStorage.getItem("lang") === "en" ? "en" : "ar";
    // let name;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${name}&langpair=${from}|${to}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if(data.responseData.translatedText){
          return data.responseData.translatedText;
        }else{
          return
        }
        // console.log("translated name", data.responseData.translatedText);
        // // name = data.responseData.translatedText;
        // // setName(data.responseData.translatedText);
        // return data.responseData.translatedText;
      });
  };
  const columns = [
    {
      title: i18next.t("no"),
      dataIndex: "no",
      key: "no",
    },
    {
      title: i18next.t("name"),
      render: (_, record) => {
        const translated =  translate(record.name);
        if(translated){
          return translated
        }else{
          return record.name
        }
      },
    },
    {
      title: i18next.t("price"),
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <>
      <Container>
        <Row className="h-100 d-flex flex-column justify-content-center align-items-center gap-5">
          <Row>
            <h1 className="text-center">{i18next.t("user_details")}</h1>
          </Row>
          <Row>
            <Row>
              <h4 className="text-center">{i18next.t("name")}</h4>
              <p className="text-center">{user?.name}</p>
            </Row>
            <Row>
              <h4 className="text-center">{i18next.t("email")}</h4>
              <p className="text-center">{user?.email}</p>
            </Row>
            <Row>
              <h4 className="text-center">
                {i18next.t("date_of_registration")}
              </h4>
              <p className="text-center">{user?.date_of_registration}</p>
            </Row>
          </Row>
        </Row>
        <Row className="h-100 d-flex flex-column justify-content-center align-items-center gap-5">
          <Row>
            <h1
              className={`${
                localStorage.getItem("lang") === "en"
                  ? "text-start"
                  : "text-end"
              }`}
            >
              {i18next.t("products")}
            </h1>
          </Row>
          <Row className="w-100 d-flex align-items-end justify-content-end">
            <Button
              type="primary"
              style={{ width: "fit-content" }}
              onClick={() => addProduct()}
            >
              {i18next.t("add_product")}
            </Button>
          </Row>
          <Row>
            <Table
              dataSource={products}
              columns={columns}
              loading={isLoading}
            />
          </Row>
        </Row>
        {showProductModal && (
          <AddProduct
            show={showProductModal}
            close={() => {
              setShowProductModal(false);
            }}
          />
        )}
      </Container>
    </>
  );
};

export default memo(Index);
