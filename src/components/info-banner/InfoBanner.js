import {useTranslation} from "react-i18next";

import togetherLogo from "../../utils/files/together.svg";

import { InfoTitle, InfoLogo, InfoBannerWrapper } from "./InfoBanner.styles";

const InfoBanner = () => {
    const { t } = useTranslation();
    return (
        <InfoBannerWrapper>
            <InfoLogo src={togetherLogo} alt="team tasks" />
            <InfoTitle>{t('info_banner.description')}</InfoTitle>
        </InfoBannerWrapper>
    );
};

export default InfoBanner;