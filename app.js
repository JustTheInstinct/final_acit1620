document.querySelector('#submit').addEventListener('click', function() {submit(document.querySelector('#apply').value)});
document.querySelector('#red').addEventListener('mouseover', function(){check('red')});
document.querySelector('#blue').addEventListener('mouseover', function(){check('blue')});
document.querySelector('#green').addEventListener('mouseover', function(){check('green')});
document.querySelector('#black').addEventListener('mouseover', function(){check('black')});
document.querySelector('#white').addEventListener('mouseover', function(){check('white')});

function submit (user) {
    let found = false
    let selection = ['red', 'blue', 'green', 'black', 'white'];
    let choice = user
    let check = selection.includes(choice);


    if (check == true) {
        document.getElementById('preview').src = `images/${choice}.jpg`;
        found == false;
    }

    else if (choice == 'blur') {
        let pic = document.getElementById('preview').src
        if (pic.includes('red') == true) {
             document.getElementById('preview').src = `images/redb.jpg`
        }
        else if (pic.includes('blue') == true) {
            document.getElementById('preview').src = `images/blueb.jpg`
        }
        else if (pic.includes('green') == true) {
        document.getElementById('preview').src = `images/greenb.jpg`
        }
        else if (pic.includes('black') == true) {
        document.getElementById('preview').src = `images/blackb.jpg`
        }
        else if (pic.includes('white') == true) {
            document.getElementById('preview').src = `images/whiteb.jpg`
        }
    }
    

    else {
        alert('Unknown choice. Choices are as follows: red, blue, green, black, white, blur')
    }
};

function check(colour) {
    document.getElementById('submit').style.opacity = 1
    document.getElementById('apply').style.opacity = 1
    let selection = ['red', 'blue', 'green', 'black', 'white'];
    for (select = 0; select < 6; select++){
        if (colour == selection[select]) {
            use = colour;
        };
    };
    document.getElementById('preview').src = `images/${use}.jpg`;
    document.getElementById('preview').style.opacity = 1;
};