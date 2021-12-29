console.log("Bulb On and Off");

let Image = document.getElementById('image');
let heading = document.getElementById('head');

const toggle = () => {
    if (Image.src.match('lighton'))
        {
           Image.src="Images/lightoff.png";
           heading.innerText = "Light is OFF :(";
        }else{
            Image.src="Images/lighton.png";
            heading.innerText = "Light is ON :)";
           
        }
    }