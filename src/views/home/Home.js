import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import AddBlock from "../../components/add-block";
import Default from "../../layers/default/Default";

import { mapCommonStates } from "../../utils/store";

import {
    HomeLoginWrapper,
    HomeTitle
} from "./Home.styles";
import {pages} from "../../utils/routes";

const Home = (props) => {
    const { authState } = props;
    const { profile } = authState;
    const { t } = useTranslation();
    return (
        <Default active="home" title={t('home.title')}>
            <AddBlock />
            <HomeTitle>{t('home.title')}</HomeTitle>
            {!profile ? <HomeLoginWrapper>
                <img src="https://a.trellocdn.com/prgb/dist/images/banners/happy-team.376d79d1f27cf97ba4e5.svg"  width={400} alt={""}/>
                 <div>{t('home.need_login')}
                    <NavLink to={pages.LOGIN}>{t('home.login')}</NavLink>
                     {t('home.or')} <NavLink to={pages.REGISTRATION}>{t('home.register')}</NavLink>
                </div>
            </HomeLoginWrapper>:
                <HomeLoginWrapper>
                  <p>  <NavLink to={pages.TASKS}>Перейти в список задач</NavLink> </p>
                  <p>  <NavLink to={pages.PROFILE}>Перейти к команде</NavLink> </p>
                </HomeLoginWrapper>
            }
            </Default>
    );
};

export default mapCommonStates(Home);