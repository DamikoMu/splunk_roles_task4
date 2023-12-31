import{a as t}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as s}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as a}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var n=e(a()),o=e(s());var i={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:`## Overview

Pie charts are effective at showing the value of different fields in terms of relative importance or volume out of a whole. Pie charts are better at showing visual differences, without the need to know specific values for that field, which can only be done on hover in Dashboard Studio.

Using a simple \`stats\` command that generates two columns is an effective way to compare values over a single category. 

\`|stats count by host\``}},viz_gezCclRK:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Default Configuration"},viz_Zy9SbUug:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Labels off",options:{"chart.showLabels":!1,labelDisplay:"off"}},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Pie
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "labelDisplay": "valuesAndPercentage"
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`
### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "labelDisplay": "off"
    },
    "context": {}
}
\`\`\``}},viz_FiYpf6Mn:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Show Percentage On",options:{labelDisplay:"valuesAndPercentage"}},viz_JZWNTqRt:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Show Percentage On",options:{showDonutHole:!0}},viz_VVwXSWkg:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Pie Chart",
    "description": "Show Percentage On",
    "options": {
        "showDonutHole": true
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:175}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:175,w:323,h:343}},{item:"viz_FiYpf6Mn",type:"block",position:{x:0,y:518,w:323,h:368}},{item:"viz_RVNSVBHv",type:"block",position:{x:323,y:175,w:295,h:343}},{item:"viz_Hb2gqYLi",type:"block",position:{x:323,y:518,w:295,h:368}},{item:"viz_Zy9SbUug",type:"block",position:{x:618,y:175,w:313,h:343}},{item:"viz_JZWNTqRt",type:"block",position:{x:618,y:518,w:313,h:368}},{item:"viz_n67ApED4",type:"block",position:{x:931,y:175,w:269,h:343}},{item:"viz_VVwXSWkg",type:"block",position:{x:931,y:518,w:269,h:368}}],globalInputs:[]},description:"View proportional relationships between categorical data with pie and donut charts",title:"Pie Chart"};(0,o.default)(n.default.createElement(t,{definition:i}),{pageTitle:"Pie Chart",hideFooter:!0,layout:"fixed"});
