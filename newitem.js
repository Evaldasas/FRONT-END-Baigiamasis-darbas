
const main = document.getElementById('main');

const addItem = () => {
    const itemName = document.getElementById('name-input').value;
    const itemDescription = document.getElementById('description-input').value;
    const itemImage = document.getElementById('image-input').value;
    const itemPrice = document.getElementById('price-input').value;
    const itemLocation = document.getElementById('location-input').value;

    const itemData = {
        name: itemName,
        description: itemDescription,
        image: itemImage,
        price: itemPrice,
        location: itemLocation
    };

    fetch(`https://63458e5f745bd0dbd36bb15b.mockapi.io/Items`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        }
    )
        .then((resolve) => {
            const message = document.createElement('div');
            message.classList.add('message');
            message.style.color = 'red';
            message.style.fontSize = '25px';
            message.style.marginTop = '15px';
            message.style.marginBottom = '15px';
            message.innerHTML = 'Prekė sėkmingai išsaugota!';

            const addNewButton = document.createElement('button');
            addNewButton.classList.add('add-button-input');
            addNewButton.style.width = '20%';
            addNewButton.style.marginBottom = '30px';
            addNewButton.innerHTML = 'Pridėti naują skelbimą';
            addNewButton.addEventListener('click', () => {
                window.location.href = "./newitem.html";
            })

            main.innerHTML = "";
            main.append(message, addNewButton);
        })
        .catch((error) => {
            alert("error", error);
        });
}

const addButton = document.getElementById('add-button-input');
addButton.addEventListener('click', addItem);

const goToMainButton = document.getElementById('go-to-main');
goToMainButton.addEventListener('click', () => {
    window.location.href = "./main.html";
})

