import PropTypes from "prop-types";
import { BiPlus, BiTrash } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

import {
    ProfileItemWrapper,
    ProfileItemName,
    StyledAvatar,
    ProfileContentWrapper,
    ProfileButton
} from "./ProfileItem.styles";

const ProfileItem = ({ profile, type, editTeam, actionHandler, currentActive, isDisabled, noButton }) =>{

    const actionProfileHandler = () => {
        actionHandler?.(profile._id);
    }

    return (
        <ProfileItemWrapper active={currentActive === profile._id} data-tip={profile.name || profile.login}>
            <StyledAvatar
                onClick={actionProfileHandler}
                name={profile.name || profile.login}
                size={60}
                round
            />
            <ProfileContentWrapper>
                <ProfileItemName
                    onClick={actionProfileHandler}
                >
                    {profile.name  || profile.login}
                </ProfileItemName>
                {!noButton && <ProfileButton
                    disabled={isDisabled}
                    onClick={() => editTeam?.(profile._id)}
                    variant="light"
                    isNoLabel
                    small
                >
                    { type === "all" && <BiPlus /> }
                    { type === "team" && <BiTrash /> }
                </ProfileButton>}
            </ProfileContentWrapper>
            <ReactTooltip />
        </ProfileItemWrapper>
    )
};

ProfileItem.propTypes = {
    /* тип списка */
    type: PropTypes.oneOf(["all", "team"]),
    /* профиль */
    user: PropTypes.object,
    /* handler удаление и добавление в команду */
    editTeam: PropTypes.func,
    /* handler для управления сликом по профилю */
    actionHandler: PropTypes.func,
    /* активный пользователь */
    currentActive: PropTypes.string,
    /* блокировка кнопки добавления и удаления */
    isDisabled: PropTypes.bool,
    /*  */
    noButton: PropTypes.bool
}

export default ProfileItem;