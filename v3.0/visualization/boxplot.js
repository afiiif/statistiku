importScripts("../v3.0/utils.js");export const index=(t,i,a,r,e,l)=>{const o=Date.now();let s=t["y[]"].map(t=>e[t]).join(", "),n=Ô(i[0].length,s,t.g.length?`by <b>${e[t.g]}</b>`:""),h=t["y[]"].map(t=>!i[r[t]].some(t=>null===t||isNaN(t))&&!l.find(i=>i[0]==e[t])&&ʹ(mean(i[r[t]],a))),m="";for(let i=0,a=h.length;i<a;i++)if(!1===h[i])return{error:`Invalid variable: <b class="text-warning">${e[t["y[]"][i]]}</b> contains non-numeric value`+shake("y[]")};if(t.g.length){var g=i[r[t.g]].unq();if(g.length>100)return{error:`Invalid group: <b class="text-warning">${e[t.g]}</b> contains more than 100 unique values`+shake("g")};t["y[]"].forEach((s,n)=>{var c=[],p=[];split(i,r[t.g]).forEach((t,i)=>{if(a){var e=msort([t[r[s]],a],0);c[i]=[e[0].min(),quartile(e[0],.25,e[1]),quartile(e[0],.5,e[1]),quartile(e[0],.75,e[1]),e[0].max()];let l=c[i][1]-1.5*(c[i][3]-c[i][1]),o=c[i][3]+1.5*(c[i][3]-c[i][1]);c[i]=[Math.max(l,c[i][0]),c[i][1],c[i][2],c[i][3],Math.min(o,c[i][4])],p.push(...t[r[s]].filter(t=>t<c[i][0]||t>c[i][4]).map(t=>[i,t]))}else{e=t[r[s]].sort((t,i)=>t>i?1:t<i?-1:0);c[i]=[e.min(),quartile(e,.25),quartile(e,.5),quartile(e,.75),e.max()];let a=c[i][1]-1.5*(c[i][3]-c[i][1]),l=c[i][3]+1.5*(c[i][3]-c[i][1]);c[i]=[Math.max(a,c[i][0]),c[i][1],c[i][2],c[i][3],Math.min(l,c[i][4])],p.push(...t[r[s]].filter(t=>t<c[i][0]||t>c[i][4]).map(t=>[i,t]))}c[i]=c[i].map(t=>Number(t.toFixed(Math.max(0,h[n]))))}),m+=(n?"<hr>":"")+`<h6>${e[s]} <span class="fw-300">by ${e[t.g]}</span></h6>`+highcharts(o+n,["boxplot"],`{\n\t\t\t\t\txAxis:{title:{text:"${e[t.g]}"},categories:${JSON.stringify(g.map((i,a)=>vlabel(g[a],l,e[t.g])))}},\n\t\t\t\t\tyAxis:{title:{text:"${e[s]}"}},\n\t\t\t\t\tseries: [\n\t\t\t\t\t\t{name: "${e[s]}", data: ${JSON.stringify(c)}, color: Highcharts.getOptions().colors[${n}], fillColor: toRGBA(Highcharts.getOptions().colors[${n}],.15) },\n\t\t\t\t\t\t{name: "Outliers", data: ${JSON.stringify(p)}, type: "scatter", color: Highcharts.getOptions().colors[${n}], marker: {fillColor:"white",lineWidth:1,lineColor:Highcharts.getOptions().colors[${n}]}, tooltip: {pointFormat:"Value: {point.y}"}},\n\t\t\t\t\t],\n\t\t\t\t}`)})}else m+='<div class="row">',t["y[]"].forEach((l,s)=>{var n=[],g=[];if(a){var c=msort([i[r[l]],a],0),p=(n=[c[0].min(),quartile(c[0],.25,c[1]),quartile(c[0],.5,c[1]),quartile(c[0],.75,c[1]),c[0].max()])[1]-1.5*(n[3]-n[1]),u=n[3]+1.5*(n[3]-n[1]);n=[Math.max(p,n[0]),n[1],n[2],n[3],Math.min(u,n[4])],g=i[r[l]].filter(t=>t<n[0]||t>n[4]).map(t=>[0,t])}else{c=i[r[l]].sort((t,i)=>t>i?1:t<i?-1:0),p=(n=[c.min(),quartile(c,.25),quartile(c,.5),quartile(c,.75),c.max()])[1]-1.5*(n[3]-n[1]),u=n[3]+1.5*(n[3]-n[1]);n=[Math.max(p,n[0]),n[1],n[2],n[3],Math.min(u,n[4])],g=i[r[l]].filter(t=>t<n[0]||t>n[4]).map(t=>[0,t])}n=n.map(t=>Number(t.toFixed(Math.max(0,h[s])))),m+=(s&&s%2==0?'</div><hr><div class="row">':"")+`<div class="col-sm-12 ${t["y[]"][1]?"col-lg-6":""} ${s%2==1?"border-left":""}">`+(s%2==1?'<hr class="d-lg-none">':"")+`<h6>${e[l]}</h6>`+highcharts(o+s,["boxplot"],`{\n\t\t\t\t\tyAxis:{title:{text:"${e[l]}"}},\n\t\t\t\t\tseries: [\n\t\t\t\t\t\t{name: "${e[l]}", data: ${JSON.stringify([n])}, color: Highcharts.getOptions().colors[${s}], fillColor: toRGBA(Highcharts.getOptions().colors[${s}],.15) },\n\t\t\t\t\t\t{name: "Outliers", data: ${JSON.stringify(g)}, type: "scatter", color: Highcharts.getOptions().colors[${s}], marker: {fillColor:"#fff",lineWidth:1,lineColor:Highcharts.getOptions().colors[${s}]}, tooltip: {pointFormat:"Value: {point.y}"}},\n\t\t\t\t\t],\n\t\t\t\t}`)+"</div>"}),m+="</div>";return{title:"Boxplot",vars:s,body:n+(m+=highchartsReflow(t["y[]"].map((t,i)=>o+i)))}};