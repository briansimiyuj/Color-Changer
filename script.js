const smallBoxes = document.querySelectorAll(".small")

const largeBoxes = document.querySelectorAll(".large")

const tinyBoxes = document.querySelectorAll(".tiny")

const mediumBoxes = document.querySelectorAll(".medium")

const bigBoxes = document.querySelectorAll(".big")




const boxes = [smallBoxes, largeBoxes, tinyBoxes, bigBoxes, mediumBoxes]





const increaseSpeed = () =>{

       boxes.forEach(boxess => {
           
        boxess.forEach(box => {
            
            box.style.animationDuration = "3s"

        })

       })

       
}




setTimeout(() => {
    
    increaseSpeed()

}, 9000)





const removeAnimation = () =>{

    boxes.forEach(boxess => {
           
        boxess.forEach(box => {
            
            box.style.animation = "none"

        })

       })
 
}



setTimeout(() => {
    
    removeAnimation()

}, 18000)





const initialAnimation = () =>{

   window.location.reload()

}



setTimeout(() => {
    
    initialAnimation()

}, 25000)