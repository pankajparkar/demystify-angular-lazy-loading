(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{P8yu:function(n,t,o){"use strict";o.r(t),o.d(t,"Route1Module",function(){return y});var e=o("ofXK"),c=o("mrSG"),a=o("fXoL"),r=o("lbOV"),i=o("0IaG"),s=o("bTqV");const l=["lazyContainer"];function p(n,t){1&n&&a.Pb(0)}let u=(()=>{class n{constructor(n,t){this.factory=n,this.dialog=t}loadComponent(){return Object(c.a)(this,void 0,void 0,function*(){this.lazyContainer.clear(),this.lazyContainer.createComponent(this.factory.resolveComponentFactory(r.LazyLoad1Component))})}openModal(){return Object(c.a)(this,void 0,void 0,function*(){this.dialog.open((yield Promise.resolve().then(o.bind(null,"lbOV"))).LazyLoad1Component)})}loadWeatherComponentAsync(){this.component=o.e(5).then(o.bind(null,"1hQo")).then(n=>n.DashboardComponent)}loadWeatherComponent(){return Object(c.a)(this,void 0,void 0,function*(){this.lazyContainer.clear();const n=this.lazyContainer.createComponent(this.factory.resolveComponentFactory((yield o.e(5).then(o.bind(null,"1hQo"))).DashboardComponent));this.lazyContainer.clear(),n.instance.headingStart="Fancy Weather",this.dialog.open(n.componentType)})}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(a.Nb(a.j),a.Nb(i.a))},n.\u0275cmp=a.Hb({type:n,selectors:[["app-component1"]],viewQuery:function(n,t){if(1&n&&a.Gc(l,!0,a.S),2&n){let n;a.qc(n=a.bc())&&(t.lazyContainer=n.first)}},decls:14,vars:3,consts:[["lazyContainer",""],[4,"ngComponentOutlet"],["mat-raised-button","",3,"click"]],template:function(n,t){1&n&&(a.Tb(0,"p"),a.Cc(1,"component1 works!"),a.Sb(),a.Pb(2,null,0),a.Bc(4,p,1,0,"ng-container",1),a.fc(5,"async"),a.Tb(6,"button",2),a.ac("click",function(){return t.loadComponent()}),a.Cc(7," Load Component\n"),a.Sb(),a.Tb(8,"button",2),a.ac("click",function(){return t.openModal()}),a.Cc(9," Lazy Open Component\n"),a.Sb(),a.Tb(10,"button",2),a.ac("click",function(){return t.loadWeatherComponent()}),a.Cc(11," Load Weather Component\n"),a.Sb(),a.Tb(12,"button",2),a.ac("click",function(){return t.loadWeatherComponentAsync()}),a.Cc(13," Weather Component Async\n"),a.Sb()),2&n&&(a.Cb(4),a.lc("ngComponentOutlet",a.gc(5,1,t.component)))},directives:[e.m,s.a],pipes:[e.b],styles:[""]}),n})(),d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Hb({type:n,selectors:[["app-component2"]],decls:2,vars:0,template:function(n,t){1&n&&(a.Tb(0,"p"),a.Cc(1,"component2 works!"),a.Sb())},styles:[""]}),n})();var m=o("tyNb"),b=o("NXVR");const f=[{path:"component1",component:u},{path:"component2",component:d},{path:"",redirectTo:"component1"}];let y=(()=>{class n{}return n.\u0275mod=a.Lb({type:n}),n.\u0275inj=a.Kb({factory:function(t){return new(t||n)},imports:[[e.c,b.a,m.c.forChild(f)]]}),n})()},lbOV:function(n,t,o){"use strict";o.r(t),o.d(t,"LazyLoad1Component",function(){return c});var e=o("fXoL");let c=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Hb({type:n,selectors:[["app-lazy-load1"]],decls:2,vars:0,template:function(n,t){1&n&&(e.Tb(0,"p"),e.Cc(1,"lazy-load1 works!"),e.Sb())},styles:[""]}),n})()},mrSG:function(n,t,o){"use strict";function e(n,t,o,e){return new(o||(o=Promise))(function(c,a){function r(n){try{s(e.next(n))}catch(t){a(t)}}function i(n){try{s(e.throw(n))}catch(t){a(t)}}function s(n){var t;n.done?c(n.value):(t=n.value,t instanceof o?t:new o(function(n){n(t)})).then(r,i)}s((e=e.apply(n,t||[])).next())})}o.d(t,"a",function(){return e})}}]);