webpackJsonp([23],{1010:function(t,e,n){var o=n(98)(n(1136),n(1343),null,null);t.exports=o.exports},1136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(237);e.default={data:function(){return{title:"Google Client API",description:"Введение в Google Client API."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","blog"),o.default.initBlock()}}},1343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[n("div",{staticClass:"page-title text-xs-center"},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))]),n("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),n("p",{staticClass:"date-publication"},[t._v("2017-08-21")]),n("v-card",{attrs:{hover:"",raised:""}},[n("v-card-text",{staticClass:"blog-post"},[n("h1",[t._v("Введение.")]),t._v("\n                Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как People, Calendar, Drive и т.д.\n                Для этого нужно использовать  JavaScript клиенскую библиотеку, чтобы взаимодействовать с Google APIs.\n                Оригинал статьи можно посмотреть "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/start/start-js",target:"_blank"}},[t._v("здесь")]),t._v(".\n                "),n("section",[n("h2",[t._v("Настройка доступа")]),n("h3",[t._v("Получить Google Account")]),n("p",[t._v("\n                        Вначале, войдите под своим Google Account "),n("a",{attrs:{href:"https://www.google.com/accounts",target:"_blank"}},[t._v("войти")]),t._v(", если вы еще не\n                        имеете Google Account, то "),n("a",{attrs:{href:"https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount",target:"_blank"}},[t._v("зарегистрируйтесь")]),t._v(".\n                    ")]),n("h3",[t._v("Создать Google проект")]),n("p",[t._v("\n                        Перейти к "),n("a",{attrs:{href:"https://console.developers.google.com/project",target:"_blank"}},[t._v("Google API Консоли")]),t._v(".\n                        Нажмите "),n("strong",[t._v("Создать проект")]),t._v(" введите имя проекта, и нажмите "),n("strong",[t._v("Создать")]),t._v(".\n                       Если у вас уже есть проекты, то выберете существующий проект.\n                    ")]),n("p",[t._v("\n                        Проект нужен чтобы управлять различными параметрами работы с сервисами Google.\n                    ")]),n("ul",[n("li",[t._v("Управлять доступом к ресурсам;")]),n("li",[t._v("Предоставить доступ другим участникам к работе с проектом;")]),n("li",[t._v("Назначать роли и права доступа пользователям;")]),n("li",[t._v("Назначать квоты на использование сервисами;")]),n("li",[t._v("Создавать и удалять криптографические ключи;")]),n("li",[t._v("Создавать учетные данные: Ключи API и Идентификаторы клиентов OAuth 2.0;")]),n("li",[t._v("Подключать Google APIs, с которыми вы планируете работать.")])]),n("h3",[t._v("Подключить Google APIs")]),n("p",[t._v("\n                        После того как вы создадите или выберете существующий проект, войдите в консоль управления проктом\n                        в раздел "),n("strong",[t._v("API и сервисы")]),t._v(". Раздел можно выбрать в верхнем левом углу консоли управления\n                        проектом. В разделе "),n("strong",[t._v("API и сервисы")]),t._v(" выберете "),n("strong",[t._v("Панель управления")]),t._v("\n                        нажмите кнопку "),n("strong",[t._v("Включить API и сервисы")]),t._v(". У вас появится список сервисов и API,\n                        из которого можно выбрать и затем включить в проект нужный вам сервис.\n                    ")]),n("p",[t._v("\n                        Информацию о существующих Google APIs и сервисах можно посмотреть в\n                        "),n("a",{attrs:{href:"https://developers.google.com/apis-explorer/",target:"_blank"}},[t._v("APIs Explorer")]),t._v(".\n                    ")]),n("h3",[t._v("Получить ключи доступа к Google APIs из вашего приложения")]),n("p",[t._v("Google определяет два уровня API доступа:")]),n("div",[n("table",[n("tbody",[n("tr",[n("th",[t._v("Уровень")]),n("th",[t._v("Описание")]),n("th",[t._v("Требования")])]),n("tr",[n("td",[t._v("Простой")]),n("td",[t._v("API вызовы, которые не требуют доступа к приватным данным пользователя")]),n("td",[t._v("API key")])]),n("tr",[n("td",[t._v("Авторизированный")]),n("td",[t._v("API вызовы, которые могут читать и писать приватные данные пользователя")]),n("td",[t._v("OAuth 2.0 credentials")])])])])]),n("h4",[t._v("Чтобы получить API key для простого доступа, сделайте следующее:")]),n("ol",[n("li",[t._v("Откройте "),n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank"}},[t._v("Страницу учетных данных")]),t._v(" в API Консоли.")]),n("li",[t._v("Нажмите "),n("b",[t._v("Создать учетные данные > API key")]),t._v(" и выберете соответствующий тип ключа.")])]),n("p",[t._v("Чтобы обеспечить защиту вашим API keys, следуйте рекомендациям "),n("a",{attrs:{href:"https://support.google.com/cloud/answer/6310037",target:"_blank"}},[t._v("лучшая практика использования API keys")]),t._v(".")]),n("h4",[t._v("Чтобы получить OAuth 2.0 учетные данные для авторизованного доступа, сделайте следующее:")]),n("ol",[n("li",[t._v("Откройте "),n("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank"}},[t._v("Страницу учетных данных")]),t._v(" в API Консоли.")]),n("li",[t._v("Нажмите "),n("b",[t._v("Создать учетные данные > OAuth client ID")]),t._v(" и выберете соответствующий тип.")])])]),n("section",[n("h2",[t._v("Как сделать запросы к Google API?")]),n("p",[t._v("\n                        Для создания запросов к Google API существуют несколько путей чтобы использовать JavaScript клиенскую библиотеку,\n                        но все они сводятся к основным базовым понятиям:")]),n("ol",[n("li",[t._v("Пользовательское приложение должно загрузить JavaScript клиенскую библиотеку.\n                            "),n("code",{},[t._v('<script src="https://apis.google.com/js/api.js"><\/script>')])]),n("li",[t._v("\n                            Пользовательское приложение должно инициализировать эту библиотеку с помощью API ключа, OAuth client ID и\n                            "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/discovery",target:"_blank"}},[t._v("\n                                API Discovery Document(s)")]),t._v(".\n                        ")]),n("li",[t._v("\n                            Пользовательское приложение посылает запросы к Google API и соответствующим образом обрабатывает ответы.\n                        ")])]),n("p",[t._v("\n                        В следующих разделах показано 3 варианта использования JavaScript клиентской библиотеки.")])]),n("section",[n("h3",[t._v("\n                        Вариант 1: Загружаем "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/discovery",target:"_blank"}},[t._v("API Discovery Document(s)")]),t._v(",\n                        затем выполняем запрос.\n                    ")]),n("p",[t._v("\n                        Следующий пример предполагает, что пользователь уже авторизирован. Полный пример с авторизацией пользователя можно посмотреть\n                        "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/samples/samples#authorizing-and-making-authorized-requests",target:"_blank"}},[t._v("здесь")]),t._v(".\n                    ")]),n("code",{staticClass:"highlight"},[t._v("\nfunction start() {\n    // 2. Initialize the JavaScript client library.\n    gapi.client.init({\n        'apiKey': 'YOUR_API_KEY',\n        // Your API key will be automatically added to the Discovery Document URLs.\n        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],\n        // clientId and scope are optional if auth is not required.\n        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',\n        'scope': 'profile',\n    }).then(function() {\n        // 3. Initialize and make the API request.\n        return gapi.client.people.people.get({\n            'resourceName': 'people/me',\n            'requestMask.includeField': 'person.names'\n        });\n    }).then(function(response) {\n        console.log(response.result);\n    }, function(reason) {\n        console.log('Error: ' + reason.result.error.message);\n    });\n};\n// 1. Load the JavaScript client library.\ngapi.load('client', start);\n                    ")])]),n("section",[n("h3",[t._v("\n                        Вариант 2: Использование "),n("strong",[t._v("gapi.client.request")]),t._v(".\n                    ")]),t._v("\n                    Более общий способ создания запросов - использовать "),n("strong",[t._v("gapi.client.request")]),t._v(".\n                    Ваше приложение не загружает "),n("strong",[t._v("Discovery Document")]),t._v(" как было показано в предыдущем\n                    варианте, но оно все еще должно установить "),n("strong",[t._v("API key")]),t._v(" (и авторизацию для некоторых APIs).\n                    Вам необходимо будет вручную заполнить REST параметры. При этом будет создаваться один\n                    сетевой запрос, что уменьшит размер приложения.\n                    "),n("code",{staticClass:"highlight"},[t._v("\nfunction start() {\n    // 2. Initialize the JavaScript client library.\n    gapi.client.init({\n        'apiKey': 'YOUR_API_KEY',\n        // clientId and scope are optional if auth is not required.\n        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',\n        'scope': 'profile',\n    }).then(function() {\n        // 3. Initialize and make the API request.\n        return gapi.client.request({\n            'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',\n        })\n    }).then(function(response) {\n        console.log(response.result);\n    }, function(reason) {\n        console.log('Error: ' + reason.result.error.message);\n    });\n};\n// 1. Load the JavaScript client library.\ngapi.load('client', start);\n                    ")])]),n("section",[n("h3",[t._v("\n                        Вариант 3: Использование "),n("strong",[t._v("CORS")]),t._v(".\n                    ")]),n("p",[t._v("Google APIs поддерживает "),n("a",{attrs:{href:"http://www.w3.org/TR/cors/",target:"_blank"}},[t._v("CORS")]),t._v(".\n                        Если вашему приложению необходимо выгружать/загружать медиа файлы, оно должно использовать "),n("strong",[t._v("CORS")]),t._v(".\n                        Подробности можно посмотреть  "),n("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/features/cors",target:"_blank"}},[t._v("здесь...")])])]),n("section",[n("h2",[t._v("Поддерживаемые среды")]),n("p",[t._v("\n                        С JavaScript клиенской библиотекой можно работать со всеми броузерами, которые поддерживают\n                        Google Apps. Список броузеров можно посмотреть "),n("a",{attrs:{href:"https://support.google.com/a/answer/33864",target:"_blank"}},[t._v("здесь")]),t._v(".\n                    ")])])])],1)],1)],1)},staticRenderFns:[]}}});