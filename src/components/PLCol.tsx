import React from "react";
import { Col } from "@molb/gobiz-styleguide";

interface PLColProps {
    className: string | undefined;
    lg: number | undefined;
    md: number | undefined;
    sm: number | undefined;
    span: number | undefined;
    xl: number | undefined;
    xs: number | undefined;
};

const PLCol: React.FC<PLColProps> = (props) => {
    return <Col {...props}>
        <slot />
    </Col>;
};

export default PLCol;