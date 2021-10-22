import React, {Fragment, useState} from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import InfoBanner from "../../components/info-banner";
import FlashMessage from "../../components/flash-message";
import { ModalButton } from "../../components/header/Header.styles";

import { passwordValidateRules } from '../../utils/passwordValidateRules';
import { mapCommonStates } from "../../utils/store";
import { pages } from "../../utils/routes";

import {
    RegistrationContent,
    RegistrationWrapper,
    RegistrationTitle,
    RegistrationForm
} from "./Registrations.styles";

const Registration = (props) => {
    const { registration, authState } = props;
    const { authError } = authState;
    const [onLoad, setOnLoad] = useState(false);
    const history = useHistory();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const formSubmitHandler = async (data) => {
        setOnLoad(true);
        if(data.password !== data.password2) {
            setError("password2", {
                type: "manual",
                massage: t('form.unequals_passwords')
            });
            setOnLoad(false);
            return;
        }
        delete data.password2;
        await registration(data).then( res => {
            res?.token && history.replace(pages.TASKS);
        });
        setOnLoad(false);
    }

    const errorMassages = (field) => {
        switch (field) {
            case 'password2':
                if( errors.password2?.type === 'required' ) return t('form.empty_password');
                if(errors.password2?.type === 'manual') return t('form.unequals_passwords');
                return errors.password2?.message;
            case 'name':
                return errors.name?.type === 'required' ? t('form.empty_name') : errors.name?.message;
            case 'login':
                return errors.login?.type === 'required' ? t('form.empty_login') : errors.login?.message;
            case 'password':
                return errors.password?.type === 'required' ? t('form.empty_password') : errors.password?.message
            default: return;
        }
    }


    return (
        <Fragment>
            <Header />
            <RegistrationContent>
                <RegistrationWrapper>
                    <RegistrationTitle>{ t('registration.title') }</RegistrationTitle>
                    <RegistrationForm onSubmit={handleSubmit(formSubmitHandler)}>
                        <Input
                            type={"text"}
                            name="name"
                            placeholder={t('form.name')}
                            errors={errorMassages('name')}
                            {...register("name", { required: true })}
                        />
                        <Input
                            type={"text"}
                            name="login"
                            placeholder={t('form.login')}
                            errors={errorMassages('login')}
                            {...register("login", { required: true })}
                        />
                        <Input
                            type="password"
                            name="password"
                            errors={errorMassages('password')}
                            placeholder={t('form.password')}
                            {...register('password', passwordValidateRules(t))}
                        />
                        <Input
                            type="password"
                            name="password2"
                            placeholder={t('form.password2')}
                            errors={errorMassages('password2')}
                            {...register('password2', passwordValidateRules(t))}
                        />
                        <ModalButton>
                            {authError && <FlashMessage
                                variant="alert"
                                message={authError}
                                full
                            />}
                            <Button
                                disabled={onLoad}
                                type="submit"
                                variant="primary"
                                label={t('registration.title')}
                                full
                            />
                            <>{t('login.or')}</>
                            <Button
                                onClick={() => history.push(pages.LOGIN)}
                                variant="light" label={t('buttons.login')}
                                full
                            />
                        </ModalButton>
                    </RegistrationForm>
                </RegistrationWrapper>
                <InfoBanner />
            </RegistrationContent>
            <Footer />
        </Fragment>
    );
};

export default mapCommonStates(Registration);