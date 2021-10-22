import React from 'react';
import Skeleton from "react-loading-skeleton";
import Masonry from 'react-masonry-css';

import TaskBoard from "../task-board";
import { mapCommonStates } from "../../utils/store";

const TaskGrid = (props) => {
    const { tasks, taskState } = props;
    const { isLoading } = taskState;
    const breakpointColumnsObj = {
        default: 4,
        1100: 2,
        700: 1,
        500: 1
    };
    const renderSkeletons =  Array(10).fill(<Skeleton count={2} height={100}/>)

    return (<Masonry breakpointCols={breakpointColumnsObj}
                       className="my-masonry-grid"
                       columnClassName="my-masonry-grid_column">
            { isLoading ? renderSkeletons.map((skeletal, index) => <div key={index}>{skeletal}</div>) : tasks?.map(task =>  <TaskBoard key={task._id} task={task} /> ) }
        </Masonry>
    );
};

export default mapCommonStates(TaskGrid);