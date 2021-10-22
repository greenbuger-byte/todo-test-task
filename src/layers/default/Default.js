import PropTypes from "prop-types";
import { Fragment } from "react";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

import { DefaultContainer, DefaultWrapper } from "./Default.styles";

const Default = ({children, active, title}) => {
    document.title = title;
    return (
        <Fragment>
            <Header />
            <DefaultContainer>
                <Sidebar active={active}/>
                <DefaultWrapper>
                    {children}
                </DefaultWrapper>
            </DefaultContainer>
            <Footer />
        </Fragment>

    );
};
Default.propTypes = {
    /* контент */
    children: PropTypes.node,
    /* title в head*/
    title: PropTypes.string,
    /* активная страница */
    active: PropTypes.string,
}

export default Default;