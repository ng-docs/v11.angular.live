(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+1zh":function(e,t,c){"use strict";c.r(t),c.d(t,"TocModule",function(){return T});var i=c("ofXK"),n=c("NFeN"),s=c("XNiG"),o=c("itXk"),l=c("7Hc7"),a=c("1G5W"),d=c("HDdC"),r=c("Y7HM");class b extends d.a{constructor(e,t=0,c=l.a){super(),this.source=e,this.delayTime=t,this.scheduler=c,(!Object(r.a)(t)||t<0)&&(this.delayTime=0),c&&"function"==typeof c.schedule||(this.scheduler=l.a)}static create(e,t=0,c=l.a){return new b(e,t,c)}static dispatch(e){const{source:t,subscriber:c}=e;return this.add(t.subscribe(c))}_subscribe(e){return this.scheduler.schedule(b.dispatch,this.delayTime,{source:this.source,subscriber:e})}}function p(e,t=0){return function(c){return c.lift(new h(e,t))}}class h{constructor(e,t){this.scheduler=e,this.delay=t}call(e,t){return new b(t,this.delay,this.scheduler).subscribe(e)}}var u=c("JX91"),m=c("fXoL"),f=c("Faly"),g=c("TNhP");const y=["tocItem"];function E(e,t){1&e&&(m.Rb(0,"div",7),m.Ac(1," \u76ee\u5f55 "),m.Qb())}function v(e,t){if(1&e){const e=m.Sb();m.Rb(0,"button",8),m.Yb("click",function(){return m.qc(e),m.cc(2).toggle(!1)}),m.Ac(1," \u76ee\u5f55 "),m.Nb(2,"mat-icon",9),m.Qb()}if(2&e){const e=m.cc(2);m.Bb("aria-pressed",!e.isCollapsed),m.Ab(2),m.Eb("collapsed",e.isCollapsed)}}function x(e,t){if(1&e&&(m.Rb(0,"li",11,12),m.Nb(2,"a",13),m.Qb()),2&e){const e=m.cc(),t=e.$implicit,c=e.index,i=m.cc(2);m.Cb(t.level),m.Eb("secondary","EmbeddedExpandable"===i.type&&c>=i.primaryMax)("active",c===i.activeIndex),m.ic("title",t.title),m.Ab(2),m.hc("href",t.href,m.sc)("innerHTML",t.content,m.rc)}}function I(e,t){if(1&e&&(m.Pb(0),m.zc(1,x,3,10,"li",10),m.Ob()),2&e){const e=t.$implicit,c=m.cc(2);m.Ab(1),m.hc("ngIf","Floating"===c.type||"h1"!==e.level)}}function w(e,t){if(1&e){const e=m.Sb();m.Rb(0,"button",14),m.Yb("click",function(){return m.qc(e),m.cc(2).toggle()}),m.Qb()}if(2&e){const e=m.cc(2);m.Eb("collapsed",e.isCollapsed),m.Bb("aria-pressed",!e.isCollapsed)}}function C(e,t){if(1&e&&(m.Rb(0,"div",1),m.zc(1,E,2,0,"div",2),m.zc(2,v,3,3,"button",3),m.Rb(3,"ul",4),m.zc(4,I,2,1,"ng-container",5),m.Qb(),m.zc(5,w,1,3,"button",6),m.Qb()),2&e){const e=m.cc();m.Eb("collapsed",e.isCollapsed),m.Ab(1),m.hc("ngIf","EmbeddedSimple"===e.type),m.Ab(1),m.hc("ngIf","EmbeddedExpandable"===e.type),m.Ab(1),m.Eb("embedded","Floating"!==e.type),m.Ab(1),m.hc("ngForOf",e.tocList),m.Ab(1),m.hc("ngIf","EmbeddedExpandable"===e.type)}}let A=(()=>{class e{constructor(e,t,c){this.scrollService=e,this.tocService=c,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new s.a,this.primaryMax=4,this.isEmbedded=-1!==t.nativeElement.className.indexOf("embedded")}ngOnInit(){this.tocService.tocList.pipe(Object(a.a)(this.onDestroy)).subscribe(e=>{this.tocList=e;const t=(c=e=>"h1"!==e.level,this.tocList.reduce((e,t)=>c(t)?e+1:e,0));var c;this.type=t>0?this.isEmbedded?t>this.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})}ngAfterViewInit(){this.isEmbedded||Object(o.b)([this.tocService.activeItemIndex.pipe(p(l.a)),this.items.changes.pipe(Object(u.a)(this.items))]).pipe(Object(a.a)(this.onDestroy)).subscribe(([e,t])=>{if(this.activeIndex=e,null===e||e>=t.length)return;const c=t.toArray()[e].nativeElement,i=c.offsetParent,n=c.getBoundingClientRect(),s=i.getBoundingClientRect();n.top>=s.top&&n.bottom<=s.bottom||(i.scrollTop+=n.top-s.top-i.clientHeight/2)})}ngOnDestroy(){this.onDestroy.next()}toggle(e=!0){this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}toTop(){this.scrollService.scrollToTop()}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(f.a),m.Mb(m.l),m.Mb(g.a))},e.\u0275cmp=m.Gb({type:e,selectors:[["aio-toc"]],viewQuery:function(e,t){if(1&e&&m.Ec(y,!0),2&e){let e;m.mc(e=m.Zb())&&(t.items=e)}},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&m.zc(0,C,6,8,"div",0),2&e&&m.hc("ngIf","None"!==t.type)},directives:[i.k,i.j,n.a],encapsulation:2}),e})(),T=(()=>{class e{constructor(){this.customElementComponent=A}}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(t){return new(t||e)},imports:[[i.c,n.b]]}),e})()}}]);
//# sourceMappingURL=toc-toc-module-es2015.907b41186fe3543a5f8b.js.map