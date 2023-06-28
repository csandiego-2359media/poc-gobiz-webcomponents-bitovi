import React from "react";
import { Tag } from "@molb/gobiz-styleguide";
import { TagColor } from "@molb/gobiz-styleguide/src/components/tag/Tag";

interface PLTagProps {
    className?: string;
    label: string;
    optional?: boolean;
    size?: string;
    tooltips?: string;
    color: TagColor;
}

const PLTag: React.FC<PLTagProps> = (props) => <Tag {...props} />;

export default PLTag;