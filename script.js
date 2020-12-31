const smallBoxes = document.querySelectorAll(".small")



const increaseSpeed = () =>{

       smallBoxes.forEach(box => {
           
        box.style.animationDuration = "3s"

       })

       
}




setTimeout(() => {
    
    increaseSpeed()

}, 9000)





const decreaseSpeed = () =>{

    smallBoxes.forEach(box => {
           
        box.style.animation = "none"

       })


    console.log('working')

}



setTimeout(() => {
    
    decreaseSpeed()

}, 18000)