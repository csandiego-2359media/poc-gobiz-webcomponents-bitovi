import React from "react";
import { Row } from "@molb/gobiz-styleguide";

interface PLRowProps {
    className: string | undefined;
    gutter: number | undefine;
    lg: number | undefined;
    md: number | undefined;
    sm: number | undefined;
    xl: number | undefined;
    xs: number | undefined;
};

const PLRow: React.FC<PLRowProps> = (props) => {
    return <Row {...props}>
        <slot />
    </Row>;
}

export default PLRow;