const itemData = document.getElementById('item-data');

let pause;

const goToMain = () => {
    window.location.href = "./main.html";
}

const myPause = () => {
    pause = setTimeout(goToMain, 2000);
}

const deleteItem = () => {
    const itemId = localStorage.getItem("id");
    fetch(`https://63458e5f745bd0dbd36bb15b.mockapi.io/Items/${itemId}`,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    )
        .then((resolve) => {
        })
        .then(() => {
            const message = document.createElement('div');
            message.classList.add('message');
            message.style.color = 'red';
            message.style.fontSize = '25px';
            message.innerHTML = 'Prekė sėkmingai ištrinta!';
            itemData.innerHTML = "";
            itemData.append(message);
            myPause();
        })
        .catch((error) => {
            console.log("error", error);
        });
};


const getItem = () => {
    const itemId = localStorage.getItem("id");

    fetch(`https://63458e5f745bd0dbd36bb15b.mockapi.io/Items/${itemId}`)
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            const itemIdButton = document.getElementById('item-id');
            itemIdButton.innerHTML = `Prekės ID: ${itemId}`;

            const itemImage = document.createElement('div');
            itemImage.classList.add('item-image');
            itemImage.style.backgroundImage = `url(${item.image})`;

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

            const goToMainButton = document.createElement('button');
            goToMainButton.classList.add('go-to-main');
            goToMainButton.innerHTML = 'Visi skelbimai';

            itemData.append(itemImage, itemName, itemDescription, itemPrice, itemLocation, deleteButton, goToMainButton);
            deleteButton.addEventListener('click', deleteItem);
            goToMainButton.addEventListener('click', () => {
                window.location.href = "./main.html";
            })
        })
        .catch((error) => {
            alert('error', error);
        })
}

getItem();
