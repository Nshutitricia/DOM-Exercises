/*let clas = document.querySelector('#myParagraph')
let para = clas.textContent.split(' ')
para.map(num=> (clas.textContent.split(num)).length)
for(i=0;i<para.length ;i++){
    para.includes(para[i])
    var par = clas.textContent.split(para[i]).length
}
console.log(par)
*/

/*let clas = document.querySelector('#myParagraph')
let para = clas.textContent.split(' ')
for(i = 0 ; i<para.length;i++){
    let count = 0;
    for(j=i+1; j<para.length;j++){
        if(para[j] === para[i]){
            count++;
        }
    }
    console.log(count)
    console.log(para[i])
}
*/
let clas = document.querySelector('#myParagraph')
let para = clas.textContent.split(' ')
let unique =[...new Set(para)]
const repea = (arrUnique, arrPara) => arrUnique.reduce((ob, valUnique) =>{
    ob[valUnique] = arrPara.filter(v => valUnique ===v).length;
    return ob;
},{});
const result = repea(unique,para);
const sorted = Object.entries(result).sort((a,b) => b[1]-a[1])
console.log(sorted)