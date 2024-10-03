const form=document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const height=Number(document.querySelector('#height').value)
    console.log(height)
    const weight=Number(document.querySelector('#weight').value)
    console.log(weight)
    const result=document.querySelector('#results')

    if(height==='' || height<=0 ||isNaN(height) ||weight==='' ||weight<=0 || isNaN(weight)){
        // const text=document.createTextNode("Enter valid inputs")
        result.innerHTML="Enter valid inputs"
    }
    else{
        let bmiheight=Math.pow(height,2)/10000
        console.log(bmiheight)
        let bmi=(weight/bmiheight).toFixed(2)
        result.innerHTML=`${bmi}`
    }
})