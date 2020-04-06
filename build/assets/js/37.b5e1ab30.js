(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{425:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"유클리드-호제법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#유클리드-호제법"}},[s("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 유클리드 호제법")]),t._v(" "),s("blockquote",[s("p",[t._v("유클리드 호제법(-互除法, Euclidean algorithm) 또는 유클리드 알고리즘은 2개의 자연수 또는 정식의 최대공약수를 구하는 알고리즘의 하나이다. 호제법이란 말은 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리즘을 나타낸다. 2개의 자연수 "),s("code",[t._v("a")]),t._v(", "),s("code",[t._v("b")]),t._v("에 대해서 "),s("code",[t._v("a")]),t._v("를 "),s("code",[t._v("b")]),t._v("로 나눈 나머지를 "),s("code",[t._v("r")]),t._v("이라 하면**(단, "),s("code",[t._v("a>b")]),t._v(")**, "),s("code",[t._v("a")]),t._v("와 "),s("code",[t._v("b")]),t._v("의 최대공약수는 "),s("code",[t._v("b")]),t._v("와 "),s("code",[t._v("r")]),t._v("의 최대공약수와 같다. 이 성질에 따라, "),s("code",[t._v("b")]),t._v("를 "),s("code",[t._v("r")]),t._v("로 나눈 나머지 "),s("code",[t._v("r'")]),t._v("를 구하고, 다시 "),s("code",[t._v("r")]),t._v("을 "),s("code",[t._v("r'")]),t._v("로 나눈 나머지를 구하는 과정을 반복하여 "),s("strong",[t._v("나머지가 0이 되었을 때 나누는 수")]),t._v("가 "),s("code",[t._v("a")]),t._v("와 "),s("code",[t._v("b")]),t._v("의 최대공약수이다.")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("유클리드 호제법"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"최대공약수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최대공약수"}},[s("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 최대공약수")]),t._v(" "),s("p",[t._v("앞 설명을 식으로 일반화하면,"),s("code",[t._v("gcd(a,b) == gcd(b, a%b) == gcd(a%b, b%(a%b)) ...")]),t._v("이다. 즉, 코드로 구현할 때는 반복문으로 간편하게 구현할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// swap을 위해")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "a%b가 0일 때 나누는 수"는, 식에 써있듯 b이지만, b=a%b로 값이 변동되고, 기존 b값은 a에 저장되므로 a를 반환한다.')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("이렇게 최대공약수를 간단한 반복문으로 구할 수 있다. 그런데 이 코드는 a<b여도 작동한다. 이유가 뭘까? "),s("code",[t._v("a<b")]),t._v("라면, "),s("code",[t._v("a%b = a")]),t._v("이다. 즉, 다음과 같이 코드가 동작한다.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tmp = b;\nb = a;\na = tmp;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("code",[t._v("swap(a,b)")]),t._v("와 같은 코드이다. 즉, a,b가 뒤바뀌어서 다음 반복문이 돌아간다. 그러면, "),s("code",[t._v("a>b")]),t._v(" 조건을 성립하게 된다.")]),t._v(" "),s("h2",{attrs:{id:"최소공배수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최소공배수"}},[s("svg",{staticClass:"octicon octicon-link",attrs:{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 최소공배수")]),t._v(" "),s("p",[t._v("최소공배수는 최대공약수와 최소공배수의 관계를 이용해 구한다.")]),t._v(" "),s("p",[s("code",[t._v("a * b = gcd(a,b) * lcm(a,b)")])]),t._v(" "),s("p",[t._v("라는 성질이 있다. 따라서 최소공배수는 간단하게 구현할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lcm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);