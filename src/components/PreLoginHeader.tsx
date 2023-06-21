import React from "react";
import { styled } from "styled-components";
import { Menu, Button, IconButton, Icon, Header } from "@molb/gobiz-styleguide";
import { MenuOption } from "@molb/gobiz-styleguide/src/components/menu/components/MenuHeader";

const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-left: 24px;
  }
`;

interface PreLoginHeaderProps {
    logoUrl: string | undefined;
    optionList: () => MenuOption[] | undefined;
    loginUrl: string | undefined;
}

const PreLoginHeader: React.FC<PreLoginHeaderProps> = ({logoUrl, optionList, loginUrl}) => {
    const onOptionClick = (key: string) => { window.location.href = key };
    const onLoginClick = () => { 
        if (loginUrl) {
            window.location.href = loginUrl
         }
    };
    const menu = <HeaderContent>
        <Menu optionList={optionList ? optionList() : []} selectedKeys={[]} onClick={onOptionClick} mode="horizontal" />
        <Button label="Login" size="medium" onClick={onLoginClick} />
        <IconButton>
            <Icon.Search />
        </IconButton>
    </HeaderContent>;
    return <Header logoUrl={logoUrl} childComponent={menu} />;
}

export default PreLoginHeader;