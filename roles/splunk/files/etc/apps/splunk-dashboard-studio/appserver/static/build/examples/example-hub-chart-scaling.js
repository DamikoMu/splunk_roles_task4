import{a as t}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as s}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var o=e(s()),i=e(a());var n={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:`## Overview
Adjusting scaling can help viewers of your dashboard get a better understanding of your data. By splitting series and adjusting axis scales, you can make sure you display your data in a way that makes more sense for the user. For example, a log scale quickly provides context about the magnitude of different events. 

The below examples showcase simple use cases of available scaling options in dashboards.`}},viz_25GoP8BK:{type:"splunk.area",dataSources:{primary:"ds_search1"},title:"Area Chart With Scaling Adjustment",description:"Log Scale, Split Series, Independent Axis, Abbreviations Off",options:{yAxisAbbreviation:"off",showSplitSeries:!0,showIndependentYRanges:!0,yAxisScale:"log"}},viz_iRt4kmkB:{type:"splunk.markdown",options:{markdown:`### SPL For Area Chart
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host2 host18 host19 host248)
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "yAxisAbbreviation": "off",
        "showSplitSeries": true,
        "showIndependentYRanges": true,
        "yAxisScale": "log"
    },
    "context": {}
}
\`\`\`
`}},viz_SVFZ5kdo:{type:"splunk.bar",dataSources:{primary:"ds_FgPlRCzA"},title:"Bar Chart with Scaling Adjustment",description:"Split Series and Independent Y Range",options:{showSplitSeries:!0,showIndependentYRanges:!0}},viz_lLqfBZ0k:{type:"splunk.markdown",options:{markdown:`### SPL For Bar Chart
\`\`\`
| inputlookup outages_example.csv
| top Tags limit=5
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.bar",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "showSplitSeries": true,
        "showIndependentYRanges": true
    },
    "context": {}
}
\`\`\`
`}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host2 host18 host19 host248)
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"},ds_FgPlRCzA:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| top Tags limit=5`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_3X53kBj2",type:"block",position:{x:0,y:0,w:1440,h:167}},{item:"viz_25GoP8BK",type:"block",position:{x:0,y:167,w:698,h:463}},{item:"viz_SVFZ5kdo",type:"block",position:{x:0,y:630,w:698,h:387}},{item:"viz_iRt4kmkB",type:"block",position:{x:698,y:167,w:502,h:463}},{item:"viz_lLqfBZ0k",type:"block",position:{x:698,y:630,w:502,h:387}}],globalInputs:[]},description:"Adjust chart scaling properties to help contextualize your data",title:"Chart Scaling"};(0,i.default)(o.default.createElement(t,{definition:n}),{pageTitle:"Chart Scaling",hideFooter:!0,layout:"fixed"});
