# Medium Stories

Данный репозиторий является реализацией методов, подходов и практик, описанных в [medium.com/fafnur](https://medium.com/fafnur).

В репозитории представлено:
 - Кроссплатформенная реализация веб-хранилищ (LocalStorage, SessionStorage, CookieStorage, MemoryStorage) в библиотеке [storage](./libs/storage/README.md) 
 - Реализация адаптации с помощью ngrx, библиотека [responsive](./libs/responsive/README.md)
 - Базовый Store как библиотека включающая все абстрации, для унификации работы с Redux - [store](./libs/store/README.md)
 - Авторское видиние работы с переводами - [translation](./libs/translation). На данный момент является устаревшим решением, где в качестве альтернативы рекомендуется использовать нативную реализациюю работы с локалью, предоставляемую Angular.
 - Авторский форм билдер - [dynamic-forms](./libs/dynamic-forms/README.md)
 
 Также монорепозиторий включает в себя набор нескольких приложений, для демонстрации работы выше описанных библиотек.
 
 - [Base](./apps/frontend/base) - базовое приложение монорепозитория;
 - [Common-styles](./apps/frontend/common-styles) - пример приложения с применением общих SCSS стилей в монорепозитории;
 - [CSS](./apps/frontend/css) - пример интеграции SCSS в монорепозиторий;
 - [Forms](./apps/frontend/forms) - пример использования авторского форм-билдера;
 - [Graphql](./apps/frontend/graphql) - пример использования приложения c GraphQL;
 - [Infinite-scroll](./apps/frontend/infinite-scroll) - пример реализации бесконечного скролла;
 - [Localization](./apps/frontend/localization) - пример нативной локализации в Angular + Universal (без ngx-translate);
 - [Markup](./apps/frontend/markup) - пример реактивной верстки. На данный момент является устаревшей практикой. Для всего описанного в данном примере необходимо использовать pipe, directive и множество маленьких компонентов;
 - [Redux](./apps/frontend/redux) - пример подключения и использования Redux;
 - [Responsive](./apps/frontend/responsive) - пример использования реактивной адаптивности;
 - [Storage](./apps/frontend/storage) - пример использования кроссплатформенных хранилищ;
 - [Testing](./apps/frontend/storage) - авторское видиние тестирования. На данный момент является устаревшим, и рекомендуется использовать методы и подходы, описанные Angular Team и разработчиками  Nx;
 - [Theming](./apps/frontend/theming) - пример темизации приложения;
 - [Translation](./apps/frontend/translation) - пример локализации с использованием ngx-translate;
 - [Universal](./apps/frontend/universal) - пример настройки Universal.
 
## Справка

Все данные проекты подробно описаны на [medium.com/fafnur](https://medium.com/fafnur). 

При возникновении проблем с запуском тех или иных приложений, рекомендуется использовать соответствующие теги в репозитории, которые можно найти в соответствующих статьях на медиуме. 

## Поддержка и развитие репозитория

На данный момент, поддержка репозитория осановлена в связи с тем, что большинство методов и практик уже устарели.

Все последующие практики будут реализовываться в других репозиториях - [fafnur](https://github.com/fafnur).
