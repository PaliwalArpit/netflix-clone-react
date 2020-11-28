import React from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumboTron";

export default function JumboTron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  );
}

JumboTron.Container = function jumboTronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

JumboTron.Pane = function jumboTronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

JumboTron.Title = function jumboTronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

JumboTron.SubTitle = function jumboTronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

JumboTron.Image = function jumboTronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
