import {Fragment, useState} from 'react';
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Avatar from 'react-avatar';
import {BiHome, BiLogOutCircle, BiLogInCircle, BiMenu} from 'react-icons/bi';

import { white } from '../../theme/colors';

import Button from "../button";
import Icon from "../icon";

import { pages } from "../../utils/routes";
import { mapCommonStates } from "../../utils/store";

import {
    HeaderAccount,
    HeaderLeftNavigation,
    HeaderMenuPopup,
    HeaderStyles,
    HeaderTitle,
    HeaderTitleName,
    HeaderUser,
    HeaderWrapper,
    UserLink,
    UserLogin
} from "./Header.styles";
import Sidebar from "../sidebar/Sidebar";

const Header = (props) => {
    const { authState, logout } = props;
    const { profile } = authState;
    const [openMenu, setOpenMenu] = useState(false);
    const { t } = useTranslation();
    const history = useHistory();

    const navigationHandler = (path) => {
        history.push(path);
    }

    return (
        <HeaderStyles>
            <HeaderWrapper>
                <HeaderLeftNavigation>
                    <Button
                        onClick={() => setOpenMenu(true)}
                        variant="ghost"
                        isNoLabel
                    >
                        <BiMenu />
                    </Button>
                    <Button
                        onClick={() => navigationHandler(pages.HOME)}
                        variant="ghost"
                        isNoLabel
                    >
                        <BiHome/>
                    </Button>
                    <Button
                        onClick={() => navigationHandler(pages.TASKS)}
                        variant="ghost"
                        icon="taskIcon"
                    >
                        <Icon name="Board" size={20}/>  {t('home.menu.tasks')}
                    </Button>
                    { openMenu && <HeaderMenuPopup>
                        <Sidebar />
                    </HeaderMenuPopup> }
                </HeaderLeftNavigation>
                <HeaderTitle>
                    <Icon name="Board" color={white} size={25}/>
                    <HeaderTitleName>
                        {t('site_name')}
                    </HeaderTitleName>
                </HeaderTitle>
                <HeaderUser>
                    {profile ?
                        <Fragment>
                              <HeaderAccount>
                                      <Avatar name={profile.name || profile.login} size="28" round />
                                      <UserLogin>{profile.name || profile.login}</UserLogin>
                              </HeaderAccount>
                                <HeaderAccount>
                                    <UserLink onClick={logout}><BiLogOutCircle size={12}/></UserLink>
                                </HeaderAccount>
                        </Fragment>
                            :
                              <Fragment>
                                <Button
                                    variant="ghost"
                                    onClick={() => navigationHandler(pages.LOGIN)}
                                >
                                    <BiLogInCircle /> {t('buttons.login')}
                                </Button>
                                <Button
                                    label={t('buttons.registration')}
                                    variant="ghost"
                                    onClick={() => navigationHandler(pages.REGISTRATION)}
                                />
                              </Fragment>
                    }
                </HeaderUser>
            </HeaderWrapper>
        </HeaderStyles>
    );
};

Header.propTypes = {
    /* Выход из аккаунта */
    logout: PropTypes.func,
    /* Данные пользователя */
    authState: PropTypes.object,
}

export default mapCommonStates(Header);