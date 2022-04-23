const addToDb = (_id) => {
	let cart = getCourcesFromDb();
	
	// Add quantity
	const quantity = cart[_id];
	if (quantity) {
		const newQuantity = quantity + 1;
		cart[_id] = newQuantity;
	} else {
		cart[_id] = 1;
	}

	// Set cources into DB
	localStorage.setItem("cources", JSON.stringify(cart));
};

// Get cources function
const getCourcesFromDb = () => {
	let cart;
	// Get cart
	const addedCources = localStorage.getItem("cources");
	if (addedCources) {
		cart = JSON.parse(addedCources);
	} else {
		cart = {};
	}
	return cart;
};

// Delete items
const deleteCource = (id) => {
	const addedCources = localStorage.getItem("cart");
	
	if (addedCources) {
		const cart = JSON.parse(addedCources);
		if (id in cart) {
			delete cart[id];
			// Set cources into DB
			localStorage.setItem("cources", JSON.stringify(cart));
		}
	}
};

export { addToDb, getCourcesFromDb, deleteCource };
