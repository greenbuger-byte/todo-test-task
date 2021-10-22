import {FooterBlock, FooterContainer, FooterLogo, FooterWrapper} from "./Footer.styles";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterBlock>
                    <FooterLogo>{t('site_name')}</FooterLogo>
                   <> {t('add.description')}</>
                </FooterBlock>
            </FooterContainer>

        </FooterWrapper>
    );
};

export default Footer;