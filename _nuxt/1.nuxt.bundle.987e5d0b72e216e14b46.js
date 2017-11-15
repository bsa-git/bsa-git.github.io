webpackJsonp([1],{670:function(e,n,t){var s=t(71)(t(699),t(776),null,null);e.exports=s.exports},699:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(141),r=t(733),o=t.n(r),a=t(734),i=t.n(a),l=t(735),c=t.n(l),p=t(736),d=t.n(p),g=t(737),u=t.n(g),m=t(738),x=t.n(m),v=t(739),_=t.n(v),h=t(740),f=t.n(h);n.default={components:{ExamplesCode1:o.a,ExamplesCode2:i.a,ExamplesCode3:c.a,ExamplesCode4:d.a,ExamplesCode5:u.a,ExamplesCode6:x.a,ExamplesCode7:_.a,ExamplesCode8:f.a},data:function(){return{title:"Google API - примеры",description:"Демонстрация работы Google API сервисов."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","portfolio"),s.default.initBlock()}}},733:function(e,n,t){var s=t(71)(null,t(750),null,null);e.exports=s.exports},734:function(e,n,t){var s=t(71)(null,t(751),null,null);e.exports=s.exports},735:function(e,n,t){var s=t(71)(null,t(752),null,null);e.exports=s.exports},736:function(e,n,t){var s=t(71)(null,t(753),null,null);e.exports=s.exports},737:function(e,n,t){var s=t(71)(null,t(754),null,null);e.exports=s.exports},738:function(e,n,t){var s=t(71)(null,t(755),null,null);e.exports=s.exports},739:function(e,n,t){var s=t(71)(null,t(756),null,null);e.exports=s.exports},740:function(e,n,t){var s=t(71)(null,t(757),null,null);e.exports=s.exports},750:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight bash"},[e._v('\n    # install dependencies\n    $ npm install # Or yarn install\n\n    # environment variables\n    # Add file "app/env.js" to your project to set user environment variables.\n    # See the sample file "app/env.example.js".\n\n    # serve with hot reload at localhost:3000\n    $ npm run dev\n\n    # build for production and launch server\n    $ npm run build\n    $ npm start\n\n    # generate static project\n    $ npm run generate\n')])])}]}},751:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"nohighlight"},[e._v('\n    |--gapi-examples\n    |-- app/\n    |  |-- assets/          # Un-compiled assets such as Less, Sass or JavaScript\n    |  |-- components/      # Vue.js Components\n    |  |-- config/          # Configuration files\n    |  |-- layouts/         # Application Layouts\n    |  |-- middleware/      # Application Middleware (functions that can be run before rendering)\n    |  |-- pages/           # Application Views and Routes\n    |  |-- plugins/         # Javascript plugins\n    |  |-- static/          # Static files. (each file inside this directory is mapped to "/")\n    |  |-- store/           # Vuex Store files\n    |  |-- env.example.js   # Example of env.js (user configuration file)\n    |  `-- env.js           # User configuration file\n    |\n    |-- docs/               # folder created with the command ($ npm run generate)\n    |-- node_modules/       # folder created with the command ($ npm install # Or yarn install)\n    |-- .gitignore          # Git ignore file\n    |-- LICENSE.md          # License file\n    |-- nuxt.config.js      # Nuxt configuration file\n    |-- package.json        # NPM configuration file\n    `-- README.md           # Readme file\n\n')])])}]}},752:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight js"},[e._v("\n\n    ...\n\n    /**\n    * Google Client load/init\n    * @param params (Object)\n    *  etc. {\n    *  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n    *  clientId: 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',\n    *  discoveryDocs: [ 'https://people.googleapis.com/$discovery/rest?version=v1',\n    *                   'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],\n    *  scope: 'profile\n    *          https://www.googleapis.com/auth/contacts.readonly\n    *          https://www.googleapis.com/auth/gmail.readonly\n    *          https://www.googleapis.com/auth/gmail.send'\n    *  }\n    * @return {Promise}\n    */\n    loadClient (params) {\n        return new Promise(function (resolve, reject) {\n            _loadGoogleApi().then(function () {\n                if (debug) {\n                    console.log('loadGoogleAPI - OK')\n                }\n                return _initClient(params)\n            }).then(function () {\n                if (debug) {\n                    console.log('googleClient.init - OK')\n                }\n                // Load gmail library\n                window.gapi.client.load('gmail', 'v1', resolve)\n            })\n        })\n    }\n\n    /**\n    * Load google api\n    * @return {Promise}\n    * @private\n    */\n    _loadGoogleApi () {\n        return new Promise(function (resolve, reject) {\n            const script = document.createElement('script')\n            script.src = 'https://apis.google.com/js/platform.js'\n            script.onreadystatechange = script.onload = function () {\n                if (!script.readyState || /loaded|complete/.test(script.readyState)) {\n                    setTimeout(function () {\n                        resolve()\n                    }, 500)\n                }\n            }\n            document.getElementsByTagName('head')[0].appendChild(script)\n        })\n    }\n\n    /**\n    * Google client  load/init\n    * @param params (Object)\n    *  etc. {\n    *  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n    *  clientId: 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',\n    *  discoveryDocs: [ 'https://people.googleapis.com/$discovery/rest?version=v1',\n    *                   'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],\n    *  scope: 'profile\n    *          https://www.googleapis.com/auth/contacts.readonly\n    *          https://www.googleapis.com/auth/gmail.readonly\n    *          https://www.googleapis.com/auth/gmail.send'\n    *  }\n    * @return {Promise}\n    * @private\n    */\n    _initClient (params) {\n        return new Promise(function (resolve, reject) {\n            // Client Init\n            const initClient = function () {\n                window.gapi.client.init(params).then(() => {\n                    resolve()\n                }, (error) => {\n                    console.error('gapi.client.init - Error', error)\n                    alert(`gapi.client.init - Error: ${error.error}\\n Details: ${error.details}`)\n                })\n            }\n            window.gapi.load('client:auth2', initClient)\n        })\n    }\n\n    ...\n\n")])])}]}},753:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight js"},[e._v("\n\n    ...\n\n    /**\n    * Google SignIn\n    * @param successCallback (Function)\n    * @param errorCallback (Function)\n    */\n    signIn (successCallback, errorCallback) {\n        window.gapi.auth2.getAuthInstance().signIn().then(function (googleUser) {\n            successCallback(googleUser)\n            if (debug) {\n                console.log('GoogleAuth.signIn - OK')\n            }\n        }, function (error) {\n            errorCallback(error)\n            console.log('GoogleAuth.signIn - Error: ', error)\n        })\n    }\n\n    ...\n\n")])])}]}},754:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight js"},[e._v("\n\n        ...\n\n        getMyNames() {\n          return new Promise((resolve, reject) => {\n            window.gapi.client.people.people.get({\n              'resourceName': 'people/me',\n              'personFields': 'names,emailAddresses'\n            }).then((resp) => {\n              const names = resp.result.names[0]\n              if (debug) {\n                console.log('api.people.get - Executed: ')\n              }\n              resolve(names)\n            }, (error) => {\n              console.log('people.get - Error. ', `Error: ${error}`)\n              alert(`Error: ${error}`)\n            })\n          })\n        }\n\n        ...\n\n")])])}]}},755:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight js"},[e._v("\n\n        ...\n\n        getMyConnections() {\n          let myConnections = []\n          return new Promise((resolve, reject) => {\n            window.gapi.client.people.people.connections.list({\n              'resourceName': 'people/me',\n              'pageSize': 10,\n              'personFields': 'names,emailAddresses'\n            }).then(function (response) {\n              const connections = response.result.connections\n              if (connections.length > 0) {\n                for (let i = 0; i < connections.length; i++) {\n                  const person = connections[i]\n                  if (person.names && person.names.length > 0) {\n                    myConnections.push(person.names[0].displayName)\n                  } else {\n                    myConnections.push('No display name found for connection.')\n                  }\n                }\n              } else {\n                myConnections.push('No upcoming events found.')\n              }\n              if (debug) {\n                console.log('api.people.connections - Executed')\n              }\n              resolve(myConnections)\n            }, (error) => {\n              console.log('people.connections - Error. ', `Error: ${error}`)\n              alert(`Error: ${error}`)\n            })\n          })\n        }\n\n        ...\n\n")])])}]}},756:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight js"},[e._v("\n\n    ...\n\n    /**\n    * Send email\n    * @param params\n    * etc.{\n    userId: 'me',\n    to: my@test.com,\n    subject: Request for my resume from the employer,\n    message: 'My Message!',\n    callback: function () {\n    ....\n    }\n    * }\n    */\n    send (params) {\n        try {\n            const headers = {\n                'To': params.to,\n                'Subject': params.subject,\n                'Content-Type': 'text/html; charset=\"UTF-8\"'\n            }\n\n            let email = ''\n            _.forEach(headers, function (value, key) {\n                email += `${key}: ${value}` + '\\r\\n'\n            })\n\n            email += '\\r\\n' + params.message\n            const base64EncodedEmail = _b64UrlEncodeUnicode(email)\n            const sendRequest = window.gapi.client.gmail.users.messages.send({\n                'userId': params.userId,\n                'resource': {\n                    'raw': base64EncodedEmail\n                }\n            })\n            sendRequest.execute(params.callback)\n        } catch (e) {\n            throw e\n        }\n    }\n\n    /**\n    * To encode the unicode string into Base64-encoded-url value\n    *\n    * @param str\n    * @return {string}\n    */\n    _b64UrlEncodeUnicode (str) {\n        // first we use encodeURIComponent to get percent-encoded UTF-8,\n        // then we convert the percent encodings into raw bytes which\n        // can be fed into btoa.\n        const b64Encoded = btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,\n            function toSolidBytes (match, p1) {\n                return String.fromCharCode('0x' + p1)\n            }))\n        // Replace for URL\n        return b64Encoded.replace(/\\+/g, '-').replace(/\\//g, '_')\n    }\n\n    ...\n\n")])])}]}},757:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight js"},[e._v("\n\n    ...\n\n   /**\n   * Get inbox messages\n   * @param params\n   * etc. {\n      userId: 'me',\n      labelIds: 'INBOX',\n      maxResults: 10\n   * }\n   * @return {Promise}\n   */\n  getInbox (params) {\n    let arrPromises = []\n    return new Promise((resolve, reject) => {\n        _getMyMessagesList(params)\n        .then(list => {\n          _.forEach(list, function (item) {\n            arrPromises.push(_getMessageForId(item.id, params.userId))\n          })\n          const allPromises = Promise.all(arrPromises)\n          resolve(allPromises)\n        })\n    })\n  }\n\n  _getMyMessagesList (params) {\n    // Execute this request for 'gmail.users.messages.list'\n    const request = window.gapi.client.gmail.users.messages.list(params)\n    return new Promise((resolve, reject) => {\n      request.execute(function (response) {\n        if (debug) {\n          console.log('api.gmail.users.messages.list - Executed: ', response.messages)\n        }\n        resolve(response.messages)\n      })\n    })\n  }\n\n  _getMessageForId (id, userId) {\n    let _message = {}\n    // Execute this request for 'gmail.users.messages.get'\n    const messageRequest = window.gapi.client.gmail.users.messages.get({\n      'userId': userId,\n      'id': id\n    })\n    return new Promise((resolve, reject) => {\n      messageRequest.execute(message => {\n        // Parsing  message\n        _message.id = message.id\n        _message.from = _getHeader(message.payload.headers, 'From')\n        _message.subject = _getHeader(message.payload.headers, 'Subject')\n        _message.date = _getHeader(message.payload.headers, 'Date')\n        _message.reply_to = _getHeader(message.payload.headers, 'Reply-to')\n        _message.message_id = _getHeader(message.payload.headers, 'Message-ID')\n        _message.body = _getBody(message.payload)\n        if (debug) {\n          console.log('api.gmail.users.messages.get - Executed: ', _message)\n        }\n        resolve(_message)\n      })\n    })\n  }\n\n  _getHeader (headers, index) {\n    let headerValue = ''\n    _.forEach(headers, function (header) {\n      if (header.name.toLowerCase() === index.toLowerCase()) {\n        headerValue = header.value\n      }\n    })\n    return headerValue\n  }\n\n  _getBody (message) {\n    var encodedBody = ''\n    try {\n      if (typeof message.parts === 'undefined') {\n        encodedBody = message.body.data\n      } else {\n        encodedBody = _getHTMLPart(message.parts)\n      }\n      return _b64UrlDecodeUnicode(encodedBody)\n    } catch (error) {\n      console.error('apiGmail._getBody - Error', error)\n      throw error\n    }\n  }\n\n  _getHTMLPart (arr) {\n    for (let x = 0; x <= arr.length; x++) {\n      if (typeof arr[x].parts === 'undefined') {\n        if (arr[x].mimeType === 'text/html') {\n          return arr[x].body.data\n        }\n      } else {\n        return _getHTMLPart(arr[x].parts)\n      }\n    }\n    return ''\n  }\n\n  /**\n   * To decode the Base64-encoded-url value back into a String\n   *\n   * @param str\n   * @return {string}\n   */\n  _b64UrlDecodeUnicode (str) {\n    const encodedBody = str.replace(/-/g, '+').replace(/_/g, '/').replace(/\\s/g, '')\n    // Going backwards: from bytestream, to percent-encoding, to original string.\n    return decodeURIComponent(atob(encodedBody).split('').map(function (c) {\n      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)\n    }).join(''))\n  }\n\n    ...\n\n")])])}]}},776:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[t("div",{staticClass:"page-title text-xs-center"},[t("div",{staticClass:"headline"},[e._v(e._s(e.title))]),t("div",{staticClass:"subheading"},[e._v(e._s(e.description))])]),t("p",{staticClass:"date-publication"},[e._v("2017-11-14")]),t("v-card",{staticClass:"blog-post"},[t("v-card-text",[t("section",[t("h1",[e._v("Введение.")]),t("p",[e._v("\n                        В приложении представленны примеры, которые демонстрируют использование некоторых Google сервисов,\n                        таких как  People, GMail и т.д. Само приложение разработано с помощью\n                        "),t("a",{attrs:{href:"https://nuxtjs.org/guide",target:"_blank"}},[e._v("Nuxt.js")]),e._v(".\n                        Nuxt.js — это фреймворк для универсальных приложений на\n                        "),t("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html",target:"_blank"}},[e._v("Vue.js")]),e._v(".\n                    ")]),t("p",{staticClass:"subheading"},[t("strong",[e._v("\n                            Этот пример на "),t("strong",[e._v("GitHub")]),e._v(" можно посмотреть "),t("a",{attrs:{href:"https://github.com/bsa-git/gapi-examples",target:"_blank"}},[e._v("здесь")])])])]),t("section",[t("h2",[e._v("Ресурсы")]),t("dl",[t("dt",[t("strong",[e._v("Google API")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/",target:"_blank"}},[e._v("Google API Клиентская Библиотека для JavaScript")])]),t("dt",[t("strong",[e._v("Google People API")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/people/",target:"_blank"}},[e._v("Документация")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/people/api/rest/v1/people/get",target:"_blank"}},[e._v("Method: people.get")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/people/api/rest/v1/people.connections/list",target:"_blank"}},[e._v("Method: people.connections.list")])]),t("dt",[t("strong",[e._v("Gmail API")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/gmail/api/guides/",target:"_blank"}},[e._v("Документация")])]),t("dd",[t("a",{attrs:{href:"http://opds.sut.ru/old/electronic_manuals/mail/1_Struct_el_soob.htm",target:"_blank"}},[e._v("Структура электронного сообщения")])]),t("dd",[t("a",{attrs:{href:"https://rfc2.ru/1521.rfc",target:"_blank"}},[e._v("RFC 1521 — Почтовый стандарт MIME")])]),t("dd",[t("a",{attrs:{href:"https://rfc2.ru/5322.rfc",target:"_blank"}},[e._v("RFC 5322 — Формат сообщений Internet (IMF)")])]),t("dt",[t("strong",[e._v("Nuxt.js")])]),t("dd",[t("a",{attrs:{href:"https://nuxtjs.org/guide",target:"_blank"}},[e._v("Документация")])]),t("dd",[t("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html",target:"_blank"}},[e._v("Vue.js")])]),t("dd",[t("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank"}},[e._v("Vue Router")])]),t("dd",[t("a",{attrs:{href:"https://vuex.vuejs.org/en/",target:"_blank"}},[e._v("Vuex")])])])]),t("section",[t("h2",[e._v("Работа приложения")]),t("p",[e._v("Это приложение демонстрирует работу следующих Google сервисов:")]),t("h3",[e._v("People API")]),t("ul",[t("li",[t("a",{attrs:{href:"#people-get"}},[e._v("Method: people.get")])]),t("li",[t("a",{attrs:{href:"#people-connections"}},[e._v("Method: people.connections.list")])])]),t("h3",[e._v("Gmail API")]),t("ul",[t("li",[t("a",{attrs:{href:"#gmail-send"}},[e._v("Method: users.messages: send")])]),t("li",[t("a",{attrs:{href:"#gmail-inbox"}},[e._v("Methods: users.messages: list/get")])])]),t("h3",[e._v("Установка/Конфигурация/Построение приложения")]),t("p",[e._v("\n                        Приложение можно установить с "),t("a",{attrs:{href:"https://github.com/bsa-git/gapi-examples",target:"_blank"}},[e._v("GitHub")]),e._v(", варианты\n                        построения приложения можно посмотреть в пр.1.\n                    ")]),t("kbd",[e._v("пр.1")]),t("examples-code1"),t("h3",[e._v("Структура приложения")]),t("p",[e._v("\n                        Приложение имеет следующую структуру см. пр.2.\n                    ")]),t("kbd",[e._v("пр.2")]),t("examples-code2")],1),t("section",[t("h2",[e._v("Загрузка/Инициализация клиенской библиотеки Google API")]),t("p",[e._v("\n                        Вначале нужно загрузить и инициализировать клиенскую библиотеку Google API см. пр.3.\n                        Загрузка происходит с помощью функции "),t("code",[e._v("loadGapi()")]),e._v(" при создании компонента\n                        в модуле "),t("code",[e._v("/app/layouts/default.vue")]),e._v(".\n                    ")]),t("kbd",[e._v("пр.3")]),t("examples-code3")],1),t("section",[t("h2",[e._v("Авторизация пользователя на Google сервере")]),t("p",[e._v("\n                        В приложении авторизация пользователя происходит на странице сайта "),t("code",[e._v("Login")]),e._v(".\n                        Без авторизации пользователя доступ к демонстрационным примерам - "),t("strong",[e._v("запрещен")]),e._v("!\n                        Авторизация пользователя происходит в модуле "),t("code",[e._v("/app/pages/login.vue")]),e._v(" с помощью функции\n                        "),t("a",{attrs:{href:"https://developers.google.com/identity/sign-in/web/reference#googleauthsignin",target:"_blank"}},[e._v("GoogleAuth.signIn()")]),e._v(", см. пр.4.\n\n                    ")]),t("kbd",[e._v("пр.4")]),t("examples-code4")],1),t("section",[t("h2",[e._v("Google People API (Method: people.get)")]),t("p",[t("a",{attrs:{name:"people-get"}})]),t("p",[e._v("\n                        В приложении эта операция выполняется в модуле "),t("code",[e._v("/app/pages/services/people-get.vue")]),e._v(" по адресу "),t("code",[e._v("/services/people-get")]),e._v("\n                        При этом мы можем получить иноформацию для конкретного пользователя по его уникальному имени.\n                        Используя имя "),t("code",[e._v("people/me")]),e._v(" мы получим информацию о самом авторизированном пользователе см. пр.5.\n\n                    ")]),t("kbd",[e._v("пр.5")]),t("examples-code5")],1),t("section",[t("h2",[e._v("Google People API (Method: people.connections.list)")]),t("p",[t("a",{attrs:{name:"people-connections"}})]),t("p",[e._v("\n                        В приложении эта операция выполняется в модуле "),t("code",[e._v("/app/pages/services/people-connections.vue")]),e._v(" по адресу "),t("code",[e._v("/services/people-connections")]),e._v("\n                        Обеспечивает список авторизированных пользовательских контактов, и их профайлов см. пр.6.\n\n                    ")]),t("kbd",[e._v("пр.6")]),t("examples-code6")],1),t("section",[t("h2",[e._v("Передача email сообщений (Method: users.messages: send)")]),t("p",[t("a",{attrs:{name:"gmail-send"}})]),t("p",[e._v("\n                        В приложении эта операция выполняется в модуле "),t("code",[e._v("/app/pages/services/gmail-send-message.vue")]),e._v(" по адресу "),t("code",[e._v("/services/gmail-send-message")]),e._v("\n                        Этот метод отправляет указанное сообщение получателям в "),t("code",[e._v("To, Cc, Bcc")]),e._v(" заголовках. см. пр.7.\n                    ")]),t("kbd",[e._v("пр.7")]),t("examples-code7")],1),t("section",[t("h2",[e._v('Получение сообщений в формате (text/html; charset="UTF-8")')]),t("p",[t("a",{attrs:{name:"gmail-inbox"}})]),t("p",[e._v("\n                        В приложении эта операция выполняется в модуле "),t("code",[e._v("/app/pages/services/gmail-display-inbox.vue")]),e._v(" по адресу "),t("code",[e._v("/services/gmail-display-inbox")]),e._v('\n                        Для получения сообщений в формате (text/html; charset="UTF-8") используются команды\n                        (Users.messages: '),t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/list",target:"_blank"}},[e._v("list")]),e._v("/"),t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/get",target:"_blank"}},[e._v("get")]),e._v(") см. пр.8.\n\n                    ")]),t("kbd",[e._v("пр.8")]),t("examples-code8")],1)])],1)],1)],1)},staticRenderFns:[]}}});