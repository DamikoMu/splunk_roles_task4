import{a}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as r}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as o}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var t=e(o()),i=e(r());var n={visualizations:{viz_OPQATCGl:{type:"splunk.fillergauge",dataSources:{primary:"ds_search1"},title:"Filler Gauge",description:"Default Confguration",options:{},context:{},showProgressBar:!1,showLastUpdated:!1},viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
Use a filler gauge to map a value in relation to a range. A filler gauge includes a value scale container that fills and empties as the current value changes. The fill level shows where the current value is on the value scale.

Any search that returns a single value for a single field would work with a filler gauge. The following examples use the following \`makeresults\` query
### SPL
\`\`\`
| makeresults
| eval count=random()%100
| fields count
\`\`\``}},viz_02J4knli:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "dataSources": {
        "primary": "ds_search1"
    }
    "options": {},
    "context": {}
}
\`\`\``}},viz_8DHPZzts:{type:"splunk.fillergauge",options:{labelDisplay:"off",backgroundColor:"transparent",orientation:"horizontal"},dataSources:{primary:"ds_search1"},title:"Filler Gauge",description:"Horizontal, Background Transparent, No Labels",showProgressBar:!1,showLastUpdated:!1},viz_wTp98CwR:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "options": {
        "labelDisplay": "off",
        "backgroundColor": "transparent",
        "orientation": "horizontal"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\``}},viz_89VZhpcS:{type:"splunk.fillergauge",dataSources:{primary:"ds_search1"},title:"Filler Gauge",description:"Percentages for Value and Range",options:{labelDisplay:"percentage",valueDisplay:"percentage"},showProgressBar:!1,showLastUpdated:!1},viz_fUNTuXpK:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "labelDisplay": "percentage",
        "valueDisplay": "percentage"
    }
    "context": {}
}
\`\`\``}},viz_SvRSI63X:{type:"splunk.fillergauge",title:"Filler Gauge",description:"Major Tick Marks in Units of 25",dataSources:{primary:"ds_search1"},showProgressBar:!1,showLastUpdated:!1,options:{majorTickInterval:25}},viz_4lxUHIyp:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "majorTickInterval": 25
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count=random()%100
| fields count`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{display:"auto-scale"},structure:[{item:"viz_omCpZ2ww",type:"block",position:{x:0,y:0,w:1440,h:268}},{item:"viz_OPQATCGl",type:"block",position:{x:0,y:268,w:300,h:311}},{item:"viz_89VZhpcS",type:"block",position:{x:0,y:579,w:300,h:335}},{item:"viz_02J4knli",type:"block",position:{x:300,y:268,w:300,h:311}},{item:"viz_fUNTuXpK",type:"block",position:{x:300,y:579,w:300,h:335}},{item:"viz_8DHPZzts",type:"block",position:{x:600,y:268,w:294,h:311}},{item:"viz_SvRSI63X",type:"block",position:{x:600,y:579,w:294,h:335}},{item:"viz_wTp98CwR",type:"block",position:{x:894,y:268,w:306,h:311}},{item:"viz_4lxUHIyp",type:"block",position:{x:894,y:579,w:306,h:335}}],globalInputs:[]},description:"Visualize a single numeric value and represent values in relation to a limit with a filler gauge",title:"Filler Gauge"};(0,i.default)(t.default.createElement(a,{definition:n}),{pageTitle:"Filler Gauge",hideFooter:!0,layout:"fixed"});
