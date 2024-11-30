export async function getCart() {
    try {
        const response = await fetch('./static/data/Сart.json');
        if (!response.ok) {
            throw new Error('Failed to load cart');
        }
        const cartData = await response.json();
        console.log(cartData);
        return cartData;
    } catch (error) {
        console.error('Error fetching cart:', error);
        return [];
    }
}