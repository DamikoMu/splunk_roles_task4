import{a as he,b as w,c as pe}from"./chunk-2UWVUN5D.js";import{a as G,b as U}from"./chunk-LOTPH2DA.js";import{f as fe,g as H}from"./chunk-7FBZS5HM.js";import{a as W}from"./chunk-K4L4UD2T.js";import{a as N}from"./chunk-EHCM4RJG.js";import{$ as ue,A as I,B as M,C as $,D as E,E as y,F as x,G as e,H as a,I as L,K as D,L as T,R as ce,S as de,T as me,aa as C,v as oe,w as se,y as b,z as k}from"./chunk-PIFSJXRW.js";import{a as ie}from"./chunk-RUCX6VSM.js";import{g as le,h as re,i as ne}from"./chunk-PRO7PQGQ.js";import{c as ae}from"./chunk-2GUK4B22.js";import{e as Re}from"./chunk-V5HIW6KV.js";import"./chunk-YCDSEQ2I.js";import{Ja as ee,La as je,Ma as Oe,Na as ze,Qa as z,Sa as te}from"./chunk-25ZUMQES.js";import"./chunk-KFU7BJII.js";import"./chunk-FGFH2JG2.js";import"./chunk-FQXD4G67.js";import{i as f}from"./chunk-VV54FNKQ.js";var Y=f(ie(),1),Ge=f(ie(),1),K=f(se(),1),We=f(se(),1),q=f(oe(),1),He=f(oe(),1);var Ee=f(Re(),1),B=f(Oe(),1),P=f(ze(),1),Ce=f(je(),1);var _e="scheduled/views",ge=t=>ee(void 0,[t],function*({dashboardId:l,app:i,emailTo:r,emailBCC:c,emailCC:d,emailPriority:o,emailSubject:m,emailMessage:s}){let n=`| sendemail use_ssl=false use_tls=false to="${r}" cc="${d}" bcc="${c}" priority=${o} sendpdf="True" from="splunk" subject="${m}" message="${s}" papersize="letter" paperorientation="portrait" pdfview="${l}" sendtestemail="1"`;return yield Ee.default.create({search:n},{app:i,owner:B.username}).getResults().first().toPromise()}),be=({enabled:t,cronSchedule:l,dashboardId:i,app:r,emailTo:c,emailBCC:d,emailCC:o,emailPriority:m,emailSubject:s,emailMessage:n})=>{let p="_ScheduledView__".concat(i),g=(0,P.createRESTURL)(`${_e}/${p}?output_mode=json`,{app:r,owner:B.username});return z(g,{method:"POST",body:Ce.default.stringify({cron_schedule:l,"action.email.to":c,"action.email.bcc":d,"action.email.cc":o,"action.email.priority":m,"action.email.subject":s,"action.email.message":n,is_scheduled:t})})},Fe=(t,l)=>{let i=(0,P.createRESTURL)(`${_e}/${t}?output_mode=json`,{app:l,owner:B.username});return z(i,{method:"GET"})},xe=()=>{let t=(0,P.createRESTURL)("properties/alert_actions/email/allowedDomainList");return te(t)};var X={};M(X,{default:()=>Ue});$(X,Ge);var ve,ye,Ue=(ye=(ve=Y.default)==null?void 0:ve.default)!=null?ye:Y.default,Ie={};M(Ie,{default:()=>Me});$(Ie,We);var Se,De,Me=(De=(Se=K.default)==null?void 0:Se.default)!=null?De:K.default,$e={};M($e,{default:()=>Le});$($e,He);var Te,we,Le=(we=(Te=q.default)==null?void 0:Te.default)!=null?we:q.default,Ne=C(T)`
    min-width: 80vw;
    will-change: opacity;

    ${pe}
`,Ve=C(he)`
    textarea[disabled] {
        ${(0,D.pick)({enterprise:{dark:ue.css`
                    color: ${D.variables.textDisabledColor};
                    background-color: ${D.variables.borderColor};
                    border-color: ${D.variables.backgroundColorHover};
                `}})}
    }
`,Je=C(w)`
    width: 250px !important;
`,_=C(H)`
    max-width: 1000px;
`,Ye=C(T.Footer)`
    display: flex;
    justify-content: space-between;
`,Ae=C.hr`
    margin: 20px 0;
    color: lightgray;
`,Be=C.div`
    display: flex;
    flex-direction: row;
    > *:first-child {
        margin-top: 0;
        margin-left: 0;
    }
    > * {
        margin-top: 0;
        margin-left: 20px;
    }
    @media screen and (max-width: 1440px) {
        flex-direction: column;
        > * {
            margin-top: 10px;
            margin-left: 0;
        }
    }
`,v=e.createContext({disabled:!1}),h=t=>{let{disabled:l}=e.useContext(v),i={fontWeight:"lighter",color:"#6b7785"};return l&&(i.filter="greyscale(75%)",i.opacity=.5),e.createElement(G,{inline:!0,style:i},t.children)},Pe=t=>{var l=I(t,[]);let{disabled:i}=e.useContext(v);return e.createElement(Ve,k(b({},l),{disabled:i}))},S=t=>{var l=t,{list:i}=l,r=I(l,["list"]);let{disabled:c}=e.useContext(v);return e.createElement(w,k(b({},r),{disabled:c}),i.map((d,o)=>e.createElement(w.Option,{key:d,value:o,label:`${d}`})))},Ke=t=>{let{disabled:l}=e.useContext(v);return e.createElement(Je,k(b({},t),{disabled:l}),t.children)},V=t=>y(void 0,null,function*(){if(!t)return"";let l=t.replace(/\s/g,"").split(","),i=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;if(l.some(c=>!i.test(c)))return me;let r;try{r=yield xe()}catch(c){return(0,a._)("Unable to contact the Splunk server for email domain validation")}if(r.length>0){let c=r.toLowerCase().replace(/\s/g,"").split(",");if(l.some(d=>{let o=d.toLowerCase().split("@")[1];return!c.includes(o)}))return de}return""}),qe={5:(0,a._)("Very Low"),4:(0,a._)("Low"),3:(0,a._)("Normal"),2:(0,a._)("High"),1:(0,a._)("Critical")},Xe={5:"priority-button-very-low",4:"priority-button-low",3:"priority-button-normal",2:"priority-button-high",1:"priority-button-critical"},Ze=C.div`
    width: 300px;
    height: '32px';
    overflow: 'visible';
    @media screen and (max-width: 1440px) {
        width: auto;
        height: auto;
    }
`,A=t=>{var l=t,{errorText:i,sidebarContent:r,name:c}=l,d=I(l,["errorText","sidebarContent","name"]);return e.createElement(Be,{style:{width:"80%"}},e.createElement("div",{style:{width:"100%"}},e.createElement(Pe,b({error:!!i,name:c},d)),i&&e.createElement("small",{style:{color:"red",marginTop:"-10px"},"data-test":`${c}-error-text`},i)),e.createElement("div",null,e.createElement(Ze,null,e.createElement("div",{style:{flexShrink:0,marginTop:"-6px"}},r))))},Qe=e.memo(t=>{let[l,i]=e.useState(!1),{disabled:r}=e.useContext(v);return e.createElement(e.Fragment,null,e.createElement(_,{label:(0,a._)("Email To"),tabIndex:0,controlsLayout:"stack"},e.createElement(A,{placeholder:(0,a._)("Enter email addresses"),multiline:!0,rowsMax:5,errorText:t.error,name:"emailTo",value:t.emailTo,onChange:t.handleGenericEmailChange,sidebarContent:e.createElement(h,null,(0,a._)("Comma separated list of email addresses."))}),e.createElement(U,{"data-test-name":"show-cc-and-bcc",disabled:r,onClick:()=>{i(!l)},selected:l,appearance:"toggle"},(0,a._)("Show CC and BCC"))),l&&e.createElement(_,{label:(0,a._)("CC")},e.createElement(A,{placeholder:(0,a._)("Enter CC addresses"),multiline:!0,rowsMax:3,name:"emailCC",value:t.emailCC,onChange:t.handleGenericEmailChange})),l&&e.createElement(_,{label:(0,a._)("BCC")},e.createElement(A,{placeholder:(0,a._)("Enter BCC addresses"),multiline:!0,rowsMax:3,name:"emailBCC",value:t.emailBCC,onChange:t.handleGenericEmailChange})),e.createElement(_,{label:(0,a._)("Priority"),tabIndex:0},e.createElement("div",{"data-test":"email-priority"},Object.entries(qe).map(([c,d],o)=>e.createElement(L,{inline:!0,key:c,style:{fontSize:"90%",fontWeight:"bold"},appearance:"toggle",disabled:r,onClick:m=>{t.handleGenericEmailChange(m,{name:"emailPriority",value:c})},selected:t.emailPriority===c,"data-test-selected":t.emailPriority===c,"data-test-name":Xe[c]},d)))),e.createElement(_,{label:(0,a._)("Subject"),tabIndex:0},e.createElement(A,{placeholder:(0,a._)("Splunk Dashboard: $dashboard.label$"),name:"emailSubject",value:t.emailSubject,onChange:t.handleGenericEmailChange,sidebarContent:e.createElement(h,null,(0,a._)("The email subject, recipients, and messages can include tokens that insert text based on the search results."),e.createElement("br",null),e.createElement(W,{to:ae(),openInNewContext:!0},(0,a._)("Learn more")))})),e.createElement(_,{label:(0,a._)("Message"),tabIndex:0},e.createElement(A,{placeholder:(0,a._)("A dashboard was generated for $dashboard.label$"),name:"emailMessage",value:t.emailMessage,onChange:t.handleGenericEmailChange,multiline:!0,rowsMin:8,rowsMax:10})))}),et=[(0,a._)("Sunday"),(0,a._)("Monday"),(0,a._)("Tuesday"),(0,a._)("Wednesday"),(0,a._)("Thursday"),(0,a._)("Friday"),(0,a._)("Saturday")],J=[(0,a._)("12:00 midnight"),...Array.from({length:11},(t,l)=>`${l+1}:00am`),(0,a._)("12:00 noon"),...Array.from({length:11},(t,l)=>`${l+1}:00pm`)],ke={hourly:{label:(0,a._)("Run every hour"),cronDefault:"5 * * * *"},daily:{label:(0,a._)("Run every day"),cronDefault:"0 18 * * *"},weekly:{label:(0,a._)("Run every week"),cronDefault:"0 18 * * 1"},monthly:{label:(0,a._)("Run every month"),cronDefault:"0 18 11 * *"},cron:{label:(0,a._)("Run by Cron"),cronDefault:"0 0 * * *"}},tt=t=>t+(t==31||t==21||t==1?"st":t==22||t==2?"nd":t==23||t==3?"rd":"th"),at=({cronExpression:t,handleCronExpressionChange:l})=>{let{disabled:i}=(0,x.useContext)(v),r;/\d+ \* \* \* \*/.test(t)?r="hourly":/\d+ \d+ \* \* \*/.test(t)?r="daily":/\d+ \d+ \* \* \d+/.test(t)?r="weekly":/\d+ \d+ \d+ \* \*/.test(t)?r="monthly":r="cron";let[c,d]=(0,x.useState)(r==="cron");c&&(r="cron");let o=(s,n)=>{let p=t.split(" ");return n!==void 0&&(p[s]=`${n}`,l(p.join(" "))),Number(p[s])},m=(()=>{switch(r){case"hourly":return e.createElement(e.Fragment,null,e.createElement(h,null,(0,a._)("At")),e.createElement(S,{list:Array.from({length:60},(s,n)=>`${n}`),value:o(0),onChange:(s,{value:n})=>{o(0,n)},"data-test-name":"pick-minute-in-hour"}),e.createElement(h,null,(0,a._)("Minutes past the hour")));case"daily":return e.createElement(e.Fragment,null,e.createElement(h,null,(0,a._)("At")),e.createElement(S,{list:J,value:o(1),onChange:(s,{value:n})=>{o(1,n)},"data-test-name":"pick-hour-in-day"}));case"weekly":return e.createElement(e.Fragment,null,e.createElement(h,null,(0,a._)("On")),e.createElement(S,{list:et,value:o(4),onChange:(s,{value:n})=>{o(4,n)},"data-test-name":"pick-day-in-week"}),e.createElement(h,null,(0,a._)("At")),e.createElement(S,{list:J,value:o(1),onChange:(s,{value:n})=>{o(1,n)},"data-test-name":"pick-hour-in-day-in-week"}));case"monthly":return e.createElement(e.Fragment,null,e.createElement(h,null,(0,a._)("On")),e.createElement(S,{list:Array.from({length:28},(s,n)=>`the ${tt(n+1)} day`),value:o(2)-1,onChange:(s,{value:n})=>{o(2,n+1)},"data-test-name":"pick-day-in-month"}),e.createElement(h,null,(0,a._)("At")),e.createElement(S,{list:J,value:o(1),onChange:(s,{value:n})=>{o(1,n)},"data-test-name":"pick-hour-in-day-in-month"}));case"cron":return e.createElement(e.Fragment,null,e.createElement(Pe,{inline:!0,value:t,onChange:(s,{value:n})=>{l(n)},"data-test-name":"pick-cron"}),e.createElement(h,null,(0,a._)("e.g 0 18 * * * (every day at 6:00pm)")));default:throw new Error(`Unknown option "${r}"`)}})();return e.createElement(H,{label:(0,a._)("Schedule"),tabIndex:0},e.createElement(Be,{style:{flexShrink:0}},e.createElement(Ke,{disabled:i,value:r,onChange:(s,{value:n})=>{d(n==="cron"),l(ke[n].cronDefault)}},Object.entries(ke).map(([s,{label:n}])=>e.createElement(w.Option,{key:n,label:n,value:s,"data-test-name":s}))),e.createElement("div",null,m)))},R=class extends e.Component{constructor(t){super(t),E(this,"fieldsLoaded"),E(this,"loadInitialFields",()=>y(this,null,function*(){this.setState({loading:!0});let{defaultState:l}=R,i=yield Fe(this.props.dashboardId,this.props.app);try{let{is_scheduled:r=l.enabled,cron_schedule:c=l.cronSchedule,"action.email.to":d=l.emailTo,"action.email.bcc":o=l.emailBCC,"action.email.cc":m=l.emailCC,"action.email.priority":s=l.emailPriority,"action.email.subject":n=l.emailSubject,"action.email.message":p=l.emailMessage}=i.entry[0].content,g={enabled:r,cronSchedule:c,emailTo:d,emailBCC:o,emailCC:m,emailPriority:s,emailSubject:n,emailMessage:p};this.fieldsLoaded=g,this.setState(b({loading:!1},g))}catch(r){this.setState({loading:!1})}})),E(this,"testFieldsOK",()=>y(this,null,function*(){let{emailTo:l,emailBCC:i,emailCC:r,cronSchedule:c,errorA11yToggle:d}=this.state;if(!l&&this.state.enabled)return this.setState({errorBanner:ce,errorA11yToggle:!d,errorEmailTo:(0,a._)("Please fill in this field")}),!1;let[o,m,s]=yield Promise.all([V(l),V(i),V(r)]);return o&&this.setState({errorBanner:o,errorA11yToggle:!d,errorEmailTo:o}),(m||s)&&this.setState({errorBanner:m||s,errorA11yToggle:!d}),o||m||s?!1:c?!0:(this.setState({errorBanner:(0,a._)("Please select a schedule"),errorA11yToggle:!d}),!1)})),E(this,"handleCloseModal",l=>{this.props.onCloseModal(l),l==="cancel"&&this.props.trackEvent(le),setTimeout(()=>{this.setState(b({},R.defaultState))},500)}),E(this,"handleSendTestEmail",()=>y(this,null,function*(){if(!(yield this.testFieldsOK()))return!1;try{return yield ge({dashboardId:this.props.dashboardId,app:this.props.app,emailTo:this.state.emailTo,emailBCC:this.state.emailBCC,emailCC:this.state.emailCC,emailMessage:this.state.emailMessage,emailPriority:this.state.emailPriority,emailSubject:this.state.emailSubject}),!0}catch(i){return this.setState({errorBanner:i.message,errorA11yToggle:!this.state.errorA11yToggle}),!1}})),E(this,"handleEmailFieldChange",(l,{name:i,value:r})=>{this.setState({[i]:r,errorEmailTo:void 0,errorBanner:void 0})}),E(this,"handleSave",()=>y(this,null,function*(){if(!(yield this.testFieldsOK()))return;let{dashboardId:i,trackEvent:r,app:c}=this.props,{enabled:d,emailTo:o,emailBCC:m,emailCC:s,emailMessage:n,emailPriority:p,emailSubject:g,cronSchedule:Q}=this.state,j=F=>F.split(",").filter(u=>u!=="").length;try{let F=yield be({enabled:d,dashboardId:i,app:c,emailTo:o,emailBCC:m,emailCC:s,emailMessage:n,emailPriority:p,emailSubject:g,cronSchedule:Q}),{entry:u}=F,O="";Array.isArray(u)&&u[0]&&u[0].content&&u[0].content.next_scheduled_time&&(O=new Date(u[0].content.next_scheduled_time.replace(/\s*[A-Z]+$/,"")).toLocaleString().replace(/:00 (a|p)\.m/,"$1m")),r(re({enabledInitially:this.fieldsLoaded&&this.fieldsLoaded.enabled||!1,enabledAtSave:this.state.enabled,cronSchedule:Q,emailCountTo:j(o),emailCountBCC:j(m),emailCountCC:j(s),emailSubjectLength:g.length,emailMessageLength:n.length})),this.props.createToast({type:"success",message:e.createElement(e.Fragment,null,e.createElement("strong",null,(0,a._)(`Schedule ${this.state.enabled?"enabled":"disabled"} and saved`)),O&&e.createElement("span",null,e.createElement("br",null),(0,a._)("The next scheduled email will send on "),O)),autoDismiss:!0,dismissOnActionClick:!0,showAction:!1}),this.props.onSave(this.state),this.handleCloseModal("save")}catch(F){let{message:u=""}=F;console.error(F),(!u||/^\d\d\d\s*-?/.test(u))&&(u=(0,a._)("The server did not accept your entry; the chosen schedule may not be supported")),this.setState({errorBanner:u}),r({type:"dashboard.telemetry",data:{pageAction:"scheduledExport.save",success:!1,serverError:u}}),r(ne(F.message))}})),this.state=b({},R.defaultState),this.fieldsLoaded=void 0}componentDidMount(){this.loadInitialFields()}componentDidUpdate(t){t.open===!1&&this.props.open&&this.loadInitialFields()}render(){return e.createElement(Ne,{open:this.props.open},e.createElement(T.Header,{"aria-labelledby":"modal-header-text",title:e.createElement("span",null,e.createElement("span",{id:"modal-header-text"},(0,a._)("Edit Export Schedule")),this.state.loading&&e.createElement("span",{style:{marginLeft:"10px"}},e.createElement(N,null))),onRequestClose:()=>this.handleCloseModal("cancel")}),e.createElement(T.Body,{style:{overflowX:"hidden"}},e.createElement(fe,{appearance:"fill",errors:this.state.errorBanner?[this.state.errorBanner]:[],errorA11yToggle:this.state.errorA11yToggle}),e.createElement(_,{label:(0,a._)("Enable"),tabIndex:0,"data-test":"enable-control-group"},e.createElement(U,{onClick:()=>{this.setState(t=>({enabled:!t.enabled}))},selected:this.state.enabled,disabled:this.state.loading,appearance:"toggle"},this.state.enabled?(0,a._)("Active"):(0,a._)("Inactive"))),e.createElement(v.Provider,{value:{disabled:this.state.loading||!this.state.enabled}},e.createElement(_,{label:(0,a._)("Dashboard"),tabIndex:0},e.createElement(G,null,e.createElement("strong",null,this.props.dashboardName))),e.createElement(at,{cronExpression:this.state.cronSchedule,handleCronExpressionChange:t=>{this.setState({cronSchedule:t})}}),e.createElement(_,{label:""},e.createElement("div",null,e.createElement(h,null,(0,a._)("The schedule is set to the timezone of this Splunk instance")))),e.createElement(Ae,null),e.createElement(Qe,{emailTo:this.state.emailTo,emailBCC:this.state.emailBCC,emailCC:this.state.emailCC,emailPriority:this.state.emailPriority,emailSubject:this.state.emailSubject,emailMessage:this.state.emailMessage,handleGenericEmailChange:this.handleEmailFieldChange,error:this.state.errorEmailTo}),e.createElement(Ae,null))),e.createElement(Ye,null,e.createElement("div",null,e.createElement(L,{appearance:"default","data-test":"modal-cancel",onClick:()=>this.handleCloseModal("cancel"),label:(0,a._)("Cancel")})),e.createElement("div",null,e.createElement(lt,{text:(0,a._)("Send Test Email"),linkIcon:e.createElement(X.ShareActionsIcon,{appearance:"filled",size:"s"}),startPromise:this.handleSendTestEmail}),e.createElement(L,{appearance:"primary",onClick:this.handleSave,"data-test":"modal-save",label:this.state.enabled?(0,a._)("Save & Enable"):(0,a._)("Save & Disable")}))))}},Z=R;E(Z,"defaultProps",{onCloseModal:()=>{},onSave:()=>{},trackEvent:()=>{},createToast:()=>{}});E(Z,"defaultState",{loading:!1,emailTo:"",emailBCC:"",emailCC:"",emailPriority:"3",emailSubject:(0,a._)("Splunk Dashboard: $dashboard.label$"),emailMessage:(0,a._)("A dashboard was generated for $dashboard.label$"),enabled:!0,errorBanner:void 0,errorA11yToggle:!1,errorEmailTo:void 0,cronSchedule:"0 18 * * *"});function lt(t){let{startPromise:l}=t,[i,r]=(0,x.useState)(!1),[c,d]=(0,x.useState)(void 0);(0,x.useEffect)(()=>{if(!i){let m=setTimeout(()=>{d(void 0)},1e3);return()=>clearTimeout(m)}return()=>{}});let o=(0,x.useCallback)(()=>{r(!0);let m=e.createElement(Me,{height:"14px",width:"14px",preserveAspectRatio:"xMaxYMid"}),s=e.createElement(Le,{height:"14px",width:"14px",preserveAspectRatio:"xMaxYMid"});l().then(n=>{r(!1),d(n?m:s)}).catch(()=>{r(!1),d(s)})},[l]);return e.createElement(W,{onClick:o,style:{marginRight:"20px",display:"inline-flex",alignItems:"center",verticalAlign:"middle"}},t.linkIcon&&e.createElement("span",{style:{height:"16px"}},t.linkIcon),e.createElement("span",{style:{margin:"0 4px"}},t.text),i&&e.createElement(N,{size:"small",style:{height:"14px"}}),c)}var Dt=e.memo(Z);export{Dt as default};
