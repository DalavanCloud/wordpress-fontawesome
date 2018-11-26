(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={label:"LoadSpecView_label__34LBg","load-spec":"LoadSpecView_load-spec__3SZje"}},13:function(e,t,a){e.exports={"submit-status":"OptionsSetter_submit-status__2A56R",explanation:"OptionsSetter_explanation__XoKaX",success:"OptionsSetter_success__uJCv9",icon:"OptionsSetter_icon__l-DXD"}},14:function(e,t,a){e.exports={"client-requirements":"ClientRequirementsView_client-requirements__1v61H",conflicted:"ClientRequirementsView_conflicted__5hmJU"}},17:function(e,t,a){e.exports={status:"FontAwesomeAdminView_status__1TvaT",icon:"FontAwesomeAdminView_icon__AUm7s",good:"FontAwesomeAdminView_good__3B1qV",conflict:"FontAwesomeAdminView_conflict__2JlC8"}},19:function(e,t,a){e.exports={"plugin-version-warnings":"PluginVersionWarningsView_plugin-version-warnings__RYKwJ"}},23:function(e,t,a){e.exports={"unregistered-clients":"UnregisteredClientsView_unregistered-clients__4czYv"}},32:function(e,t,a){e.exports=a(66)},4:function(e,t,a){e.exports={explanation:"App_explanation__2O1a5","table-header":"App_table-header__3XfOL"}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(31),i=a.n(l),r=a(7),o=a(8),c=a(10),u=a(9),m=a(11),d=a(1),h=a(21),p=a.n(h),b=a(16),v=a(15),E=function(){return s.a.createElement("div",{className:"loading-view"},s.a.createElement(b.a,{icon:v.d,size:"4x",spin:!0}))},g=a(3),f=a.n(g),y=a(17),w=a.n(y),O=a(12),S=a.n(O),j=function(e){var t=e.spec,a=t.method,n=t.v4shim,l=t.pseudoElements,i=t.version,r=t.usePro?"Pro":"Free";return s.a.createElement("div",{className:S.a["load-spec"]},s.a.createElement("h2",null,"Current Load Specification"),s.a.createElement("table",{className:f()("widefat","striped")},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:S.a.label},"Product"),s.a.createElement("td",{className:S.a.value},"Font Awesome"," ",s.a.createElement("span",{className:f()("license",r)},r))),s.a.createElement("tr",null,s.a.createElement("td",{className:S.a.label},"Version"),s.a.createElement("td",{className:S.a.value},i)),s.a.createElement("tr",null,s.a.createElement("td",{className:S.a.label},"Method"),s.a.createElement("td",{className:S.a.value},a)),s.a.createElement("tr",null,s.a.createElement("td",{className:S.a.label},"Version 4 compatibility"),s.a.createElement("td",{className:S.a.value},n?"true":"false")),s.a.createElement("tr",null,s.a.createElement("td",{className:S.a.label},"Pseudo-elements support"),s.a.createElement("td",{className:S.a.value},l?"true":"false")))))},N=a(5),k=a(13),C=a.n(k),_=a(4),x=a.n(_),P=a(18),A="",V=["webfont","svg",A],q=["require","forbid",A],F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={method:A,v4shim:A,pseudoElements:A,version:A,usePro:!1,removeUnregisteredClients:!1,versionOptions:null,lastProps:null},a.handleMethodSelect=a.handleMethodSelect.bind(Object(d.a)(Object(d.a)(a))),a.handleProCheck=a.handleProCheck.bind(Object(d.a)(Object(d.a)(a))),a.handleV4Select=a.handleV4Select.bind(Object(d.a)(Object(d.a)(a))),a.handlePseudoElementsSelect=a.handlePseudoElementsSelect.bind(Object(d.a)(Object(d.a)(a))),a.handleVersionSelect=a.handleVersionSelect.bind(Object(d.a)(Object(d.a)(a))),a.handleRemoveUnregisteredCheck=a.handleRemoveUnregisteredCheck.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmitClick=a.handleSubmitClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleMethodSelect",value:function(e){this.setState({method:"-"===e.target.value?A:e.target.value})}},{key:"handleVersionSelect",value:function(e){this.setState({version:"-"===e.target.value?A:e.target.value})}},{key:"handlePseudoElementsSelect",value:function(e){this.setState({pseudoElements:"-"===e.target.value?A:e.target.value})}},{key:"handleProCheck",value:function(){this.setState({usePro:!this.state.usePro})}},{key:"handleRemoveUnregisteredCheck",value:function(){this.setState({removeUnregisteredClients:!this.state.removeUnregisteredClients})}},{key:"handleV4Select",value:function(e){this.setState({v4shim:"-"===e.target.value?A:e.target.value})}},{key:"handleSubmitClick",value:function(e){e.preventDefault();var t=this.props;(0,t.putData)({options:{adminClientLoadSpec:{name:t.adminClientInternal,method:this.state.method===A?void 0:this.state.method,v4shim:this.state.v4shim===A?void 0:this.state.v4shim,pseudoElements:this.state.pseudoElements===A?void 0:this.state.pseudoElements,version:this.state.version===A?void 0:this.state.version},usePro:this.state.usePro,removeUnregisteredClients:this.state.removeUnregisteredClients}})}},{key:"render",value:function(){var e=this;if(this.state.error)throw this.state.error;var t=this.props,a=t.hasSubmitted,n=t.isSubmitting,l=t.submitSuccess,i=t.submitMessage;return s.a.createElement("div",{className:"options-setter"},s.a.createElement("h2",null,"Options"),s.a.createElement("p",{className:x.a.explanation},"You can tune these options according to your preferences, as long as your preferences don't conflict with the specifications required by other plugins and themes that you've installed."),s.a.createElement("p",{className:x.a.explanation},"If conflicts are detected, they'll be shown below, and you might be able to resolve them just by choosing different options here."),s.a.createElement("table",{className:"form-table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},s.a.createElement("label",{htmlFor:"method"},"Method")),s.a.createElement("td",null,s.a.createElement("select",{name:"method",onChange:this.handleMethodSelect,value:this.state.method},V.map(function(e,t){return s.a.createElement("option",{key:t,value:e},e||"-")})))),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},s.a.createElement("label",{htmlFor:"use-pro"},"Use Pro")),s.a.createElement("td",null,s.a.createElement("input",{name:"use-pro",checked:this.state.usePro,value:this.state.usePro,type:"checkbox",onChange:this.handleProCheck}))),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},s.a.createElement("label",{htmlFor:"v4shim"},"Version 4 Compatibility")),s.a.createElement("td",null,s.a.createElement("select",{name:"v4shim",onChange:this.handleV4Select,value:this.state.v4shim},q.map(function(e,t){return s.a.createElement("option",{key:t,value:e},e||"-")})))),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},s.a.createElement("label",{htmlFor:"pseudo-elements"},"Pseudo-elements Support")),s.a.createElement("td",null,s.a.createElement("select",{name:"pseudo-elements",onChange:this.handlePseudoElementsSelect,value:this.state.pseudoElements},q.map(function(e,t){return s.a.createElement("option",{key:t,value:e},e||"-")})))),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},s.a.createElement("label",{htmlFor:"version"},"Version")),s.a.createElement("td",null,s.a.createElement("select",{name:"version",onChange:this.handleVersionSelect,value:this.state.version},Object.keys(this.state.versionOptions).map(function(t,a){return s.a.createElement("option",{key:a,value:t},t===A?"-":e.state.versionOptions[t])})))),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},s.a.createElement("label",{htmlFor:"remove-unregistered"},"Remove unregistered clients")),s.a.createElement("td",null,s.a.createElement("input",{name:"remove-unregistered",checked:this.state.removeUnregisteredClients,value:this.state.removeUnregisteredClients,type:"checkbox",onChange:this.handleRemoveUnregisteredCheck}))))),s.a.createElement("p",{className:"submit"},s.a.createElement("input",{type:"submit",name:"submit",id:"submit",className:"button button-primary",value:"Save Changes",onClick:this.handleSubmitClick}),a&&(l?s.a.createElement("span",{className:f()(C.a["submit-status"],C.a.success)},s.a.createElement(b.a,{className:C.a.icon,icon:v.a}),s.a.createElement("span",{className:C.a.explanation},i)):s.a.createElement("span",{className:f()(C.a["submit-status"],C.a.fail)},s.a.createElement(b.a,{className:C.a.icon,icon:v.c}),s.a.createElement("span",{className:C.a.explanation},i))),n&&s.a.createElement("span",{className:f()(C.a["submit-status"],C.a.submitting)},s.a.createElement(b.a,{className:C.a.icon,icon:v.d,spin:!0}))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.isSubmitting||Object(P.isEqual)(a.lastProps,e)?null:{lastProps:e,pseudoElements:e.currentOptions.adminClientLoadSpec.pseudoElements||A,version:e.currentOptions.adminClientLoadSpec.version||A,v4shim:e.currentOptions.adminClientLoadSpec.v4shim||A,method:e.currentOptions.adminClientLoadSpec.method||A,usePro:!!e.currentOptions.usePro,removeUnregisteredClients:!!e.currentOptions.removeUnregisteredClients,versionOptions:t.buildVersionOptions(e)}}},{key:"buildVersionOptions",value:function(e){var t=e.releases,a=t.available,n=t.latest_version,s=t.previous_version;return a.reduce(function(e,t){return e[t]=n===t?"".concat(t," (latest)"):s===t?"".concat(t," (previous minor release)"):t,e},Object(N.a)({},A,"-"))}}]),t}(s.a.Component),R=a(14),L=a.n(R),U=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"hasAdditionalClients",value:function(){var e=this;return!!Object(P.find)(this.props.clientRequirements,function(t){return t.name!==e.props.adminClientInternal})}},{key:"render",value:function(){var e=this,t=this.props.conflict,a=!!t;return s.a.createElement("div",{className:L.a["client-requirements"]},a?s.a.createElement("h2",null,"Conflicting Requirements"):s.a.createElement("h2",null,"Client Requirements"),this.hasAdditionalClients()?s.a.createElement("div",null,a?s.a.createElement("p",{className:x.a.explanation},"We found conflicting requirements between two or more plugins or themes."):s.a.createElement("p",{className:x.a.explanation},"Here are some other clients of the Font Awesome plugin, such as plugins or themes, along with their Font Awesome requirements shown side-by-side with your preferences. If you're trying to resolve a conflict, you might find the culprit at a glance here."),s.a.createElement("table",{className:f()("widefat","striped")},s.a.createElement("thead",null,s.a.createElement("tr",{className:x.a["table-header"]},s.a.createElement("th",null,"Name"),s.a.createElement("th",{className:f()(Object(N.a)({},L.a.conflicted,"method"===t))},"Method"),s.a.createElement("th",{className:f()(Object(N.a)({},L.a.conflicted,"version"===t))},"Version"),s.a.createElement("th",{className:f()(Object(N.a)({},L.a.conflicted,"v4shim"===t))},"V4 Compat"),s.a.createElement("th",{className:f()(Object(N.a)({},L.a.conflicted,"pseudoElements"===t))},"Pseudo-elements"))),s.a.createElement("tbody",null,this.props.clientRequirements.map(function(a,n){return s.a.createElement("tr",{key:n},s.a.createElement("td",null,a.name===e.props.adminClientInternal?e.props.adminClientExternal:a.name),s.a.createElement("td",{className:f()(Object(N.a)({},L.a.conflicted,"method"===t))},a.method?a.method:"-"),s.a.createElement("td",{className:f()(Object(N.a)({},L.a.conflicted,"version"===t))},a.version?a.version:"-"),s.a.createElement("td",{className:f()(Object(N.a)({},L.a.conflicted,"v4shim"===t))},a.v4shim?a.v4shim:"-"),s.a.createElement("td",{className:f()(Object(N.a)({},L.a.conflicted,"pseudoElements"===t))},a.pseudoElements?a.pseudoElements:"-"))})))):s.a.createElement("p",{className:x.a.explanation},"We don't detect any other active clients (like themes or plugins) that have registered requirements for Font Awesome."))}}]),t}(s.a.Component),D=a(23),M=a.n(D),I=function(e){var t=e.clients.length>0;return s.a.createElement("div",{className:f()(M.a["unregistered-clients"],Object(N.a)({},M.a["none-detected"],!t))},s.a.createElement("h2",null,"Unregistered Clients"),t?s.a.createElement("div",null,s.a.createElement("p",{className:x.a.explanation},"These are plugins or themes we've detected that appear to be trying to load their own versions of Font Awesome. Loading more than one version of Font Awesome will almost certainly result in problems, eventually. So, even if all registered clients are satisfied with your configuration, they can be broken by an unexpected version of Font Awesome loaded by one of these unregistered clients."),s.a.createElement("p",{className:x.a.explanation},"We recommend enabling the ",s.a.createElement("code",null,"Remove unregistered clients")," option to avoid such conflicts. When enabled, our plugin will attempt to stop these other clients from loading their own versions of Font Awesome. Most likely, they will continue to operate normally, as long as they are compatible with the version configured here."),s.a.createElement("p",{className:x.a.explanation},"If you enable ",s.a.createElement("code",null,"Remove unregistered clients")," and the results produced by those unregistered clients aren't what you expect (for example, their icons are missing), then you could try to select different options here, trying to find a configuration that ",s.a.createElement("em",null,"is")," compatible with them. Since they are ",s.a.createElement("em",null,"unregistered")," clients, we don't know what their requirements are, so you kinda just have to guess. You'll know you've found a workable configuration when all of the registered clients are satisfied (no conflicts shown here), and the unregistered clients produce expected results (their icons look right to you)."),s.a.createElement("p",{className:x.a.explanation},"A couple other options for resolving problems with unregistered clients:"),s.a.createElement("ol",{className:x.a.explanation},s.a.createElement("li",null,"Deactivate or replace it, if possible."),s.a.createElement("li",null,"Contact the developer for the unregistered client and ask them to consider updating their code to register with this Font Awesome Official plugin. Let them know they can reach us at ",s.a.createElement("code",null,"hello@fontawesome.com"),".")),s.a.createElement("table",{className:f()("widefat","striped")},s.a.createElement("tbody",null,s.a.createElement("tr",{className:x.a["table-header"]},s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Loading")),e.clients.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.handle),s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.src))})))):s.a.createElement("p",{className:x.a.explanation},"We detected no unregistered clients."))},W=a(19),G=a.n(W),T=function(e){return s.a.createElement("div",{className:G.a["plugin-version-warnings"]},s.a.createElement("h2",null,"Plugin Version Warnings"),s.a.createElement("p",{className:x.a.explanation},"This plugin is designed to be loaded in a variety of ways by third-party plugins and themes, all in the hope that it makes your life easier by managing the complexity of their various requirements. But sometimes, they have a conflict over not just the version of Font Awesome to load, but on the version of this plugin that they require in order to get the job done. Behind the scenes, only one copy of the plugin is actually loaded. Any subsequent plugins are forced to use that version that's already loaded. Those subsequently loaded plugins might have a problem using the loaded version and this is where they'll warn you about that so you can see the problem clearly and (hopefully) quickly work out a solution."),s.a.createElement("p",{className:x.a.explanation},"Unfortunately, we've got one of those situations here. The likely solution is to upgrade one of these to its latest version. Or, if you've installed a plugin that includes the Font Awesome plugin and you've also installed the Font Awesome plugin directly yourself, you might be able to resolve this conflict by deactivating the version of the Font Awesome plugin you installed yourself."),s.a.createElement("p",{className:x.a.explanation},"If you have reason to keep your own installation of the plugin in addition to another plugin and think you could resolve this problem by downgrading your own installation of the plugin, you find older releases of the plugin on ",s.a.createElement("a",{href:"https://fontawesome.com"},"our website"),"."),s.a.createElement("p",{className:x.a.explanation},"In most cases, if you've installed a plugin that embeds this plugin, you do not need to also have your own copy of this plugin installed, and it may be simpler to just deactivate and uninstall it, unless it's the only copy of the plugin."),s.a.createElement("p",{className:x.a.explanation},s.a.createElement("b",null,"Loaded Plugin Version: ")," ",e.pluginVersion),s.a.createElement("table",{className:f()("widefat","striped")},s.a.createElement("thead",null,s.a.createElement("tr",{className:x.a["table-header"]},s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Version Requirement"))),s.a.createElement("tbody",null,e.warnings.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",{className:G.a.name},e.name),s.a.createElement("td",{className:G.a.name},e.constraint))}))))},J=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.putData,n=!!t.conflicts,l=n?"conflict":"good";return s.a.createElement("div",{className:w.a["font-awesome-admin-view"]},s.a.createElement("h1",null,"Font Awesome"),s.a.createElement("div",null,s.a.createElement("p",{className:f()(w.a.status,w.a[l])},s.a.createElement("span",{className:w.a["status-label"]},"Status: "),s.a.createElement(b.a,{className:w.a.icon,icon:n?v.b:v.e})),n?s.a.createElement(U,{clientRequirements:t.conflicts["client-reqs"],conflict:t.conflicts.req,adminClientInternal:t.adminClientInternal,adminClientExternal:t.adminClientExternal}):s.a.createElement(j,{spec:t.currentLoadSpec}),s.a.createElement(F,{releases:t.releases,currentOptions:t.options,putData:a,isSubmitting:this.props.isSubmitting,hasSubmitted:this.props.hasSubmitted,submitSuccess:this.props.submitSuccess,submitMessage:this.props.submitMessage,error:this.props.error,adminClientInternal:t.adminClientInternal}),!n&&s.a.createElement(U,{clientRequirements:t.clientRequirements,adminClientInternal:t.adminClientInternal,adminClientExternal:t.adminClientExternal}),s.a.createElement(I,{clients:t.unregisteredClients}),t.pluginVersionWarnings&&s.a.createElement(T,{warnings:t.pluginVersionWarnings,pluginVersion:t.pluginVersion})))}}]),t}(s.a.Component),X=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=window.wpFontAwesomeOfficial;if(!n)throw Error("Well, this is embarrassing. The plugin doesn't seem to be installed correctly.");return a.state={data:null,error:null,isLoading:!0,isSubmitting:!1,hasSubmitted:!1,submitSuccess:!1,submitMessage:null,wpApiSettings:n},a.getData=a.getData.bind(Object(d.a)(Object(d.a)(a))),a.putData=a.putData.bind(Object(d.a)(Object(d.a)(a))),a.handlePutResponse=a.handlePutResponse.bind(Object(d.a)(Object(d.a)(a))),a.handlePutError=a.handlePutError.bind(Object(d.a)(Object(d.a)(a))),a.handleGetResponse=a.handleGetResponse.bind(Object(d.a)(Object(d.a)(a))),a.handleGetError=a.handleGetError.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleGetResponse",value:function(e){var t=e.status,a=e.data;200===t?this.setState({data:a,isLoading:!1}):this.setState({error:new Error("failed to get data"),isLoading:!1})}},{key:"handlePutResponse",value:function(e){var t=e.status,a=e.data;200===t?this.setState({data:a,isSubmitting:!1,hasSubmitted:!0,error:null,submitSuccess:!0,submitMessage:"Changes saved"}):this.setState({isSubmitting:!1,hasSubmitted:!0,error:null,submitSuccess:!1,submitMessage:"Failed to save changes"})}},{key:"handlePutError",value:function(e){var t=e.response.data,a=t.code,n=t.message,s="";switch(a){case"cant_update":s=n;break;case"rest_no_route":case"rest_cookie_invalid_nonce":s="Sorry, we couldn't reach the server";break;default:s="Update failed"}this.setState({isSubmitting:!1,hasSubmitted:!0,error:null,submitSuccess:!1,submitMessage:s})}},{key:"handleGetError",value:function(e){this.setState({error:e})}},{key:"getData",value:function(){p.a.get("".concat(this.state.wpApiSettings.api_url,"/config"),{headers:{"X-WP-Nonce":this.state.wpApiSettings.api_nonce}}).then(this.handleGetResponse).catch(this.handleGetError)}},{key:"putData",value:function(e){this.setState({isSubmitting:!0,hasSubmitted:!1}),p.a.put("".concat(this.state.wpApiSettings.api_url,"/config"),e,{headers:{"X-WP-Nonce":this.state.wpApiSettings.api_nonce}}).then(this.handlePutResponse).catch(this.handlePutError)}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.getData()}},{key:"render",value:function(){if(this.state.error)throw this.state.error;if(!this.state.isLoading&&!this.state.data)throw new Error("missing data");return s.a.createElement("div",{className:"wrap"},this.state.isLoading?s.a.createElement(E,null):s.a.createElement(J,{data:this.state.data,putData:this.putData,isSubmitting:this.state.isSubmitting,hasSubmitted:this.state.hasSubmitted,submitSuccess:this.state.submitSuccess,submitMessage:this.state.submitMessage,error:this.state.error}))}}]),t}(n.Component),B=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.message;return s.a.createElement("div",{className:"error-fallback"},"Sorry, we've experienced some error.",e&&s.a.createElement("div",{className:"additional-message"},e))}}]),t}(s.a.Component),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?s.a.createElement(B,null):this.props.children}}]),t}(s.a.Component);i.a.render(s.a.createElement(Y,null,s.a.createElement(X,null)),document.getElementById("font-awesome-official-admin"))}},[[32,2,1]]]);
//# sourceMappingURL=main.9ad845dc.chunk.js.map