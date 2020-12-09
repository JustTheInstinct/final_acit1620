document.querySelector('#submit').addEventListener('click', submit);
document.querySelector('#red').addEventListener('mouseover', function(){check('red')})
document.querySelector('#blue').addEventListener('mouseover', function(){check('blue')})
document.querySelector('#green').addEventListener('mouseover', function(){check('green')})
document.querySelector('#black').addEventListener('mouseover', function(){check('black')})
document.querySelector('#white').addEventListener('mouseover', function(){check('white')})

function submit () {
    document.getElementById('main').style.backgroundColor = '#ffffff'
    document.getElementById('nav').style.backgroundColor = '#ffffff'
};

function check(colour) {
    let selection = ['red', 'blue', 'green', 'black', 'white'];
    for (select = 0; select < 6; select++){
        if (colour == selection[select]) {
            use = colour;
        };
    };
    document.getElementById('preview').src = `images/${use}.jpg`;
    document.getElementById('preview').style.opacity = 1;
};