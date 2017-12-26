webpackJsonp([6],{669:function(e,n,t){var s=t(71)(t(704),t(809),null,null);e.exports=s.exports},704:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(141),a=t(740),r=t.n(a),i=t(741),o=t.n(i),l=t(742),c=t.n(l),d=t(743),p=t.n(d),g=t(744),u=t.n(g);n.default={components:{EmailCode1:r.a,EmailCode2:o.a,EmailCode3:c.a,EmailCode4:p.a,EmailCode5:u.a},data:function(){return{title:"Gmail API - пример",description:"Пример использования Gmail API"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","portfolio"),s.default.initBlock()}}},740:function(e,n,t){var s=t(71)(null,t(837),null,null);e.exports=s.exports},741:function(e,n,t){var s=t(71)(null,t(836),null,null);e.exports=s.exports},742:function(e,n,t){var s=t(71)(null,t(835),null,null);e.exports=s.exports},743:function(e,n,t){var s=t(71)(null,t(834),null,null);e.exports=s.exports},744:function(e,n,t){var s=t(71)(null,t(833),null,null);e.exports=s.exports},809:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[t("div",{staticClass:"page-title text-xs-center"},[t("div",{staticClass:"headline"},[e._v(e._s(e.title))]),t("div",{staticClass:"subheading"},[e._v(e._s(e.description))])]),t("p",{staticClass:"date-publication"},[e._v("2017-11-13")]),t("v-card",{staticClass:"blog-post"},[t("v-card-text",[t("section",[t("h1",[e._v("Введение.")]),t("p",[e._v("\n                        Этот проект демонстрирует использование некоторых функций сервиса\n                        "),t("a",{attrs:{href:"https://developers.google.com/gmail/api/guides/",target:"_blank"}},[e._v("Gmail API")]),e._v(".\n                        Gmail API является RESTful API, которое можно использовать для доступа к почтовым сообщениям пользователя\n                        и отправлять электронные сообщения. Для большинства веб приложений (включая мобильные приложения),\n                        Gmail API является лучшим выбором для авторизованного доступа к пользовательским данным Gmail.\n                    ")]),t("p",[e._v("\n                        Этот пример демонстрирует возможность отображать полученные сообщения, создавать и\n                        передавать новые сообщения и отвечать на полученные сообщения. За основу была взята\n                        статья которую можно посмотреть "),t("a",{attrs:{href:"https://www.sitepoint.com/sending-emails-gmail-javascript-api/",target:"_blank"}},[e._v("здесь")]),e._v(".\n                    ")]),t("p",{staticClass:"subheading"},[t("strong",[e._v("\n                            Этот пример на "),t("strong",[e._v("GitHub")]),e._v(" можно посмотреть "),t("a",{attrs:{href:"https://github.com/bsa-git/gapi-email",target:"_blank"}},[e._v("здесь")])])])]),t("section",[t("h2",[e._v("Ресурсы")]),t("dl",[t("dt",[t("strong",[e._v("Google Client API")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/identity/sign-in/web/devconsole-project",target:"_blank"}},[e._v("Регистрация через Google для Вебсайтов")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/api-client-library/javascript/",target:"_blank"}},[e._v("Google API Клиентская Библиотека для JavaScript")])]),t("dt",[t("strong",[e._v("Gmail API")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/gmail/api/guides/",target:"_blank"}},[e._v("Руководство по Gmail API")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages",target:"_blank"}},[e._v("Users.messages")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/list",target:"_blank"}},[e._v("Users.messages: list")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/get",target:"_blank"}},[e._v("Users.messages: get")])]),t("dd",[t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/send",target:"_blank"}},[e._v("Users.messages: send")])]),t("dd",[t("a",{attrs:{href:"http://opds.sut.ru/old/electronic_manuals/mail/1_Struct_el_soob.htm",target:"_blank"}},[e._v("Структура электронного сообщения")])]),t("dd",[t("a",{attrs:{href:"https://rfc2.ru/1521.rfc",target:"_blank"}},[e._v("RFC 1521 — Почтовый стандарт MIME")])]),t("dd",[t("a",{attrs:{href:"https://rfc2.ru/5322.rfc",target:"_blank"}},[e._v("RFC 5322 — Формат сообщений Internet (IMF)")])])])]),t("section",[t("h2",[e._v("Загрузка/Инициализация клиенской библиотеки Google API")]),t("p",[e._v("\n                        Вначале нужно загрузить и инициализировать клиенскую библиотеку Google API см. пр.1.\n                    ")]),t("kbd",[e._v("пр.1")]),t("email-code1")],1),t("section",[t("h2",[e._v("Авторизация пользователя на Google сервере")]),t("p",[e._v("\n                        Перед тем как выполнить какие то операции с Gmail API необходимо авторизироваться см. пр.2.\n                        Если авторизация прошла успешно, то загружается библиотека "),t("code",[e._v("loadGmailApi()")])]),t("kbd",[e._v("пр.2")]),t("email-code2")],1),t("section",[t("h2",[e._v("Отображение сообщений пользователя в Inbox")]),t("p",[e._v("\n                        При получении сообщений из Inbox, используются команды (Users.messages: "),t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/list",target:"_blank"}},[e._v("list")]),e._v("/"),t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/get",target:"_blank"}},[e._v("get")]),e._v(") см. пр.3.\n                    ")]),t("p",[e._v("\n                        Извлечение/Раскодирование/Отображение информации из почтового сообщения происходит в функции\n                        "),t("code",[e._v("appendMessageRow(message)")]),e._v(", с помощью ряда функций см. пр.4.\n                    ")]),t("kbd",[e._v("пр.3")]),t("email-code3"),t("kbd",[e._v("пр.4")]),t("email-code4")],1),t("section",[t("h2",[e._v("Передача сообщений")]),t("p",[e._v("\n                        При передаче сообщений, используются команда (Users.messages: "),t("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/users/messages/send",target:"_blank"}},[e._v("send")]),e._v(") см. пр.5.\n                    ")]),t("kbd",[e._v("пр.5")]),t("email-code5")],1)])],1)],1)],1)},staticRenderFns:[]}},833:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight html"},[e._v("\n    <script type=\"text/javascript\" >\n\n        ...\n\n        function sendEmail() {\n            $('#send-button').addClass('disabled');\n\n            sendMessage(\n                {\n                    'To': $('#compose-to').val(),\n                    'Subject': $('#compose-subject').val()\n                },\n                $('#compose-message').val(),\n                composeTidy\n            );\n\n            return false;\n        }\n\n        function composeTidy() {\n            $('#compose-modal').modal('hide');\n\n            $('#compose-to').val('');\n            $('#compose-subject').val('');\n            $('#compose-message').val('');\n\n            $('#send-button').removeClass('disabled');\n        }\n\n        function sendMessage(headers_obj, message, callback) {\n            var email = '';\n\n            for (var header in headers_obj)\n                email += header += \": \" + headers_obj[header] + \"\\r\\n\";\n\n            email += \"\\r\\n\" + message;\n\n            var sendRequest = gapi.client.gmail.users.messages.send({\n                'userId': 'me',\n                'resource': {\n                    'raw': window.btoa(email).replace(/\\+/g, '-').replace(/\\//g, '_')\n                }\n            });\n\n            return sendRequest.execute(callback);\n        }\n\n\n        ...\n\n    <\/script>\n")])])}]}},834:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight html"},[e._v("\n    <script type=\"text/javascript\" >\n\n        ...\n\n        function getHeader(headers, index) {\n            var header = '';\n            $.each(headers, function () {\n                if (this.name.toLowerCase() === index.toLowerCase()) {\n                    header = this.value;\n                }\n            });\n            return header;\n        }\n\n        function getBody(message) {\n            var encodedBody = '';\n            if (typeof message.parts === 'undefined') {\n                encodedBody = message.body.data;\n            }\n            else {\n                encodedBody = getHTMLPart(message.parts);\n            }\n            encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\\s/g, '');\n            return decodeURIComponent(escape(window.atob(encodedBody)));\n        }\n\n        function getHTMLPart(arr) {\n            for (var x = 0; x <= arr.length; x++) {\n                if (typeof arr[x].parts === 'undefined') {\n                    if (arr[x].mimeType === 'text/html') {\n                        return arr[x].body.data;\n                    }\n                }\n                else {\n                    return getHTMLPart(arr[x].parts);\n                }\n            }\n            return '';\n        }\n\n        ...\n\n    <\/script>\n")])])}]}},835:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight html"},[e._v("\n    <script type=\"text/javascript\" >\n\n        ...\n\n        function displayInbox() {\n            var request = gapi.client.gmail.users.messages.list({\n                'userId': 'me',\n                'labelIds': 'INBOX',\n                'maxResults': 10\n            });\n            request.execute(function (response) {\n                $.each(response.messages, function () {\n                    var messageRequest = gapi.client.gmail.users.messages.get({\n                        'userId': 'me',\n                        'id': this.id\n                    });\n                    messageRequest.execute(appendMessageRow);\n                });\n            });\n        }\n\n        ...\n\n    <\/script>\n")])])}]}},836:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight html"},[e._v("\n    <script type=\"text/javascript\" >\n\n        ...\n\n        function updateSigninStatus(isSignedIn) {\n            if (isSignedIn) {\n                loadGmailApi();\n                $('#authorize-button').remove();\n                $('.table-inbox').removeClass(\"hidden\");\n                $('#compose-button').removeClass(\"hidden\");\n            } else {\n                $('#authorize-button').removeClass(\"hidden\");\n                $('#authorize-button').on('click', function () {\n                    handleAuthClick();\n                });\n            }\n        }\n\n        function handleAuthClick() {\n            gapi.auth2.getAuthInstance().signIn();\n        }\n\n        function loadGmailApi() {\n            gapi.client.load('gmail', 'v1', displayInbox);\n        }\n\n        ...\n\n    <\/script>\n")])])}]}},837:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"highlight html"},[e._v("\n    <script type=\"text/javascript\" >\n        var clientId = 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com';\n        var apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';\n        var discoveryDocs = [\"https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest\"];\n        var scopes =\n            'https://www.googleapis.com/auth/gmail.readonly ' +\n            'https://www.googleapis.com/auth/gmail.send';\n\n\n        function handleClientLoad() {\n            // Load the API client and auth2 library\n            gapi.load('client:auth2', initClient);\n        }\n\n        function initClient() {\n            gapi.client.init({\n                apiKey: apiKey,\n                discoveryDocs: discoveryDocs,\n                clientId: clientId,\n                scope: scopes\n            }).then(function () {\n                // Listen for sign-in state changes.\n                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);\n                // Handle the initial sign-in state.\n                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());\n            });\n        }\n\n        ...\n\n    <\/script>\n    <script async defer\n        src=\"https://apis.google.com/js/api.js\"\n        onload=\"this.onload=function(){};handleClientLoad()\"\n        onreadystatechange=\"if (this.readyState === 'complete') this.onload()\"\n    >\n    <\/script>\n")])])}]}}});