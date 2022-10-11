const itemData = document.getElementById('item-data');

const getItem = () => {
    const itemId = localStorage.getItem("id");

    fetch(`https://63458e5f745bd0dbd36bb15b.mockapi.io/Items/${itemId}`)
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            console.log(item);

            const itemImage = document.createElement('div');
            itemImage.classList.add('item-image');
            itemImage.style.backgroundImage = `url (${item.image})`;

            const itemName = document.createElement('div');
            itemName.classList.add('item-name');
            itemName.innerHTML = item.name;

            const itemDescription = document.createElement('div');
            itemDescription.classList.add('item-description');
            itemDescription.innerHTML = item.description;

            const itemPrice = document.createElement('div');
            itemPrice.classList.add('item-price');
            itemPrice.innerHTML = `Kaina: ${item.price} EUR`;

            const itemLocation = document.createElement('div');
            itemLocation.classList.add('item-location');
            itemLocation.innerHTML = item.location;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.innerHTML = 'Ištrinti skelbimą';
            deleteButton.addEventListener('click', deleteItem(itemId));

            const goToMainButton = document.createElement('button');
            goToMainButton.classList.add('go-to-main');
            goToMainButton.innerHTML = 'Visi skelbimai';

            itemData.append(itemImage, itemName, itemDescription, itemPrice, itemLocation, deleteButton, goToMainButton);

        })
        .catch((error) => {
            console.log('error', error);
        })
}

const deleteItem = (id) => {
    fetch(`https://63458e5f745bd0dbd36bb15b.mockapi.io/Items/${id}`,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    )
        .then((resolve) => {
            console.log("item was deleted successfully");
            // tripsWrapper.innerHTML = "";
            // getAllTrips();
        })
        .catch((error) => {
            console.log("error", error);
        });
};

getItem();
