// npm run start GET products
// npm run start GET products/1
// npm run start POST products "T-Shirt-Rex" 300 "remeras"
// npm run start DELETE products/1

const args = process.argv.slice(2);
const baseUrl = 'https://fakestoreapi.com/products';

async function fetchProducts() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
}

async function fetchProductById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    console.log(data);
}

async function createProduct(title, price, category) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: 0, // API generates de ID
            title: title,
            price: price,
            description: "Descripción del producto", // set hardcoded to fit: npm run start POST products "T-Shirt-Rex" 300 "remeras"
            category: category,
            image: "http://image.com" // just an image. I don't have any for now
        })
    });
    const data = await response.json();
    console.log(data);
}

async function deleteProduct(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
}

const command = args[0];
switch (command) {
    case 'GET':
        if (args[1] === 'products') {
            fetchProducts();
        } else if (args[1].startsWith('products/')) {
            const id = args[1].split('/')[1];
            fetchProductById(id);
        }
        break;
    case 'POST':
        if (args[1] === 'products' && args.length === 5) {
            const [_,, title, price, category] = args;
            console.log(args);
            createProduct(title, parseFloat(price), category);
        }
        break;
    case 'DELETE':
        if (args[1].startsWith('products/')) {
            const id = args[1].split('/')[1];
            deleteProduct(id);
        }
        break;
    default:
        console.log('Comando no reconocido');
}