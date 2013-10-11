// Switch

// control falls through to the next case unless you call break;
var color = 'green';

switch (color) {
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('speed up');
        break;
    default:
        console.log('stop');
}
