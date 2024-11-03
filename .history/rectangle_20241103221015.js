function ClickForRectCalulator(){
   
const width = getElementInputId('rectangle-width')
 const height = getElementInputId('')


}
function getElementInputId(invaildId){
    const invaildText = document.getElementById(invaildId)
    const invaildNumber = parseFloat(invaildText.value)
     return invaildNumber;
}