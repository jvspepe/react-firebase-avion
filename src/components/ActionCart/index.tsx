import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { ShoppingCart } from "@phosphor-icons/react";
import IconButton from "../IconButton";
import CartMenu from "../CartMenu";

const ActionCart = () => {
  const { colors } = useTheme();

  return (
    <>
      <IconButton
        component={Link}
        to="/carrinho"
        display={["block", null, "none"]}
      >
        <ShoppingCart color={colors.text.primary} size={24} />
      </IconButton>
      <CartMenu />
    </>
  );
};

export default ActionCart;
