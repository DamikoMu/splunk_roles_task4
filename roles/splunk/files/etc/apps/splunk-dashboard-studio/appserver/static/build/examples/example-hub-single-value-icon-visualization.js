import{a as n}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as s}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as a}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var t=e(a()),o=e(s());var i={visualizations:{viz_rdQEoV7s:{type:"splunk.markdown",options:{markdown:`## Overview
Icons can be added to single values to help signal important changes and give a better understanding to what the single value represents. This is useful in situations where the icon accurately represents the data, and it is undesirable to use a viz title or description to explain the metric. 

The following examples show a few configurations of Single Values with icons beside them. Although very similar to regular single values, there are a few unique options available for the icons particularly. `}},viz_a7ZJlbts:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search1"}},viz_sm0OIKft:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Basic Configuration w/Default Icon
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_7ib0hJVa:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search2"},options:{majorValue:"> primary | seriesByName('percent') | lastPoint()",trendValue:"> primary | seriesByName('percent') | delta(-2)"}},viz_W2AiYNs6:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| top host limit=5
\`\`\`

### Specify Series for Major and Trend Value
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "majorValue": "> primary | seriesByName('percent') | lastPoint()",
        "trendValue": "> primary | seriesByName('percent') | delta(-2)"
    },
    "context": {}
}
\`\`\``}},viz_ndYHA4eM:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search1"},options:{underLabel:"Icon Label",iconOpacity:.2,icon:"pencil",iconPosition:"top"}},viz_OZ6lF8tO:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Label, Opacity, Position, Pencil Icon
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "underLabel": "Icon Label",
        "iconOpacity": 0.2,
        "icon": "pencil",
        "iconPosition": "top"
    },
    "context": {}
}
\`\`\``}},viz_TgpLU91P:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search1"},options:{icon:"star",iconPosition:"> majorValue|rangeValue(iconPositionValues)",majorValue:">primary |seriesByName('count')|lastPoint()"},context:{iconPositionValues:[{from:3,value:"top"},{to:3,value:"after"}]}},viz_FCJLCn2x:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Icon Position based on Major Value
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "icon": "star",
        "iconPosition": "> majorValue|rangeValue(iconPositionValues)",
        "majorValue": ">primary |seriesByName('count')|lastPoint()"
    },
    "context": {
        "iconPositionValues": [
            {
                "from": 50,
                "value": "top"
            },
            {
                "to": 50,
                "value": "after"
            }
        ]
    }
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| top host limit=5`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_rdQEoV7s",type:"block",position:{x:0,y:0,w:1440,h:185}},{item:"viz_a7ZJlbts",type:"block",position:{x:0,y:185,w:304,h:354}},{item:"viz_ndYHA4eM",type:"block",position:{x:0,y:539,w:304,h:422}},{item:"viz_sm0OIKft",type:"block",position:{x:304,y:185,w:296,h:354}},{item:"viz_OZ6lF8tO",type:"block",position:{x:304,y:539,w:296,h:422}},{item:"viz_7ib0hJVa",type:"block",position:{x:600,y:185,w:300,h:354}},{item:"viz_TgpLU91P",type:"block",position:{x:600,y:539,w:300,h:422}},{item:"viz_W2AiYNs6",type:"block",position:{x:900,y:185,w:300,h:354}},{item:"viz_FCJLCn2x",type:"block",position:{x:900,y:539,w:300,h:422}}],globalInputs:[]},description:"Use Icons to indicate important changes to your Single Value metrics",title:"Single Value Icons"};(0,o.default)(t.default.createElement(n,{definition:i}),{pageTitle:"Single Value Icon",hideFooter:!0,layout:"fixed"});
