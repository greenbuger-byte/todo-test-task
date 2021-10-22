import { Fragment, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form'
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Input from "../../components/input";
import Button from "../../components/button";
import Header from "../../components/header";
import FlashMessage from "../../components/flash-message";
import { ModalButton } from "../../components/header/Header.styles";
import InfoBanner from "../../components/info-banner";

import { mapCommonStates } from "../../utils/store";
import {pages} from "../../utils/routes";
import { passwordValidateRules } from '../../utils/passwordValidateRules';

import {
    LoginContent,
    LoginForm,
    LoginTitle,
    LoginWrapper
} from "./Login.styles";
import Footer from "../../components/footer";

const Login = (props) => {
    const { login, authState } = props;
    const { authError } = authState;
    const [onLoad, setOnLoad] = useState(false);
    const { t } = useTranslation();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const formSubmitHandler = (data) => {
        setOnLoad(true);
        login(data).then( res => {
           res?.token && history.replace(pages.TASKS);
        });
        setOnLoad(false);
    }

    return (
        <Fragment>
            <Header />
            <LoginContent>
                <LoginWrapper>
                    <LoginTitle>{t('login.title')}</LoginTitle>
                    <LoginForm onSubmit={handleSubmit(formSubmitHandler)}>
                        <Input
                            type="text"
                            name="login"
                            placeholder={t('form.login')}
                            errors={errors.login?.type === 'required' ? t('form.empty_login') : errors.login?.message}
                            {...register("login", { required: true })}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder={t('form.password')}
                            errors={errors.password?.type === 'required' ? t('form.empty_password') : errors.password?.message}
                            {...register('password', passwordValidateRules(t))}
                        />

                        <ModalButton>
                            { authError && <FlashMessage
                                variant="alert"
                                message={authError}
                                full />
                            }
                            <Button
                                disabled={onLoad}
                                type="submit"
                                variant="primary"
                                label={t('login.title')}
                                full
                                onClick={handleSubmit(formSubmitHandler)}
                            />
                            <>{t('login.or')}</>
                            <Button
                                onClick={() => history.push(pages.REGISTRATION)}
                                variant="light" label={t('buttons.registration')}
                                full
                            />
                        </ModalButton>
                    </LoginForm>
                </LoginWrapper>
               <InfoBanner />
            </LoginContent>
            <Footer />
        </Fragment>

    );
};

Login.propTypes = {
    /* запрос к серверу */
    login: PropTypes.func.isRequired,
    /* список данных из redux */
    authState: PropTypes.object
}

export default mapCommonStates(Login);