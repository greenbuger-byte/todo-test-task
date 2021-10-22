# Тестовое задание Приложение TODO list CLIENT

## КЛИЕНТ
[Ссылка на клиент (heroku)](https://whispering-plains-24139.herokuapp.com/).

[Ссылка github](https://github.com/greenbuger-byte/todo-test-task).
#### React.js
- Задачи доступны только авторизованным пользователям
- Редактировать задачи можно свои или команды
- Вывод задач:
  - сетка mansory
  - канбан с drag and drop по статусам (самый простой)
- Создать и редактировать команду на странице 'команда'
- На странице задач возможны фильтры по датам или по участнику команды
- Отображаются просроченные задачи
- Команды могут перемешиваться, каждый может быть лидером
- Добавление участника к задаче из выпадающего списка
- Удаление участников через тогл
- Формы валидируются при регистрации, входе и создании редактировании задач
- Задачи градируются по цвету в зависимости от статуса
- Добавлен приоритет задач (высокий, средний, низкий), отражен звездачками
- Статус меняется прямо из списка

## СЕРВЕР
[Ссылка на сервер (heroku)](https://obscure-basin-28466.herokuapp.com).

[Ссылка github](https://github.com/greenbuger-byte/todo-test-task-server).
#### NODE.js (express), MongoDB
### Задачи
- `api/v1/tasks` [get] список всех задач
  - `?filter=["all", "day", "week", "more"]` - сортировка по дате окончания
  - `?team=[" id пользователя "]` - просмотреть задачи пользователя
- `api/v1/tasks/create` [post] [accessToken] - добавить задачу
- `api/v1/tasks/:id` [path] [accessToken]- изменение задачи
- `api/v1/tasks/:id` [delete] [accessToken] - удаление задачи

### Пользователи
- `api/v1/user` [get] - список пользователей
- `api/v1/user/me` [get] [accessToken] - данные авторизованного пользователя
- `api/v1/user/team/:id` [get] [accessToken] - добавление и удаление команды
- `api/v1/user/login` [post] - авторизация
- `api/v1/user/registration` [post] -вход

Данные команды подгружаются с пользователем
`user: {...
lead: [{profile}, {profile}],
...
}`

# Спасибо за внимание!!!