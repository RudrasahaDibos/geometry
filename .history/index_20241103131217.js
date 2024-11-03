function clickForCalulatior(){
    // trianglebase
    const triangleBaseString =document.getElementById('triangle-base')
    const triangelBaseNumber = parseFloat(triangleBaseString.value)
     const base = triangelBaseNumber;
     triangleHeightNumber.value = ''
     console.log(base)

//    height
const triangleHeightString = document.getElementById('triangle-height')
const triangleHeightNumber = parseFloat(triangleHeightString.value)
const height = triangleHeightNumber;
console.log(height)
}