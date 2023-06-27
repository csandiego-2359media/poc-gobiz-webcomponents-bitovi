import React from "react";
import { Row } from "@molb/gobiz-styleguide";
import { GutterSize } from "@molb/gobiz-styleguide/src/components/grid/Row";

interface PLRowProps {
    className: string | undefined;
    gutter: GutterSize | undefined;
    lg: GutterSize | undefined;
    md: GutterSize | undefined;
    sm: GutterSize | undefined;
    xl: GutterSize | undefined;
    xs: GutterSize | undefined;
};

const PLRow: React.FC<PLRowProps> = (props) => {
    return <Row {...props}>
        <slot />
    </Row>;
}

export default PLRow;