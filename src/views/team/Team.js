import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { useTranslation } from "react-i18next";

import Default from "../../layers/default/Default";

import ProfileItem from "../../components/profile-item";
import FlashMessage from "../../components/flash-message";

import { mapCommonStates } from "../../utils/store";
import { pages } from "../../utils/routes";

import {
    ProfileContent,
    ProfileHeader,
    ProfileInfo,
    ProfileLoginName,
    ProfileNavItem,
    ProfileNavTab,
} from "./Team.styles";

const Team = (props) => {
    const FILTERS = {
        team: 'team',
        all: 'all',
    }
    const { t } = useTranslation();
    const tabMenu = [
        { name: t('profile.my_team'), filter: FILTERS.team },
        { name: t('profile.add_team'), filter: FILTERS.all }
    ];
    const { authState, fetchProfiles, addOrRemoveTeam } = props;
    const { profile, profiles } = authState;
    const [filter, setFilter] = useState(FILTERS.team);
    const name = profile.name || profile.login;
    const [currentProfiles, setCurrentProfiles] = useState(profiles);
    const [disabledAction, setDisabledAction] = useState(false);

    const editTeamHandler = (id, type) => {
        setDisabledAction(true);
        type === 'add' && setCurrentProfiles(currentProfiles
            .filter( curProfile => curProfile._id !== id));
        const candidate = profiles.find( profile => profile._id === id);
        type === 'remove' && setCurrentProfiles([ ...currentProfiles, candidate]);
        addOrRemoveTeam(id).finally(setDisabledAction(false));
    };

    useEffect(() => {
        setCurrentProfiles(profiles
            .filter(team => !profile.lead.find(lead => lead._id === team._id )))
    }, [profiles, profile.lead])

    useEffect(() => {
        fetchProfiles();
    }, [fetchProfiles]);

    const renderTabMenu = tabMenu
        .map((menu, index, id) =>  (
            <ProfileNavItem key={index}
                active={menu.filter === filter}
                onClick={() => setFilter(menu.filter)}
            >
            {menu.name}
            </ProfileNavItem>
            )
        );

    return (
        <Default active={pages.PROFILE} title={t('profile.profile')}>
            <ProfileHeader>
                <ProfileInfo>
                    <Avatar name={name} size={80} round/>
                    <ProfileLoginName>
                        {name}
                    </ProfileLoginName>
                </ProfileInfo>
            </ProfileHeader>
            <ProfileContent>
                <ProfileNavTab>
                    {renderTabMenu}
                </ProfileNavTab>
                { filter === FILTERS.team
                && (profile.lead?.map( user =>
                        <ProfileItem
                            disabled={disabledAction}
                            key={user._id}
                            type="team"
                            editTeam={(id) => editTeamHandler(id, 'remove')}
                            profile={user}
                        /> )
                || <FlashMessage variant="default" message={t('profile.empty_team')} />)
                }
                { filter === FILTERS.all
                && (currentProfiles?.map( user =>
                        <ProfileItem
                            isDisabled={disabledAction}
                            key={user._id}
                            type="all"
                            editTeam={(id) => editTeamHandler(id, 'add')}
                            profile={user}
                        /> )
                || <FlashMessage variant="default" message={t('profile.empty_users')} />)
                }
            </ProfileContent>
        </Default>
    );
};

Team.propTypes = {
    /* загрузка профилей */
    fetchProfiles: PropTypes.func,
    /* выгрузка данных из хранилища */
    authState: PropTypes.shape({
    /* профиль */
    profile: PropTypes.object,
    /* профили пользователей */
    profiles: PropTypes.array,
    }),
    /*  тоглер добавления и удаления в команду */
    addOrRemoveTeam: PropTypes.func,
}

export default mapCommonStates(Team);