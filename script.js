const smallBoxes = document.querySelectorAll(".small")



const increaseSpeed = () =>{

       smallBoxes.forEach(box => {
           
        box.style.animationDuration = "3s"

       })

       console.log('working')

}

increaseSpeed()