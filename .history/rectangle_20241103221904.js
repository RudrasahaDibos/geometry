function ClickForRectCalulator(){
   
const width = getElementInputId('rectangle-width')
 const height = getElementInputId('rectangle-length')

 const area = width * height
 setElementInputId("rectangle-area",area)


}
 
function ClickForParaCalulator(){
    
}

function getElementInputId(invaildId){
    const invaildText = document.getElementById(invaildId)
    const invaildNumber = parseFloat(invaildText.value)
     return invaildNumber;
}
function setElementInputId(setinvaildId ,area){
    const trianglArea = document.getElementById(setinvaildId )
   trianglArea.innerText = area
}