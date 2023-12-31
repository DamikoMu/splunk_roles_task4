import{a as n}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as i}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as r}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var o=e(r()),a=e(i());var t={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
A number input allows users to select a single number from a dropdown. When configuring from the UI, users enter a mininum, a maximum, a step and a default value. Numbers can be used to change how many values are returned in a search or change the number of rows shown in a table

### Source  for Number Input
\`\`\`
{
    "type": "input.number",
    "options": {
        "defaultValue": 10,
        "token": "number",
        "min": 0,
        "max": 10,
        "step": 1
    },
    "title": "Number Input Title"
}
\`\`\``}},viz_gMr0oNmO:{type:"splunk.table",title:"Return $num$ Values",dataSources:{primary:"ds_search1"},description:""},viz_U1bGC44o:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup outages_example.csv
| stats count by "Event Description"
| head $number$
\`\`\`
### Source For Single Value
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {},
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| stats count by "Event Description"
| head $num$`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_uPWAplUK:{options:{defaultValue:5,token:"num",min:0,max:10,step:1},title:"Number Input Title",type:"input.number"}},layout:{type:"grid",options:{},structure:[{item:"viz_RBdQ2qQ5",type:"block",position:{x:0,y:0,w:1440,h:385}},{item:"viz_gMr0oNmO",type:"block",position:{x:0,y:385,w:600,h:375}},{item:"viz_U1bGC44o",type:"block",position:{x:600,y:385,w:600,h:375}}],globalInputs:["input_uPWAplUK"]},description:"Set tokens by selecting a number from a dropdown",title:"Number Input"};(0,a.default)(o.default.createElement(n,{definition:t}),{pageTitle:"Number Input",hideFooter:!0,layout:"fixed"});
