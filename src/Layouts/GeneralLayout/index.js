import React, { memo } from "react";

import { Layout } from "antd";
const { Content } = Layout;
const Index = ({ children }) => {
  return (
    <>
      <Layout className="layout_general">
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default memo(Index);
