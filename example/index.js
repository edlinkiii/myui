let blocker = new Blocker({
    message: 'Testing...',
    css: {
        backgroundColor: 'white',
        color: 'black',
        border: '3px solid black',
        borderRadius: '10px',
        padding: '30px'
    },
    open: function() {
        setTimeout(() => {
            blocker.destroy();
        },2000);
    }
});

let button = new Button({
    id: 'button_1',
    text: 'Test Button',
    target: '#button-holder',
    classes: ['button-blue'],
    onClick: function() {
        alert('This is a test!');
    }
}).disable();

let autocomplete = new Autocomplete({
    input: '#autocomplete',
    target: '#autocompleteId',
    choices: [
        {
            ID: '123',
            DisplayName: 'Ed Link'
        },
        {
            ID: '234',
            DisplayName: 'Ed Jones'
        },
        {
            ID: '345',
            DisplayName: 'Tom Link'
        },
        {
            ID: '456',
            DisplayName: 'Tom Jones'
        }
    ],
    handleQueryData: function(data, query) {
        return data.filter(d => d.DisplayName.includes(query)).map(d => ({ id: d.ID, display: d.DisplayName }));
    },
    handleSelectItem: function(item) {
        alert(item.display);
    }
});

let calendar = new Calendar({
    input: '#calendar',
    width: 160,
    height: 350,
    noFuture: false
});

let clock = new Clock({
    input: '#clock',
    width: 160,
    height: 350
});

const doModalTest = () => {
    return new Modal({
        title: 'test',
        classes: ['slim-bars'],
        content: '<br><br>this is a test<br><br><br>',
        draggable: true,
        buttons: [
            {
                classes: ['button-blue'],
                text: 'Click Me',
                onClick: () => modal.destroy()
            }
        ]
    });
}

const showWarning = () => {
    new Shout({
        text: '<b>Warning:</b> Something might not work correctly',
        backgroundColor: '#ffff00',
        fontColor: '#000000',
        duration: 4, // seconds --- duration * 1000
	});
}

const showError = () => {
    new Shout({
        // text: 'This is a thing!'
        text: '<b>Error:</b> Something is broken',
        backgroundColor: '#ff0000',
        fontColor: '#ffffff',
        duration: 5, // seconds --- duration * 1000
	});
}

const showSuccess = () => {
    new Shout({
        // text: 'This is a thing!'
        text: '<b>Success:</b> Everything is perfect in the world',
        backgroundColor: '#12b04e',
        fontColor: '#ffffff',
        duration: 3, // seconds --- duration * 1000
	});
}

const showHello = (text) => {
    new Shout({
        text: text || 'Hello!',
        fontColor: '#ffffff',
        duration: 10, // seconds --- duration * 1000
	});
}

// listener for modal test
let modal;
document.querySelector('a#test_modal').addEventListener('click', () => { modal = doModalTest(); }, false);

// listeners for shout test
document.querySelector('a#test_warning').addEventListener('click', () => { showWarning(); }, false);
document.querySelector('a#test_error').addEventListener('click', () => { showError(); }, false);
document.querySelector('a#test_success').addEventListener('click', () => { showSuccess(); }, false);
document.querySelector('a#test_hello').addEventListener('click', ({target}) => { showHello(target.innerText); }, false);