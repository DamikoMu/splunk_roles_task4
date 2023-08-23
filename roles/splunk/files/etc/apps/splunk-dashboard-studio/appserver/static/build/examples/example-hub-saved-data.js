import{a}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as n}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as t}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var r=e(t()),s=e(n());var o={visualizations:{viz_rbsVgtoZ:{type:"splunk.markdown",options:{markdown:`## Overview
Saved searches refer to reports, whether within the same app or different apps. You can use saved data sources on a schedule, which lightens the processing loads and concurrent data source limits. 

When a saved search is added into the dashboard definition, it becomes available to select in the datasource editor panel. 

The following provides a template on how you can use a saved search in your dashboards. Copy and paste the following code and make the adjustments you need to make it work in your dashboard. You should then see your resulting saved search appear in the datasource editor,`}},viz_cUYmS9vD:{type:"splunk.markdown",options:{markdown:`### Saved Search from Another App
\`\`\`
"ds_saved_search_from_app": {
 "type": "ds.savedSearch",
 "options": {
  "ref": "<your data source name>",
   "app": "<your-app-name>"
 },
 "name": "Saved Search Data Source From App"
}
\`\`\``}},viz_w7HI1R9h:{type:"splunk.markdown",options:{markdown:`### Saved Search with Additional Options
\`\`\`
"ds_saved_search_from_app": {
 "type": "ds.savedSearch",
 "options": {
  "ref": "<your data source name>",
  "refresh":"5s",
  "refreshType": "interval"
 },
 "name": "Saved Search Data with Refresh"
}
\`\`\``}},viz_T3X9eU4a:{type:"splunk.markdown",options:{markdown:`### Saved Search From Search and Reporting
\`\`\`
"ds_saved_search_from_sr": {
 "type": "ds.savedSearch",
 "options": {
  "ref": "<your data source name>"
 },
 "name": "Saved Search Data Source From S&R"
}
\`\`\``}}},dataSources:{"ds_saved_search_from_S&R":{type:"ds.savedSearch",options:{ref:"<your report name>"},name:"Saved Search Data Source From S&R"},ds_saved_search_from_app:{type:"ds.savedSearch",options:{ref:"<your data source name>",app:"<your-app-name>"},name:"Saved Search Data Source From App"},"ds_saved_search_from_S&R_specified":{type:"ds.savedSearch",options:{ref:"<your data source name>",refresh:"5s",refreshType:"interval"},name:"Saved Search Data Source From S&R"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_rbsVgtoZ",type:"block",position:{x:0,y:0,w:1440,h:175}},{item:"viz_T3X9eU4a",type:"block",position:{x:0,y:175,w:391,h:248}},{item:"viz_w7HI1R9h",type:"block",position:{x:391,y:175,w:399,h:248}},{item:"viz_cUYmS9vD",type:"block",position:{x:790,y:175,w:410,h:248}}],globalInputs:[]},description:"Use saved searches from various apps to use in your Dashboard",title:"Saved Searches"};(0,s.default)(r.default.createElement(a,{definition:o}),{pageTitle:"Saved Search Data Source",hideFooter:!0,layout:"fixed"});
