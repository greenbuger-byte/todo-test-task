import { useHistory } from "react-router-dom";
import { BiHome, BiBookAlt, BiUser } from 'react-icons/bi';
import { useTranslation } from "react-i18next";

import { pages } from "../../utils/routes";

import { mapCommonStates } from "../../utils/store";

import {
    SidebarLi,
    SidebarUl,
    SidebarWrapper,
    SidebarLiIcon
} from "./Sidebar.styles";

const Sidebar = () => {
    const { t } = useTranslation();
    const menu = {
        home: {name: t('sidebar.home'), icon: <BiHome />, link: pages.HOME},
        tasks: {name: t('sidebar.tasks'),  icon: <BiBookAlt />, link: pages.TASKS},
        profile: {name: t('sidebar.team'), icon: <BiUser />, link: pages.PROFILE},
    };

    const history = useHistory();

    const renderMenu = () => (
        Object.entries(menu).map(([name, item]) =>
            <SidebarLi
                key={name}
                active={history.location.pathname === item.link}
                onClick={() => history.push(item.link)}
            >
            <SidebarLiIcon>{item.icon}</SidebarLiIcon> {item.name}
        </SidebarLi>
    ));
    return (
        <SidebarWrapper>
            <SidebarUl>
                {renderMenu()}
            </SidebarUl>
        </SidebarWrapper>
    );
};


export default mapCommonStates(Sidebar);