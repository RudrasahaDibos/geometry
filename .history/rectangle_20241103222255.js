function ClickForRectCalulator(){
   
const width = getElementInputId('rectangle-width')
 const length = getElementInputId('rectangle-length')

 const area = width * length
 setElementInputId("rectangle-area",area)


}
 
function ClickForParaCalulator(){

    const base = getElementInputId('parallelogram-base')
    const height = getElementInputId('parallelogram-height')
    const area = base * height
    setElementInputId("parallelogram-area",area)
}

function getElementInputId(invaildId){
    const invaildText = document.getElementById(invaildId)
    const invaildNumber = parseFloat(invaildText.value)
     return invaildNumber;
}
function setElementInputId(setinvaildId ,area){
    const Area = document.getElementById(setinvaildId )
     Area.innerText = area
}