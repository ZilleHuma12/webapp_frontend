import { Form, Input, Button, Image, notification } from "antd/es";
import React, { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import img from "../../images/undraw_access_account_re_8spm.svg";
import { register } from "../../redux/actions/authAction";
import moment from "moment";

const Index = () => {
  const dispatch = useDispatch();
  const [messageNew, setMessageNew] = useState();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const handleSubmit = (values) => {
    const date = moment().format("DD MMM YYYY");
    dispatch(register({ ...values, date }));
  };
  useEffect(() => {
    if (isError) {
      notification.open({
        type: "error",
        message: message,
        placement: "top",
      });
    }
    if (isSuccess) {
      setMessageNew(message);
    }
  }, [isError, isSuccess]);

  if (isLoading) {
    return <Loader message="Please Wait..." />;
  }
  return (
    <Container fluid className="vh-100 bg-white p-5">
      <Row className="h-100 bg-white rounded shadow">
        <Col className="d-flex align-items-center justify-content-center rounded signin-img">
          <Image src={img} preview={false} width={400} height={400} />
        </Col>
        <Col className="d-flex align-items-center flex-column justify-content-center gap-3">
          <Row>
            <h1>SignUp Here</h1>
          </Row>
          <Row className="w-100 d-flex align-items-center justify-content-center">
            {messageNew && (
              <p className="text-success fw-bold text-center">
                {messageNew} <a href="/signin">Here</a>
              </p>
            )}
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              layout="vertical"
              className="w-50"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Sign up
                </Button>
              </Form.Item>
            </Form>
          </Row>
          <div className="d-flex gap-1">
            <span>Already have an account?</span>
            <Link to={"/signin"}>Sign in</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(Index);
