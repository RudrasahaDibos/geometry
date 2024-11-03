function clickForCalulatior(){
    
    const triangleBaseString =document.getElementById('triangle-base')
    const triangelBaseNumber = parseFloat(triangleBaseString.value)
     const base = triangelBaseNumber;
     
     


const triangleHeightString = document.getElementById('triangle-height')
const triangleHeightNumber = parseFloat(triangleHeightString.value)
const height = triangleHeightNumber;


   const area = 0.5 *(base *height);
   console.log(area)


   const trianglArea = document.getElementById('triangl-area')
   trianglArea.innerText = area
}