function clickForCalulatior(){
    // trianglebase
    const triangleBaseString =document.getElementById('triangle-base')
    const triangelBaseNumber = parseFloat(triangleBaseString.value)
     const base = triangelBaseNumber;
     
     

//    height
const triangleHeightString = document.getElementById('triangle-height')
const triangleHeightNumber = parseFloat(triangleHeightString.value)
const height = triangleHeightNumber;


   const area = 0.5 *(base *height);
   console.log(area)


   const trianglArea = document.getElementById('triangl-area')
   trianglArea.innerText = "hello honey buney "
}