import {
  Modal,
  Form,
  Button,
  Input,
  Select,
  Checkbox,
  notification,
} from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/productAction";

const AddProduct = (props) => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("values", values);
    dispatch(addProduct(values));
    props.close();
  };

  return (
    <Modal
      title="Add Product"
      open={props.show}
      footer={null}
      onCancel={props.close}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Form
          size="large"
          initialValues={{
            name: "",
            price: 0,
          }}
          name="basic"
          autoComplete="off"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            style={{ width: "100%" }}
            name="name"
            // required
            rules={[
              {
                required: true,
                message: "Please input product name!",
              },
            ]}
          >
            <Input placeholder="Product name" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="price"
            // required
            rules={[
              {
                required: true,
                message: "Please input product price!",
              },
            ]}
          >
            <Input
              type="number"
              placeholder="Product price"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="btn-gold"
              size="large"
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddProduct;
