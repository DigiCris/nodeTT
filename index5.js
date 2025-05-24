const [command, data] = process.argv.slice(2);
// npm run start -- GET
// npm run start -- POST 1
switch (command) {
    case 'GET':
        console.log('Get a data');
        break;
    case 'POST':
        if (data) {
            console.log(`Received ${data} successfully`);
        } else {
            console.log('No data provided for POST');
        }
        break;
    case 'PUT':
        if (data) {
            console.log(`Modified the item with id: ${data} successfully`);
        } else {
            console.log('No id provided for PUT');
        }
        break;
    case 'DELETE':
        if (data) {
            console.log(`The item with id: ${data} was deleted successfully`);
        } else {
            console.log('No id provided for DELETE');
        }
        break;
    default:
        console.log('Unrecognized command');
}