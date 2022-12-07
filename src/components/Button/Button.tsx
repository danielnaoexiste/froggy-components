import type { FC } from "react";

import { StyledButton, ButtonProps } from "@styles/Button";

export const Button: FC<ButtonProps> = ({
  label,
  prefix,
  variant = "contained",
  ...props
}) => (
  <StyledButton data-testid="button" variant={variant} {...props}>
    <>
      {!!prefix && prefix}
      {label}
    </>
  </StyledButton>
);
