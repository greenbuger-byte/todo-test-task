import {BiCategoryAlt, BiPlus, BiCategory} from "react-icons/bi";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import STATUSES from "../../utils/statuses";

import { StyledButton, TaskPanelBlock, TaskPanelWrapper } from "./TaskPanel.styles";

const TaskPanel = (props) => {
    const { withStatus, setView, setTimeFilter, currentFilter, currentView } = props;
    const { t } = useTranslation();
    const VIEWS_BUTTONS = [
        { icon: <BiCategoryAlt />, tooltip: t('task_panel.grid_view'), view: "grid"},
        { icon: <BiCategory />, tooltip: t('task_panel.column_view'), view: "column"},
    ];
    const TIME_MENU = [
        { title: t('task_panel.all_task'), value: "all" },
        { title: t('task_panel.day_task'), value: "day" },
        { title: t('task_panel.week_task'), value: "week" },
        { title: t('task_panel.more_task'), value: "more" },

    ];

    const renderTimeMenu = TIME_MENU.map(({title, value}, index) => (
        <StyledButton
            key={index}
            onClick={() => setTimeFilter(value)}
            variant={currentFilter === value ? "primary" : "light"}
            label={title}
        />
    ));

    const changeView  = (view) => {
        localStorage.setItem("type", view);
        setView?.(view)
    }

    const renderViewButtons = ( VIEWS_BUTTONS
            .map(({tooltip, icon, view}, index) => (
                <StyledButton
                    key={index}
                    place="bottom"
                    data-tip={tooltip}
                    onClick={() => changeView(view)}
                    variant={currentView === view ? "primary" : "light" }
                    isNoLabel
                >
                    {icon}
                </StyledButton>
        ))
    );

    return (
        <TaskPanelWrapper>
            <TaskPanelBlock>
                <StyledButton
                    variant="dark"
                    data-tip={t('task_panel.add_task')}
                    onClick={() => withStatus(STATUSES[0].value)}
                    isNoLabel
                >
                    <BiPlus />
                </StyledButton>
                { renderViewButtons }
            </TaskPanelBlock>
            <TaskPanelBlock>
                {renderTimeMenu}
            </TaskPanelBlock>
            <ReactTooltip />
        </TaskPanelWrapper>
    );
};

TaskPanel.propTypes = {
    /* открыть окно добавления задачи */
    withStatus: PropTypes.func,
    /* установить вид отображения */
    setView: PropTypes.func,
    /* фильтр для времени */
    setTimeFilter: PropTypes.func,
    /* активный стиль отображения */
    currentView: PropTypes.string,
    /* автивный фильтр отображения времени */
    currentFilter: PropTypes.string,
}

export default TaskPanel;