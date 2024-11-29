export async function getAllProducts() {
    try {
        const response = await fetch('./static/data/Products.json');
        if (!response.ok) {
            throw new Error('Failed to load products');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function getProductsByCategory(category) {
    try {
        const products = await getAllProducts();
        return products.filter(product => product.category === category);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
}