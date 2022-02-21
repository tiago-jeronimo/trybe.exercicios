const paragrapf = document.querySelectorAll("#first-paragraph")[0];
paragrapf.style.backgroundColor ="black";
paragrapf.style.color ="DarkTurquoise";

const title = document.querySelectorAll("#page-title")[0];
title.innerText="Interestelar";

const subtitle = document.querySelectorAll("#subtitle")[0];
subtitle.style.fontSize="26px";
subtitle.style.color="#FF8C00";

const paragrafos = document.querySelectorAll(".paragraphs")[0,1];
// for(i=0; i < paragrafos.length; i+= 1){
// (paragrafos[i]).innerText="EPISTEMOLOGIA"
// }
paragrafos.style.color="purple"

const element = document.querySelectorAll("h4");
element[0].innerText="ALTERAÇÃO";

const imprimi = `
             #######                        
                #    #   ##    ####   ####  
                #    #  #  #  #    # #    # 
                #    # #    # #      #    # 
                #    # ###### #  ### #    # 
                #    # #    # #    # #    # 
                #    # #    #  ####   ####  `

console.log(imprimi);