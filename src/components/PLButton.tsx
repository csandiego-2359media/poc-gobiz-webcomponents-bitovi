import React from "react";
import { Button } from "@molb/gobiz-styleguide";
import { ButtonSize, ButtonTheme, ButtonType, childAlign } from "@molb/gobiz-styleguide/src/components/button/Button";

interface PLButtonProps {
    className?: string,
    loading?: boolean,
    label?: any,
    disabled?: boolean,
    size?: ButtonSize
    theme?: ButtonTheme
    type?: ButtonType,
    childrenAlign?: childAlign,
    dataTestId?: string,
    href?: string,
}

const PLButton: React.FC<PLButtonProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.href) {
            window.location.href = props.href
        }
    }
    return <Button {...{...props, onClick: onClick}} />;
};

export default PLButton;