let string="";
let buttons=document.querySelectorAll(".button")
let input_val = document.querySelector(".input")

Array.from(buttons).forEach((btn)=>{
    btn.addEventListener(('click'),(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            input_val.value=string
        }

        else if(e.target.innerHTML == "x"){
            let x_val=e.target.value="*"
            string=string+x_val;
            input_val.value=string
        }

        else if(e.target.innerHTML == "X"){
           string=string.slice(0,(string.length-1))
            input_val.value=string
        }
        
        else if(e.target.innerHTML == "C"){
            string="";
            input_val.value=string;
        }

  

        else{
        string=string+e.target.innerHTML
        input_val.value=string
        }
    })
})


