import { Button } from "antd";

import { ButtonProps } from "antd";

type ToggleButtonProps = ButtonProps & {
  checked: boolean;
};

export const ToggleButton = ({ checked, children, ...props }: ToggleButtonProps) => {
  return (
    <Button {...props} className={checked ? 'checked' : undefined}>
      {children}
    </Button>
  );
};