//** data of all colors that we want

const allColor = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'Red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
];



allColor.forEach(color => {
    const btn = document.createElement('button');
    btn.style.backgroundColor = color;
    btn.setAttribute('data_color',color);
    
    //** when you click on btn background color chang and sam color btn
    btn.onclick = function(){
        document.body.style.backgroundColor = color;
        
        //**show name of color 
        document.querySelector('.color_name').innerHTML = color;
        

        // ** show which one is active
        const activeBtn = document.querySelector('.active');
        
        if(activeBtn !== null){
            activeBtn.classList.remove('active');
        };

        document.querySelector(`button[data_color = ${color}]`).classList.add('active');

        // ** if color is blak colr name is white
        if(color === 'black'){
            document.querySelector('.color_name').style.color = 'white';
        }else{
            document.querySelector('.color_name').style.color = 'black';
        }
    };

    // ** add all btn to the section
    document.querySelector('section').appendChild(btn);
});



//** when you load page show the random color

// document.body.onload = function(){
    //** slect random index of colors
//     const randomIndex = Math.floor(Math.random() * allColor.length);
//     const color = allColor[randomIndex];

// }