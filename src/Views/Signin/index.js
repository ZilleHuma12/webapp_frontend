import { Form, Input, Button, Image, notification } from "antd/es";
import React, { memo, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import img from "../../images/undraw_access_account_re_8spm.svg";
import { login } from "../../redux/actions/authAction";
import { reset } from "../../redux/reducers/authSlice";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (isError) {
      notification.open({
        message: message,
        type: "error",
        placement: "top",
        style: {
          zIndex: "999",
        },
      });
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  if (isLoading) {
    return <Loader message={"Loggin in..."} />;
  }
  return (
    <Container fluid className="vh-100 bg-white p-5">
      <Row className="h-100 bg-light rounded">
        <Col className="d-flex align-items-center justify-content-center rounded signin-img">
          <Image src={img} preview={false} width={400} height={400} />
        </Col>
        <Col className="d-flex align-items-center flex-column justify-content-center gap-3">
          <Row>
            <h1>SignIn Here</h1>
          </Row>
          <Row className="w-100 d-flex align-items-center justify-content-center">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              layout="vertical"
              className="w-50"
            >
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
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </Row>
          <div className="d-flex gap-1">
            <span>Not a member?</span>
            <Link to={"/signup"}>Sign up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(Index);
