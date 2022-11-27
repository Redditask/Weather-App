# Weather-App
React weather app

Это приложение представляет собой сайт с "карточками", на которых отображается информация о погоде в каком-либо городе/посёлке.
Можно удалять карточки и добавлять новые. При вводе названия города/посёлка, в процессе добавления новой карточки, в выпадающем списке показывается до 5-и локаций с похожим названием.
То есть присутсвует валидация ввода, чтобы пользователь не мог ввести несуществующий город/посёлок, так как добавить карточку можно только после выбор пункта из выпадающего списка.
Сам процесс добавления новой карточки идёт через модальное окно. 

Большинство действий имеет анимации (добавление/удаление карточек, открытие/закрытие модального окна, наведение на различные элементы и т.п.)

Также реализована адаптивная вёртска. Т.е. приложение еще стилизованно для телефонов/маленьких экранов, чтобы оно приемлимо выглядело.
Сами погодные данные я брал с помощью HTTP запросов из бесплатного API (https://openweathermap.org/)
Данные сохраняются в local storage, так что при новом запуске не придётся снова вводить нужные вам локации.

При разработке использовались такие технологии как:
- JS (React)
- HTML5
- SASS

Также использовались библиотеки:
- React Transition Group (для анимация)
- Axios (для HTTP запросов)

Чтобы я добавил/изменил? (ToDo)
- Переписал бы на Redux (возмонжо с TypeScript)
- Добавил бы тесты

Команды:
- Запуск приложения: "react-scripts start",
- Создание продакшн-сборки: "react-scripts build",
- Запуск тестов: "react-scripts test",
