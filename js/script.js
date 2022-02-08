// ? data of all colors that we want

const allColor = [
    'black',
    'silver',
    'gray',
    'white ',
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

    // when you click on btn background color chang and sam color btn
    btn.onclick = function(){
        document.body.style.backgroundColor = color;
        //show name of color 
        document.querySelector('.color_name').innerHTML = color;
    };

    document.querySelector("section").appendChild(btn);
});



//