(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{430:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"문제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문제"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 문제")]),t._v(" "),a("p",[t._v("N개의 정수로 이루어진 배열 A가 주어진다. 이때, 배열에 들어있는 정수의 순서를 적절히 바꿔서 다음 식의 최댓값을 구하는 프로그램을 작성하시오.\n"),a("code",[t._v("|A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|")])]),t._v(" "),a("h3",{attrs:{id:"입력"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#입력"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 입력")]),t._v(" "),a("p",[t._v("첫째 줄에 "),a("code",[t._v("N (3 ≤ N ≤ 8)")]),t._v("이 주어진다. 둘째 줄에는 배열 A에 들어있는 정수가 주어진다. 배열에 들어있는 정수는 -100보다 크거나 같고, 100보다 작거나 같다.")]),t._v(" "),a("h3",{attrs:{id:"출력"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#출력"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 출력")]),t._v(" "),a("p",[t._v("첫째 줄에 배열에 들어있는 수의 순서를 적절히 바꿔서 얻을 수 있는 식의 최댓값을 출력한다.")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" Overview")]),t._v(" "),a("p",[a("code",[t._v("N (3 ≤ N ≤ 8)")]),t._v("라는 작은 범위를 보아하니, 정말 "),a("code",[t._v("Brute Force")]),t._v("로 해보라는건가 싶다. 앞에서 풀었던 "),a("router-link",{attrs:{to:"/daily-coding/2020/02/22/every-permutation-10974/"}},[t._v("10974. 모든 순열")]),t._v(" 로 모든 순열을 구한 뒤 계산해서 최댓값을 출력하면 될듯 하다. 시간제한이 좀 걸리긴 한데, 일단 구현해보자.")],1),t._v(" "),a("h2",{attrs:{id:"first-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-solution"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" first solution")]),t._v(" "),a("p",[t._v("입력받은 배열을 정렬한 뒤, 모든 순열을 돌며 계산했다. 계산 코드는 다음과 같다.")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("largest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("largest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"결과"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#결과"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 결과")]),t._v(" "),a("p",[a("code",[t._v("맞았습니다!!")]),t._v(", 다행히 "),a("code",[t._v("시간초과")]),t._v("가 나지 않았다.")]),t._v(" "),a("h2",{attrs:{id:"최종-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최종-코드"}},[a("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 최종 코드")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/shinjawkwang/bojPractice/blob/master/brute_force/10819.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);