importScripts("../v3.0/utils.js");export const index=(a,t,e,n,r,i)=>{a["g[]"]=JSON.parse("["+a.gOrder+"]");const h=Date.now();let l=a["y[]"].map(a=>r[a]).join(", "),s=Ô(t[0].length,l,a["g[]"].length?`by <b>${a["g[]"].map(a=>r[a]).join(", ")}</b>`:""),g=a["y[]"].map(a=>!t[n[a]].some(a=>null===a||isNaN(a))&&ʹ(mean(t[n[a]],e))),o="";var d=[],c=[],p=["Sum","Frequency","Mean"][a.a],m=a.i?"bar":"column",u=350,y=.1,f=.15;for(let t=0,e=g.length;t<e;t++)if(!1===g[t])return{error:`Invalid variable: <b class="text-warning">${r[a["y[]"][t]]}</b> contains non-numeric value`+shake("y[]")};for(let e=0,h=a["g[]"].length;e<h;e++)if(d[e]=t[n[a["g[]"][e]]].unq(),c[e]=d[e].map((t,n)=>vlabel(t,i,r[a["g[]"][e]])),d[e].length>100)return{error:`Invalid group: <b class="text-warning">${r[a["g[]"][e]]}</b> contains more than 100 unique values`+shake("g[]")};const x=[sum,len,mean][a.a];if(d[1]){"bar"===m&&(u=a.s?Math.max(u,10*d[1].length+80):Math.max(u,d[0].length*d[1].length*10+80)),d[0].length*d[1].length>25&&(y=0),d[0].length*d[1].length>50&&(f=.1);var b=trans(t),v=[];d[0].forEach((t,e)=>{d[1].forEach((r,i)=>{data=b.filter(e=>e[n[a["g[]"][0]]]===t&&e[n[a["g[]"][1]]]===r),data.length?(data=trans(data),a["y[]"].forEach((t,r)=>{v[r]?v[r][e]?v[r][e].data.push(ʺ(x(data[n[t]],data[n[a.weight]]),g[r])):v[r].push({name:c[0][e],data:[ʺ(x(data[n[t]],data[n[a.weight]]),g[r])]}):v[r]=[{name:c[0][e],data:[ʺ(x(data[n[t]],data[n[a.weight]]),g[r])]}]})):a["y[]"].forEach((a,t)=>{v[t]?v[t][e]?v[t][e].data.push(null):v[t].push({name:c[0][e],data:[null]}):v[t]=[{name:c[0][e],data:[null]}]})})}),a["y[]"].forEach((t,e)=>{o+=(e?"<hr>":"")+`<h6>${r[t]}</h6>`+highcharts(h+e,["bar"],JSON.stringify({chart:{type:m,height:u},series:v[e],xAxis:{title:{text:r[a["g[]"][1]]},categories:c[1]},yAxis:{title:{text:`${p} of ${r[t]}`}},plotOptions:{series:{pointPadding:y,groupPadding:f,colorByPoint:!1,stacking:a.s?"normal":void 0}},legend:{enabled:!0}}))})}else{"bar"===m&&(u=Math.max(u,10*d[0].length+80)),d[0].length>25&&(y=0);let e=split(t,n[a["g[]"][0]]);a["y[]"].forEach((t,i)=>{o+=(i?"<hr>":"")+`<h6>${r[t]}</h6>`+highcharts(h+i,["bar"],JSON.stringify({chart:{type:m,height:u},series:[{name:`${p} of ${r[t]}`,data:e.map(e=>ʺ(x(e[n[t]],e[n[a.weight]]),g[i]))}],xAxis:{title:{text:r[a["g[]"][0]]},categories:c[0]},yAxis:{title:{text:`${p} of ${r[t]}`}},plotOptions:{series:{pointPadding:y}}}))})}return{title:"Bar Chart",vars:l,body:s+(o+=highchartsReflow(a["y[]"].map((a,t)=>h+t)))}};