webpackJsonp([9],{664:function(e,t,n){var o=n(71)(n(696),n(784),null,null);e.exports=o.exports},696:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(141),r=n(730),s=n.n(r),a=n(731),l=n.n(a);t.default={components:{OverviewCode1:s.a,OverviewCode2:l.a},data:function(){return{title:"Google Client API",description:"Введение в Google Client API."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","blog"),o.default.initBlock()}}},730:function(e,t,n){var o=n(71)(null,n(794),null,null);e.exports=o.exports},731:function(e,t,n){var o=n(71)(null,n(795),null,null);e.exports=o.exports},784:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[n("div",{staticClass:"page-title text-xs-center"},[n("div",{staticClass:"headline"},[e._v(e._s(e.title))]),n("div",{staticClass:"subheading"},[e._v(e._s(e.description))])]),n("p",{staticClass:"date-publication"},[e._v("2017-08-21")]),n("v-card",{staticClass:"blog-post"},[n("v-card-text",[n("section",[n("h1",[e._v("Введение.")]),n("p",[e._v("\n                        Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как People, Calendar, Drive, GMail и т.д.\n                        Для этого нужно использовать  JavaScript клиенскую библиотеку, чтобы взаимодействовать с Google APIs.\n                        Оригинал статьи можно посмотреть "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/start/start-js",target:"_blank"}},[e._v("здесь")]),e._v(".\n                    ")])]),n("section",[n("h2",[e._v("Ресурсы")]),n("dl",[n("dt",[n("strong",[e._v("Google аккаунт")])]),n("dd",[n("a",{attrs:{href:"https://www.google.com/accounts",target:"_blank"}},[e._v("Войти")])]),n("dd",[n("a",{attrs:{href:"https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount",target:"_blank"}},[e._v("Зарегистрироваться")])]),n("dt",[n("strong",[e._v("Google для разработчика")])]),n("dd",[n("a",{attrs:{href:"https://console.developers.google.com/project",target:"_blank"}},[e._v("Консоль разработчика")])]),n("dd",[n("a",{attrs:{href:"https://developers.google.com/apis-explorer/",target:"_blank"}},[e._v("Google APIs и сервисы")])]),n("dd",[n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank"}},[e._v("Учетные данные для вашего проекта")])]),n("dd",[n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/discovery",target:"_blank"}},[e._v("API Discovery Document(s)")])]),n("dd",[n("a",{attrs:{href:"https://developers.google.com/identity/sign-in/web/devconsole-project",target:"_blank"}},[e._v("Регистрация через Google для Вебсайтов")])]),n("dd",[n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/",target:"_blank"}},[e._v("Google API Клиентская Библиотека для JavaScript")])])])]),n("section",[n("h2",[e._v("Настройка доступа")]),n("h3",[e._v("Получить Google Account")]),n("p",[e._v("\n                        Вначале, войдите под своим Google Account "),n("a",{attrs:{href:"https://www.google.com/accounts",target:"_blank"}},[e._v("войти")]),e._v(", если вы еще не\n                        имеете Google Account, то "),n("a",{attrs:{href:"https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount",target:"_blank"}},[e._v("зарегистрируйтесь")]),e._v(".\n                    ")]),n("h3",[e._v("Создать Google проект")]),n("p",[e._v("\n                        Перейти к "),n("a",{attrs:{href:"https://console.developers.google.com/project",target:"_blank"}},[e._v("Google API Консоли")]),e._v(".\n                        Нажмите "),n("strong",[e._v("Создать проект")]),e._v("\n                        введите имя проекта, и нажмите "),n("strong",[e._v("Создать")]),e._v(".\n                        Если у вас уже есть проекты, то выберете существующий проект.\n                    ")]),n("p",[e._v("\n                        Проект нужен чтобы управлять различными параметрами работы с сервисами Google.\n                    ")]),n("ul",[n("li",[e._v("Управлять доступом к ресурсам;")]),n("li",[e._v("Предоставить доступ другим участникам к работе с проектом;")]),n("li",[e._v("Назначать роли и права доступа пользователям;")]),n("li",[e._v("Назначать квоты на использование сервисами;")]),n("li",[e._v("Создавать и удалять криптографические ключи;")]),n("li",[e._v("Создавать учетные данные: Ключи API и Идентификаторы клиентов OAuth 2.0;")]),n("li",[e._v("Подключать Google APIs, с которыми вы планируете работать.")])]),n("h3",[e._v("Подключить Google APIs")]),n("p",[e._v("\n                        После того как вы создадите или выберете существующий проект, войдите в консоль управления проктом\n                        в раздел "),n("strong",[e._v("API и сервисы")]),e._v(". Раздел можно выбрать в верхнем левом углу консоли управления\n                        проектом. В разделе "),n("strong",[e._v("API и сервисы")]),e._v("\n                        выберете "),n("strong",[e._v("Панель управления")]),e._v("\n                        нажмите кнопку "),n("strong",[e._v("Включить API и сервисы")]),e._v(". У вас появится список сервисов и API,\n                        из которого можно выбрать и затем включить в проект нужный вам сервис.\n                    ")]),n("p",[e._v("\n                        Информацию о существующих Google APIs и сервисах можно посмотреть в\n                        "),n("a",{attrs:{href:"https://developers.google.com/apis-explorer/",target:"_blank"}},[e._v("APIs Explorer")]),e._v(".\n                    ")]),n("h3",[e._v("Получить ключи доступа к Google APIs из вашего приложения")]),n("p",[e._v("Google определяет два уровня API доступа:")]),n("div",[n("table",[n("tbody",[n("tr",[n("th",[e._v("Уровень")]),n("th",[e._v("Описание")]),n("th",[e._v("Требования")])]),n("tr",[n("td",[e._v("Простой")]),n("td",[e._v("API вызовы, которые не требуют доступа к приватным данным пользователя")]),n("td",[e._v("API key")])]),n("tr",[n("td",[e._v("Авторизированный")]),n("td",[e._v("API вызовы, которые могут читать и писать приватные данные пользователя")]),n("td",[e._v("OAuth 2.0 credentials")])])])])]),n("h4",[e._v("Чтобы получить API key для простого доступа, сделайте следующее:")]),n("ol",[n("li",[e._v("Откройте "),n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank"}},[e._v("Страницу учетных данных")]),e._v(" в API Консоли.\n                        ")]),n("li",[e._v("Нажмите "),n("b",[e._v("Создать учетные данные > API key")]),e._v(" и выберете соответствующий тип ключа.\n                        ")])]),n("p",[e._v("Чтобы обеспечить защиту вашим API keys, следуйте рекомендациям "),n("a",{attrs:{href:"https://support.google.com/cloud/answer/6310037",target:"_blank"}},[e._v("лучшая практика использования API keys")]),e._v(".\n                    ")]),n("h4",[e._v("\n                        Чтобы получить OAuth 2.0 учетные данные для авторизованного доступа, сделайте следующее:")]),n("ol",[n("li",[e._v("Откройте "),n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank"}},[e._v("Страницу учетных данных")]),e._v(" в API Консоли.\n                        ")]),n("li",[e._v("Нажмите "),n("b",[e._v("Создать учетные данные > OAuth client ID")]),e._v("\n                            и выберете соответствующий тип.\n                        ")])]),n("h4",[e._v("\n                        Чтобы указать с каких URLs для OAuth 2.0 учетных данных можно делать обращения к Google APIs, сделайте следующее:")]),n("ol",[n("li",[e._v("\n                            Откройте "),n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank"}},[e._v("Страницу учетных данных")]),e._v(" в API Консоли.\n                        ")]),n("li",[e._v("\n                            Выберете соответсвующий "),n("code",[e._v("OAuth client ID")]),e._v(" в учетных данных.\n                        ")]),n("li",[n("b",[e._v("В разделе ограничения")]),e._v("\n                            задайте источники JavaScript и/или URI перенапраления.\n                        ")]),n("li",[n("b",[e._v("Важно")]),e._v("\n                            правильно указать источники (URLs). Если вы работаете локально на вашем компьютере\n                            например по адресу "),n("code",[e._v("http://localhost:3000")]),e._v(", то нужно указать два адреса:\n                            один внешний адрес, с которым вы выходите в интернет пр. "),n("code",[e._v("http://my-host.com")]),e._v("\n                            и\n                            внутренний пр. "),n("code",[e._v("http://localhost:3000")])])])]),n("section",[n("h2",[e._v("Как сделать запросы к Google API?")]),n("p",[e._v("\n                        Для создания запросов к Google API существуют несколько путей чтобы использовать JavaScript клиенскую библиотеку,\n                        но все они сводятся к основным базовым понятиям:")]),n("ol",[n("li",[e._v("Пользовательское приложение должно загрузить JavaScript клиенскую библиотеку.\n                            "),n("code",{},[e._v('<script src="https://apis.google.com/js/api.js"><\/script>')])]),n("li",[e._v("\n                            Пользовательское приложение должно инициализировать эту библиотеку с помощью API ключа, OAuth client ID и\n                            "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/discovery",target:"_blank"}},[e._v("\n                                API Discovery Document(s)")]),e._v(".\n                        ")]),n("li",[e._v("\n                            Пользовательское приложение посылает запросы к Google API и соответствующим образом обрабатывает ответы.\n                        ")])]),n("p",[e._v("\n                        В следующих разделах показано 3 варианта использования JavaScript клиентской библиотеки.")])]),n("section",[n("h3",[e._v("\n                        Вариант 1: Загружаем "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/discovery",target:"_blank"}},[e._v("API Discovery Document(s)")]),e._v(",\n                        затем выполняем запрос.\n                    ")]),n("p",[e._v("\n                        Следующий пример см. пр.1 предполагает, что пользователь уже авторизирован. Полный пример с авторизацией пользователя можно посмотреть\n                        "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/samples/samples#authorizing-and-making-authorized-requests",target:"_blank"}},[e._v("здесь")]),e._v(".\n                    ")]),n("kbd",[e._v("пр.1")]),n("overview-code1")],1),n("section",[n("h3",[e._v("\n                        Вариант 2: Использование "),n("strong",[e._v("gapi.client.request")]),e._v(".\n                    ")]),n("p",[e._v("\n                        Более общий способ создания запросов - использовать "),n("strong",[e._v("gapi.client.request")]),e._v(".\n                        Ваше приложение не загружает "),n("strong",[e._v("Discovery Document")]),e._v(" как было показано в предыдущем\n                        варианте, но оно все еще должно установить "),n("strong",[e._v("API key")]),e._v("\n                        (и авторизацию для некоторых APIs).\n                        Вам необходимо будет вручную заполнить REST параметры. При этом будет создаваться один\n                        сетевой запрос, что уменьшит размер приложения см. пр.2.\n                    ")]),n("kbd",[e._v("пр.2")]),n("overview-code2")],1),n("section",[n("h3",[e._v("\n                        Вариант 3: Использование "),n("strong",[e._v("CORS")]),e._v(".\n                    ")]),n("p",[e._v("Google APIs поддерживает "),n("a",{attrs:{href:"http://www.w3.org/TR/cors/",target:"_blank"}},[e._v("CORS")]),e._v(".\n                        Если вашему приложению необходимо выгружать/загружать медиа файлы, оно должно использовать "),n("strong",[e._v("CORS")]),e._v(".\n                        Подробности можно посмотреть  "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/cors",target:"_blank"}},[e._v("здесь...")])])]),n("section",[n("h2",[e._v("Поддерживаемые среды")]),n("p",[e._v("\n                        С JavaScript клиенской библиотекой можно работать со всеми броузерами, которые поддерживают\n                        Google Apps. Список броузеров можно посмотреть "),n("a",{attrs:{href:"https://support.google.com/a/answer/33864",target:"_blank"}},[e._v("здесь")]),e._v(".\n                    ")])])])],1)],1)],1)},staticRenderFns:[]}},794:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("code",{staticClass:"highlight"},[e._v("\n    function start() {\n        // 2. Initialize the JavaScript client library.\n        gapi.client.init({\n            'apiKey': 'YOUR_API_KEY',\n            // Your API key will be automatically added to the Discovery Document URLs.\n            'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],\n            // clientId and scope are optional if auth is not required.\n            'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',\n            'scope': 'profile',\n        }).then(function() {\n            // 3. Initialize and make the API request.\n            return gapi.client.people.people.get({\n                'resourceName': 'people/me',\n                'requestMask.includeField': 'person.names'\n            });\n        }).then(function(response) {\n            console.log(response.result);\n            }, function(reason) {\n                console.log('Error: ' + reason.result.error.message);\n            });\n    };\n    // 1. Load the JavaScript client library.\n    gapi.load('client', start);\n")])},staticRenderFns:[]}},795:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("code",{staticClass:"highlight"},[e._v("\n    function start() {\n        // 2. Initialize the JavaScript client library.\n        gapi.client.init({\n            'apiKey': 'YOUR_API_KEY',\n            // clientId and scope are optional if auth is not required.\n            'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',\n            'scope': 'profile',\n        }).then(function() {\n            // 3. Initialize and make the API request.\n            return gapi.client.request({\n                'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',\n            })\n        }).then(function(response) {\n            console.log(response.result);\n            }, function(reason) {\n                console.log('Error: ' + reason.result.error.message);\n            });\n    };\n    // 1. Load the JavaScript client library.\n    gapi.load('client', start);\n")])},staticRenderFns:[]}}});