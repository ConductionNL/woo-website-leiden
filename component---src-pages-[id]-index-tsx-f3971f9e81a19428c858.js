"use strict";(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[944,123],{7207:function(e,a,i){i.r(a),i.d(a,{default:function(){return g}});var l="WOOItemDetailTemplate-module--tableRow--d28f2",d=i(1800),t=i(2616),n=i(5019),s=i(1082),r=i(7606),j=i(3168),c=i(686),h=i(4348),o=i(5587);const u=e=>{if(!e)return;const a=e.lastIndexOf("/");return e.substring(a+1)},m=(e,a)=>{var i;if(void 0!==a)return null===(i=a.find((a=>a.URL_Bijlage===e)))||void 0===i?void 0:i.Titel_Bijlage};var v=i(5893);const x=e=>{var a,i,x,g,p,b,f,B,_,U,C,L,R,S,T,k,N,O,I,D,w,A;let{wooItemId:F}=e;const{t:z,i18n:W}=(0,n.$)(),P=new c.QueryClient,y=(0,h.K)(P).getOne(F);return(0,v.jsx)(d.T3,{children:(0,v.jsxs)(d.JH,{className:"WOOItemDetailTemplate-module--container--ccf27",children:[(0,v.jsx)("div",{children:(0,v.jsxs)(d.rU,{className:"WOOItemDetailTemplate-module--backLink--e33aa",onClick:()=>(0,s.c4)("/"),children:[(0,v.jsx)(r.G,{icon:j.acZ})," Terug naar home"]})}),y.isSuccess&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.nL,{children:""!==y.data.Titel?y.data.Titel:"Geen titel beschikbaar"}),(0,v.jsx)(d.iA,{className:"WOOItemDetailTemplate-module--table--d7844",children:(0,v.jsxs)(d.RM,{className:"WOOItemDetailTemplate-module--tableBody--9d96b",children:[y.data.ID&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Kenmerk")}),(0,v.jsx)(d.pj,{children:(G=y.data.ID,/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(G)?y.data.Object_ID:y.data.ID)})]}),y.data.Titel&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Categorie")}),(0,v.jsx)(d.pj,{children:null!==(a=y.data.Categorie)&&void 0!==a?a:"-"})]}),y.data.Samenvatting&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Samenvatting")}),(0,v.jsx)(d.pj,{children:y.data.Samenvatting})]}),y.data.Beschrijving&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Beschrijving")}),(0,v.jsx)(d.pj,{children:y.data.Beschrijving})]}),y.data.Termijnoverschrijding&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Termijnoverschrijding")}),(0,v.jsx)(d.pj,{children:y.data.Termijnoverschrijding})]}),y.data.Publicatiedatum&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Publicatiedatum")}),(0,v.jsx)(d.pj,{children:y.data.Publicatiedatum?(0,t.p)(W.language,y.data.Publicatiedatum):"-"})]}),y.data.Ontvangstdatum&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Ontvangstdatum")}),(0,v.jsx)(d.pj,{children:null!==(i=(0,t.p)(W.language,y.data.Ontvangstdatum))&&void 0!==i?i:"-"})]}),y.data.Besluitdatum&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsxs)(d.pj,{children:[z("Besluitdatum")," "]}),(0,v.jsx)(d.pj,{children:null!==(x=(0,t.p)(W.language,y.data.Besluitdatum))&&void 0!==x?x:"-"})]}),y.data.Besluit&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Besluit")}),(0,v.jsx)(d.pj,{children:y.data.Besluit})]}),(null===(g=y.data)||void 0===g||null===(p=g.embedded)||void 0===p?void 0:p.Themas)&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Thema's")}),(0,v.jsx)(d.pj,{children:null===(b=y.data)||void 0===b||null===(f=b.embedded)||void 0===f?void 0:f.Themas.map(((e,a)=>{var i,l;return(0,v.jsx)("span",{children:e.Hoofdthema+(a!==(null===(i=y.data)||void 0===i||null===(l=i.embedded)||void 0===l?void 0:l.Themas.length)-1?", ":"")},a)}))})]}),y.data.URL_informatieverzoek&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Bijlage informatieverzoek")}),(0,v.jsx)(d.pj,{children:(0,v.jsx)(d.rU,{href:y.data.URL_informatieverzoek,target:"blank",children:null!==(B=m(y.data.URL_informatieverzoek,null===(_=y.data)||void 0===_||null===(U=_.embedded)||void 0===U?void 0:U.Bijlagen))&&void 0!==B?B:u(y.data.URL_informatieverzoek)})})]}),y.data.URL_inventarisatielijst&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Bijlage inventarisatielijst")}),(0,v.jsxs)(d.pj,{children:[(0,v.jsx)(d.rU,{href:y.data.URL_inventarisatielijst,target:"blank",children:null!==(C=m(y.data.URL_inventarisatielijst,null===(L=y.data)||void 0===L||null===(R=L.embedded)||void 0===R?void 0:R.Bijlagen))&&void 0!==C?C:u(y.data.URL_inventarisatielijst)}),(0,v.jsx)(v.Fragment,{children:console.log(m(y.data.URL_inventarisatielijst,null===(S=y.data)||void 0===S||null===(T=S.embedded)||void 0===T?void 0:T.Bijlagen))})]})]}),y.data.URL_besluit&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Bijlage besluit")}),(0,v.jsx)(d.pj,{children:(0,v.jsx)(d.rU,{href:y.data.URL_besluit,target:"blank",children:null!==(k=m(y.data.URL_besluit,null===(N=y.data)||void 0===N||null===(O=N.embedded)||void 0===O?void 0:O.Bijlagen))&&void 0!==k?k:u(y.data.URL_besluit)})})]}),(null===(I=y.data)||void 0===I||null===(D=I.embedded)||void 0===D?void 0:D.Bijlagen)&&(0,v.jsxs)(d.SC,{className:l,children:[(0,v.jsx)(d.pj,{children:z("Bijlagen")}),(0,v.jsx)(d.pj,{children:(0,v.jsx)(d.QI,{children:null===(w=y.data)||void 0===w||null===(A=w.embedded)||void 0===A?void 0:A.Bijlagen.map(((e,a)=>(0,v.jsx)(d.AS,{children:(0,v.jsx)(d.rU,{href:0!==e.URL_Bijlage.length?e.URL_Bijlage:"#",target:0!==e.URL_Bijlage.length?"blank":"",children:e.Titel_Bijlage})},a)))})})]})]})})]}),y.isLoading&&(0,v.jsx)(o.Z,{height:"200px"})]})});var G};var g=e=>(0,v.jsx)(x,{wooItemId:e.params.id})},1525:function(e,a,i){i.r(a);var l=i(7207);a.default=l.default}}]);
//# sourceMappingURL=component---src-pages-[id]-index-tsx-f3971f9e81a19428c858.js.map