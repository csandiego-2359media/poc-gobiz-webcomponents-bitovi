import React from "react";
import { Table } from "@molb/gobiz-styleguide";

interface PLTableProps {
    dataTestId: string | undefined;
    headers: () => string[] | undefined;
    data: () => any[][] | undefined;
    showActionColumn: boolean | undefined;
    showToggleColumn: boolean | undefined;
    showHeader: boolean | undefined;
    onEditAction: (data: any, index: number) => void | undefined;
    onDeleteAction: (data: any, index: number) => void | undefined;
    renderEditActionProps: (index: number) => object | undefined;
    renderDeleteActionProps: (index: number) => object | undefined;
    toggleActionProps: any[] | undefined;
    toggleActionCallBack: (data: any) => boolean | undefined;
    usePagination: boolean | undefined;
    pageSize: number | undefined;
    enableResponsiveMobileView: boolean | undefined;
    loadedWindow: number | undefined;
    lastItemAlignRight: boolean | undefined;
    loadMoreWindowIncrement: number | undefined;
    versionSettings: { label: string, onClick: (index: number) => boolean }[] | undefined,
}

const PLTable: React.FC<PLTableProps> = (props) => {
    console.log(props)
    return <Table {...{ ...props, headers: props.headers?.(), data: props.data?.() }} />
}

export default PLTable;