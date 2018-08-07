webpackJsonp([1],{"47fC":function(e,t){},GBZz:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r=s("OjAt"),n=s.n(r),c=s("ppUw"),o=s.n(c),i=s("mtWM"),p=s.n(i),d=s("M4fF"),l=s.n(d),u={name:"MessageOfTheDay",props:["project"],data:function(){return{message:!1,showMessageTeaser:!0}},methods:{dismissMessage:function(){var e=this.hashMessage(this.project.readme.motd),t=new Date;t.setHours(23,59,59,0),this.$cookies.set(e,"true",t),this.message=!1},hashMessage:function(e){var t=0;if(0===e.length)return t;for(var s=0;s<e.length;s++)t=(t<<5)-t+e.charCodeAt(s),t|=0;return t},checkMessage:function(){var e=this.hashMessage(this.project.readme.motd);return!this.$cookies.get(e)}},mounted:function(){this.checkMessage()&&(this.showMessageTeaser=!0,this.message={shortMessage:l.a.truncate(this.project.readme.motd,{length:250}),fullMessage:!(this.project.readme.motd.length<=250)&&this.project.readme.motdHTML})}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.message?s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"alert alert-info"},[s("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.dismissMessage}},[e._v("×")]),e._v(" "),s("h4",[e._v("Message of The Day")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showMessageTeaser,expression:"showMessageTeaser"}]},[s("span",{domProps:{innerHTML:e._s(e.message.shortMessage)}}),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:e.message.fullMessage,expression:"message.fullMessage"}],staticClass:"btn btn-sm btn-simple",staticStyle:{margin:"0",padding:"0 0 0 .5em"},on:{click:function(t){e.showMessageTeaser=!e.showMessageTeaser}}},[e._v("[read more]")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMessageTeaser,expression:"!showMessageTeaser"}]},[s("span",{domProps:{innerHTML:e._s(e.message.fullMessage)}}),e._v(" "),s("p",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-sm btn-simple text-center",on:{click:function(t){e.showMessageTeaser=!e.showMessageTeaser}}},[e._v("[show less]")])])])])])]):e._e()},staticRenderFns:[]};var m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("span",{staticClass:"text-primary"},[this._v(this._s(this.project.description))])])])])])},staticRenderFns:[]},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row row-space"},[t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"card"},[this._m(0),this._v(" "),t("div",{staticClass:"card-content"},[this.project?t("span",{domProps:{innerHTML:this._s(this.project.readme.readmeHTML)}}):this._e()])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h4",{staticClass:"card-title"},[this._v("\n          Readme\n        ")])])}]},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("a",{staticClass:"h4",attrs:{href:"/project/"+e.project.name+"/activity"}},[s("span",{staticClass:"summary-count",class:{"text-primary":e.project.execCount<1,"text-info":e.project.execCount>0}},[e._v("\n            "+e._s(e.project.execCount)+"\n          ")]),e._v(" "),s("span",[e._v(e._s(e._f("pluralize")(e.project.execCount,"Execution"))+" In the last day")])]),e._v(" "),s("span",{attrs:{if:e.project.failedCount>0}},[s("a",{staticClass:"text-warning",attrs:{href:"/project/"+e.project.name+"/activity?statFilter=fail"}},[e._v("\n            ("+e._s(e.project.failedCount)+" Failed)\n          ")])]),e._v(" "),s("div",{attrs:{if:e.project.userCount>0}},[e._v("\n          by\n          "),s("span",{staticClass:"text-info"},[e._v(e._s(e.project.userCount))]),e._v(" "),s("span",[e._v(e._s(e._f("pluralize")(e.project.userCount,"User")))]),e._v(" "),s("ul",{staticClass:"users"},e._l(e.project.userSummary,function(t){return s("li",{key:t},[e._v(e._s(t))])}))])])])])])},staticRenderFns:[]};var f={name:"App",components:{motd:s("VU/8")(u,h,!1,function(e){s("GBZz")},"data-v-75f2acf2",null).exports,projectDescription:s("VU/8")({name:"Description",props:["project"],data:function(){return{}}},m,!1,null,null,null).exports,projectReadme:s("VU/8")({name:"Readme",props:["project"],data:function(){return{}}},v,!1,null,null,null).exports,projectActivity:s("VU/8")({name:"Activity",props:["project"],data:function(){return{}}},_,!1,function(e){s("47fC")},"data-v-ccaec09e",null).exports},data:function(){return{project:null}},mounted:function(){var e=this;window._rundeck&&window._rundeck.rdBase&&window._rundeck.projectName&&p()({method:"get",headers:{"x-rundeck-ajax":!0},url:window._rundeck.rdBase+"menu/homeAjax?projects="+window._rundeck.projectName,withCredentials:!0}).then(function(t){t.data.projects[0]&&(e.project=t.data.projects[0])})}},j={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.project?s("div",{attrs:{id:"app"}},[e.project&&e.project.readme&&e.project.readme.motd?s("motd",{attrs:{project:e.project}}):e._e(),e._v(" "),e.project&&e.project.description?s("project-description",{attrs:{project:e.project}}):e._e(),e._v(" "),e.project?s("project-activity",{attrs:{project:e.project}}):e._e(),e._v(" "),e.project?s("project-readme",{attrs:{project:e.project}}):e._e()],1):e._e()},staticRenderFns:[]};var g=s("VU/8")(f,j,!1,function(e){s("ZDVs")},null,null).exports;a.a.config.productionTip=!1,a.a.use(n.a),a.a.use(o.a),new a.a({el:"#project-dashboard-vue",components:{App:g},template:"<App/>"})},ZDVs:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.js.map