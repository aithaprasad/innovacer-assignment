(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(5),i=c.n(a),o=(c(13),c(4)),j=c.n(o),l=c(6),d=c(2),h=function(e){var t=e.onSearch,c=Object(r.useState)(""),s=Object(d.a)(c,2),a=s[0],i=s[1];return Object(n.jsx)("input",{type:"text",style:{width:"240px",height:"24px"},placeholder:"Search",value:a,onChange:function(e){return c=e.target.value,i(c),void t(c);var c}})},u=(c(15),function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(d.a)(a,2),o=(i[0],i[1]),u=Object(r.useState)(""),b=Object(d.a)(u,2),O=b[0],x=b[1];function p(){return(p=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:e.sent.json().then((function(e){return s(Array.from(e.Countries))})).catch((function(e){return o(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]);var f=Object(r.useMemo)((function(){var e=c;return O&&(e=e.filter((function(e){return e.Country.toLowerCase().includes(O.toLowerCase())}))),Array.from(e)}),[c,O]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"Tabletop",children:Object(n.jsx)(h,{onSearch:function(e){x(e)}})}),Object(n.jsx)("style",{children:"table, th, td{border:1px solid black;}"}),Object(n.jsxs)("table",{className:"Tabletop",children:[Object(n.jsx)("thead",{children:f.length>0?Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Confirmed"}),Object(n.jsx)("th",{children:"Recovered"}),Object(n.jsx)("th",{children:"Deaths"})]}):Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:"5",children:"No Matches Found..."})})}),Object(n.jsx)("tbody",{children:f.length>0?f.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"Country",children:e.Country}),Object(n.jsx)("td",{children:e.TotalConfirmed}),Object(n.jsx)("td",{children:e.TotalRecovered}),Object(n.jsx)("td",{children:e.TotalDeaths})]},e.CountryCode)})):Object(n.jsx)("tr",{})})]})]})}),b=(c(16),c(7)),O=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Covid World Statistics"}),Object(n.jsxs)("div",{className:"FullApp",children:[Object(n.jsx)(b.PieChart,{data:[{title:"Deaths",value:1431955,color:"#CD5C5C"},{title:"Recovered",value:39062353,color:"#2E8B57"},{title:"Active",value:60964864,color:"#1E90FF"}],radius:30}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{className:"Red",children:"Deaths 1431955"}),Object(n.jsx)("h5",{className:"Green",children:"Recovered 39062353"}),Object(n.jsx)("h5",{className:"Blue",children:"Active 60964864"})]})]}),Object(n.jsx)(u,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.b03d8e25.chunk.js.map