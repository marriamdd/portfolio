"use client";
import React, { useContext } from "react";
import { Button, ConfigProvider, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";

const DownloadBtn: React.FC = () => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;
  return (
    <ConfigProvider
      button={{
        className: linearGradientButton,
      }}
    >
      <Space>
        <Button
          type="primary"
          size="large"
          iconPosition="end"
          icon={<DownloadOutlined />}
        >
          Download CV
        </Button>
      </Space>
    </ConfigProvider>
  );
};

export default DownloadBtn;
