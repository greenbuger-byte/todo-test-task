import { useTranslation } from "react-i18next";

import addLogo from '../../utils/files/coloboration.svg';

import {AddCard, AddContainer, AddLogo, AddText, AddTitle} from "./AddBlock.styles";

const AddBlock = () => {
    const { t } = useTranslation();
    return (
        <AddContainer>
            <AddLogo  src={addLogo} alt={'coloboration'}/>
            <AddCard>
                <AddTitle>{t('add.title_one')}<br/> {t('add.title_two')}</AddTitle>
                <AddText>
                    {t('add.description')}
                </AddText>
            </AddCard>
        </AddContainer>
    );
};

export default AddBlock;