(this.webpackJsonpnewyear=this.webpackJsonpnewyear||[]).push([[0],[,function(e){e.exports=JSON.parse('{"cards":[{"text":"Best |conversation| you had this year.","icon":"\uf086"},{"text":"Best |piece of advice| you got this year.","icon":"\uf075"},{"text":"Best |moment| of the year.","icon":"\uf017"},{"text":"Hardest you |laughed| this year.","icon":"\uf585"},{"text":"Best thing you did |for someone| else this year.","icon":"\uf500"},{"text":"Best |movie| of the year.","icon":"\uf008"},{"text":"Best |game| of the year.","icon":"\uf11b"},{"text":"Favourite |song| of the year.","icon":"\uf001"},{"text":"|Day| this past year you\'d live over and over.","icon":"\uf783"},{"text":"Biggest |lesson| learned this year.","icon":"\uf02d"},{"text":"Most memorable |moment in pop| culture.","icon":"\uf06d"},{"text":"Best |meme| of the year.","icon":"\uf03e"},{"text":"Most |newsworthy| event of the year.","icon":"\uf1ea"},{"text":"Most |embarrassing| moment of the year.","icon":"\uf579"},{"text":"Best piece of |food| you had this year.","icon":"\uf2e7"}]}')},,,function(e,t,a){e.exports=a.p+"static/media/Logo.b11d98f5.svg"},function(e,t,a){e.exports=a.p+"static/media/Button.3469563f.svg"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),s=a.n(r),c=(a(13),a(6)),i=a(4),l=a.n(i),m=a(5),u=a.n(m),d=(a(14),a(7)),h=(a(15),a(1)),f=function(){var e=window.localStorage,t=e.getItem("cardIndexes");return(null===t||t.length<=2)&&(t="[".concat(Object(d.a)(Array(h.cards.length).keys()),"]"),e.setItem("cardIndexes",t)),JSON.parse(t)},y=function(){var e,t,a,n=function(){var e=f(),t=Math.floor(Math.random()*e.length),a=e.splice(t,1);return window.localStorage.setItem("cardIndexes","[".concat(e,"]")),h.cards[a]}(),r=n.text.split("|"),s=n.icon;return o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"font-awesome-head"},s),(e=r[0],t=r[1],a=r[2],o.a.createElement("h1",{className:"heading"},e,o.a.createElement("span",{className:"text-span"},t),a)))},g=function(){var e=Object(n.useState)(1),t=Object(c.a)(e,2),a=t[0],r=t[1];return o.a.createElement(n.Fragment,null,o.a.createElement("img",{src:l.a,alt:"",className:"logo"}),o.a.createElement(y,{key:a}),o.a.createElement("button",{onClick:function(){return r(a+1)},className:"link-block w-inline-block"},o.a.createElement("img",{src:u.a,alt:"",className:"next-button"})),o.a.createElement("p",{className:"paragraph"},"Made with love by",o.a.createElement("br",null),o.a.createElement("a",{href:"https://gegerfelt.io/",className:"us-link"},"glassig")," & ",o.a.createElement("a",{href:"http://decent.ninja/",className:"us-link"},"decentninja")))};s.a.render(o.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.05199a35.chunk.js.map