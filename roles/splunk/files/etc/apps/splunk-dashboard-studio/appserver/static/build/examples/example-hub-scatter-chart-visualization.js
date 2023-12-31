import{a as e}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as s}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as a}from"../chunks/chunk-FQXD4G67.js";import{i as t}from"../chunks/chunk-VV54FNKQ.js";var n=t(a()),r=t(s());var i={visualizations:{viz_6nQA9HbF:{type:"splunk.markdown",options:{markdown:`## Overview
Scatter charts are used to identify correlations between discrete points by plotting multiple data points on a graph. The shape that the points make can indicate positive, negative or no correlation between the fields on the x and y axis. Multiple series can also be plotted, with each series being a separate color. 

Using the \`table\` command to return three columns is a good rule of thumb when plotting a scatter chart. By default, the order of columns returned would map to the x-axis, y-axis, and the categories of interest respectively. 

`}},viz_dEmLSTLC:{type:"splunk.scatter",dataSources:{primary:"ds_scatter"},title:"Scatter Chart",description:"Default Configuration"},viz_DWRcsfE2:{type:"splunk.markdown",options:{markdown:`### SPL Query
\`\`\`
| inputlookup examples.csv
| fields nutrients*
| search "nutrients_protein (g)" != null
| head 500
| table "nutrients_protein (g)" nutrients_calories  nutrients_group
\`\`\`
### Source Definition 
\`\`\`
{
    "type": "splunk.scatter",
    "dataSources": {
        "primary": "ds_scatter"
    },
    "options": {},
    "context": {}
}

\`\`\``}},viz_DsjRH59i:{type:"splunk.scatter",options:{x:"> primary | seriesByName('nutrients_calories')",y:"> primary | seriesByName('nutrients_protein (g)')",markerSize:1},dataSources:{primary:"ds_scatter"},title:"Scatter Chart",description:"X and Y Fields Specified, Smaller Markers"},viz_G2zjCGiT:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "splunk.scatter",
    "options": {
        "x": "> primary | seriesByName('nutrients_calories')",
        "y": "> primary | seriesByName('nutrients_protein (g)')",
        "markerSize": 1
    },
    "dataSources": {
        "primary": "ds_scatter"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_scatter:{type:"ds.search",options:{query:'| inputlookup examples.csv| fields nutrients*| search "nutrients_protein (g)" != null| head 500| table "nutrients_protein (g)" nutrients_calories  nutrients_group',queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_6nQA9HbF",type:"block",position:{x:0,y:0,w:1440,h:158}},{item:"viz_dEmLSTLC",type:"block",position:{x:0,y:158,w:694,h:400}},{item:"viz_DsjRH59i",type:"block",position:{x:0,y:558,w:694,h:400}},{item:"viz_DWRcsfE2",type:"block",position:{x:694,y:158,w:506,h:400}},{item:"viz_G2zjCGiT",type:"block",position:{x:694,y:558,w:506,h:400}}],globalInputs:[]},description:"Examine correlations in your data",title:"Scatter Chart"};(0,r.default)(n.default.createElement(e,{definition:i}),{pageTitle:"Scatter Chart",hideFooter:!0,layout:"fixed"});
