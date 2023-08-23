import{a as t}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as i}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as o}from"../chunks/chunk-FQXD4G67.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var s=e(o()),a=e(i());var n={visualizations:{viz_rbsVgtoZ:{type:"splunk.markdown",options:{markdown:`## Overview
Test data can be created with the ds.test datasource type. This allows you to define a JSON object with fields and values. 

Test datasources are NOT configurable through the front end visual editor. However, if a component uses a test datasource, it will show the datasource's name in the configuration panel. 

Test data sources are best for testing a dashboard and exploring dashboard capabilities. If you do not want to run searches while building or experimenting with your build, a test data source can be used to get your dashboard configured before actual searches are used. `}},viz_XTR0gI0t:{type:"splunk.column",dataSources:{primary:"ds_ProductType"},title:"Product Purchases Distribution"},viz_cUYmS9vD:{type:"splunk.markdown",options:{markdown:`### Test Datasource Definition
\`\`\`
"ds_ProductType": {
    "name": "ds_ProductType",
    "type": "ds.test",
    "options": {
        "data": {
            "fields": [
                {
                    "name": "Type"
                },
                {
                    "name": "Purchases"
                }
            ],
            "columns": [
                [
                    "Pets",
                    "Kids",
                    "Womens Shirts",
                    "Hats",
                    "Mens Shirts",
                    "Outerwear",
                    "Activewear"
                ],
                [
                    36821,
                    28683,
                    46253,
                    26723,
                    35745,
                    46253,
                    26723,
                    35745
                ]
            ]
        }
    }
}
}
\`\`\``}}},dataSources:{ds_ProductType:{name:"ds_ProductType",type:"ds.test",options:{data:{fields:[{name:"Type"},{name:"Purchases"}],columns:[["Pets","Kids","Womens Shirts","Hats","Mens Shirts","Outerwear","Activewear"],[36821,28683,46253,26723,35745,46253,26723,35745]]}}}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_rbsVgtoZ",type:"block",position:{x:0,y:0,w:1440,h:181}},{item:"viz_XTR0gI0t",type:"block",position:{x:0,y:181,w:615,h:543}},{item:"viz_cUYmS9vD",type:"block",position:{x:615,y:181,w:585,h:543}}],globalInputs:[]},description:"Use a JSON object with static data to create power components without running searches",title:"Test Data Source"};(0,a.default)(s.default.createElement(t,{definition:n}),{pageTitle:"Test Data",hideFooter:!0,layout:"fixed"});
