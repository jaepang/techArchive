(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{423:function(t,c,e){"use strict";e.r(c);var a=e(3),s=Object(a.a)({},(function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"문제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#문제"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 문제")]),t._v(" "),e("p",[t._v("1742년, 독일의 아마추어 수학가 크리스티안 골드바흐는 레온하르트 오일러에게 다음과 같은 추측을 제안하는 편지를 보냈다.")]),t._v(" "),e("blockquote",[e("p",[t._v("4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다")])]),t._v(" "),e("p",[t._v("예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다. 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.")]),t._v(" "),e("p",[t._v("이 추측은 아직도 해결되지 않은 문제이다.")]),t._v(" "),e("p",[t._v("백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.")]),t._v(" "),e("h3",{attrs:{id:"입력"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#입력"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 입력")]),t._v(" "),e("p",[t._v("입력은 하나 또는 그 이상의 테스트 케이스로 이루어져 있다. 테스트 케이스의 개수는 100,000개를 넘지 않는다.")]),t._v(" "),e("p",[t._v("각 테스트 케이스는 짝수 정수 n 하나로 이루어져 있다. (6 ≤ n ≤ 1000000)")]),t._v(" "),e("p",[t._v("입력의 마지막 줄에는 0이 하나 주어진다.")]),t._v(" "),e("h3",{attrs:{id:"출력"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#출력"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 출력")]),t._v(" "),e("p",[t._v('각 테스트 케이스에 대해서, n = a + b 형태로 출력한다. 이때, a와 b는 홀수 소수이다. 숫자와 연산자는 공백 하나로 구분되어져 있다. 만약, n을 만들 수 있는 방법이 여러 가지라면, b-a가 가장 큰 것을 출력한다. 또, 두 홀수 소수의 합으로 n을 나타낼 수 없는 경우에는 "Goldbach\'s conjecture is wrong."을 출력한다.')]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" Overview")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/datastructure-algorithm/2020/01/01/eratos/"}},[t._v("에라토스테네스의 체")]),t._v("를 이용하는 유형의 문제이다. 어떻게든 더 빨리 해보려고 100만까지 한 번에 돌리기보다 "),e("code",[t._v("cache")]),t._v("를 이용해보려 했는데, 그냥 100만까지 돌리고 하는 편이 훨씬 빠르다.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("자꾸 중간 코드를 기록을 안해두고 날려버린다. 까먹지 말고 잘 기록하자.")])]),t._v(" "),e("h2",{attrs:{id:"first-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#first-step"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" first step")]),t._v(" "),e("p",[e("code",[t._v("cache")]),t._v("를 이용해 이미 입력값 이상까지 소수 탐색이 완료됐으면 탐색을 하지 않고, 그렇지 않으면 "),e("strong",[t._v("소수 리스트를 탐색하며 에라토스테네스의 체를 돌렸다. ⇒")]),t._v(" 이 부분이 속도 저하에 큰 영향을 준 것 같다. 또한, 이렇게 입력값 이하의 소수를 모두 찾으면 "),e("strong",[t._v("이중 for문을 돌리며")]),t._v(" "),e("strong",[t._v("모든 소수를 탐색하고, 조건에 만족하는 모든 쌍을 다시 비교하여 b-a가 가장 큰 쌍을 출력했다. ⇒")]),t._v(" 이 부분도 속도 저하의 요인이다. 그냥 소수 리스트를 작은 수부터 접근하여 n-소수가 소수이면 멈춰버리면 된다(이 경우가 당연히 b-a가 가장 크다)")]),t._v(" "),e("p",[t._v("소수 탐색만 구현하고 ideone으로 시간 테스트를 간단히 해봤는데, 100만은 5초 이상이 소요된다. 시간제한이 1초이므로 이렇게 구현하면 오답이다.")]),t._v(" "),e("h2",{attrs:{id:"second-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#second-step"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" second step")]),t._v(" "),e("p",[t._v("first step에서 시간 문제가 생겼던 두 가지(소수 탐색 중복수행, 정답 탐색 "),e("code",[t._v("O(n^2)")]),t._v(") 문제를 해결하였다. 그냥 코드를 실행하면 100만까지 에라토스테네스의 체를 돌리고, 소수 리스트에서 n-소수가 소수이면 출력해서 끝냈다. 100만을 ideone에서 돌려보니 1초가 안돼길래 제출했는데 "),e("code",[t._v("맞았습니다!")]),t._v("를 받았다.")]),t._v(" "),e("h2",{attrs:{id:"최종-코드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#최종-코드"}},[e("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 최종 코드")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/shinjawkwang/bojPractice/blob/master/math/6588.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),e("OutboundLink")],1)])])}),[],!1,null,null,null);c.default=s.exports}}]);