function ClickForRectCalulator(){
   
const width = getElementInputId('rectangle-width')
 const height = getElementInputId('rectangle-length')

 const area = width * height



}
function getElementInputId(invaildId){
    const invaildText = document.getElementById(invaildId)
    const invaildNumber = parseFloat(invaildText.value)
     return invaildNumber;
}
function setEle