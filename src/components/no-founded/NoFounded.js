import {BiCut} from "react-icons/bi";

import { NoFoundedWrapper } from "./NoFounded.styles";

const NoFounded = (props) => {
    const { message } = props;
    return (
        <NoFoundedWrapper>
            <BiCut /> {message}
        </NoFoundedWrapper>
    );
};

export default NoFounded;