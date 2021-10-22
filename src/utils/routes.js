export const pages = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    TASKS: '/tasks',
    HOME: '/',
    NOT: '*',
    PROFILE: '/team',
};

export const requests = {
    TASKS: '/task',
    TASK_CREATE: '/task/create',
    TASK_UPDATE: '/task/update',
    TASK_REMOVE: '/task/remove',
    LOGIN: '/user/login',
    USERS: '/user',
    ME: '/user/me',
    REGISTER: '/user/registration',
    TEAM: '/user/team',
}

export const methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
}

export const filters = {
    day: "filter=day",
    week: "filter=week",
    more: "filter=more",
}