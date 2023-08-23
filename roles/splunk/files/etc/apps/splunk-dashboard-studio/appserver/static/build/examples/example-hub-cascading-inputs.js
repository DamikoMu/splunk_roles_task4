import{a as t}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as s}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as r}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var o=e(r()),n=e(s());var a={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
Use the selected value from one input to filter and power a second form input.  This allows for the available options on the second input to be narrowed by the updated search. 

In the following example, the selected user in the 1st dropdown sets a token named \`$token1$\` that populates the available options in the other input. Both tokens from the input are then used in the search for the table visualization.

#### SPL Query for First Input
\`\`\`
| inputlookup outages_example.csv
| search "Geographic Areas"="New York*"
| stats count by "Geographic Areas"
\`\`\`

#### How to Power the Second Input from the Selected Value of the First Input

Here is the search that we want to use to power the second form input

\`\`\`
| inputlookup outages_example.csv
| search "Geographic Areas" IN ("$token1$")
| stats count by "Respondent"
\`\`\`


#### Full Source for the Second Form Input
\`\`\`
{
    "type": "input.multiselect",
    "options": {
        "items": [
            {
                "label": "All",
                "value": "*"
            }
        ],
        "token": "token2",
        "defaultValue": "*"
    },
    "dataSources": {
        "primary": "ds_search2"
    },
    "title": "Select Sourcetype"
}
\`\`\`
`}},viz_J9wtUPaV:{type:"splunk.table",dataSources:{primary:"ds_XIkban1T"},options:{backgroundColor:"> themes.defaultBackgroundColor"},title:"Sourcetype Table",description:'Search Query: | inputlookup outages_example.csv| search "Geographic Areas" IN ("$dd1$") Respondent IN ("$dd2$")'}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| search "Geographic Areas"="New York*"
| stats count by "Geographic Areas"`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"},ds_Pk5HZtCJ:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| search "Geographic Areas" IN ("$dd1$")
| stats count by "Respondent"`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_2"},ds_XIkban1T:{type:"ds.search",options:{query:'| inputlookup outages_example.csv| search "Geographic Areas" IN ("$dd1$") Respondent IN ("$dd2$")',queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_4"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_ovnr6KpF:{type:"input.dropdown",options:{items:">frame(label, value) | prepend(formattedStatics) | objects()",token:"dd1",defaultValue:"*"},dataSources:{primary:"ds_search1"},title:"Select Geographic Area",context:{formattedConfig:{number:{prefix:""}},formattedStatics:">statics | formatByType(formattedConfig)",statics:[["All"],["*"]],label:'>primary | seriesByName("Geographic Areas") | renameSeries("label") | formatByType(formattedConfig)',value:'>primary | seriesByName("Geographic Areas") | renameSeries("value") | formatByType(formattedConfig)'}},input_9MxBqEwU:{type:"input.multiselect",options:{items:[{label:"All",value:"*"}],token:"dd2",defaultValue:"*"},dataSources:{primary:"ds_Pk5HZtCJ"},title:"Select Respondent"}},layout:{type:"grid",options:{},structure:[{item:"viz_RBdQ2qQ5",type:"block",position:{x:0,y:0,w:666,h:853}},{item:"viz_J9wtUPaV",type:"block",position:{x:666,y:0,w:534,h:853}}],globalInputs:["input_ovnr6KpF","input_9MxBqEwU"]},description:"Power a form input from other input values to narrow search results",title:"Cascading Inputs"};(0,n.default)(o.default.createElement(t,{definition:a}),{pageTitle:"Cascading Inputs",hideFooter:!0,layout:"fixed"});
