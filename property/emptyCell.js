let propertiesEmptyCells=["v-cells-show","v-cells-hidden"],valuesEmptyCells=["empty-cells: show","empty-cells: hidden;"];for(var i=0;i<=propertiesEmptyCells.length;i++)if(document.querySelector(`.${propertiesEmptyCells[i]}`)&&!document.querySelector("style").innerText.includes(propertiesEmptyCells[i])){let e=` \n                .${propertiesEmptyCells[i]} { \n                    ${valuesEmptyCells[i]}\n                }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}