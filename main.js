
const getAllItems = async () => {
    await fetch("https://63458e5f745bd0dbd36bb15b.mockapi.io/Items")
        .then((response) => {
            return response.json();
        })
        .then((items) => {
            console.log(items);
            const filteredItems = items.sort((a, b) => {
                return a.price - b.price;
            })
            console.log('Filtruoti duomenys', filteredItems);
            console.log("viskas veikia gerai!");
            return filteredItems;
        })
        .then((items) => {
            console.log('items', items);
            createDom(items);
        })
        .catch((error) => {
            console.log('error', error);
        })
}


function createDom(items) {
    const itemsWrapper = document.getElementById("items");

    items.forEach(item => {
        console.log(item.image);
        const itemWrapper = document.createElement("div");
        itemWrapper.classList.add("item-wrapper");

        const divider = document.createElement('div');
        divider.classList.add('divider');

        const itemImage = document.createElement("div");
        itemImage.classList.add("item-image");
        itemImage.style.backgroundImage = `url(${item.image})`;

        const itemInfo = document.createElement("div");
        itemInfo.classList.add('item-info');

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.innerHTML = (item.name);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.innerHTML = `Kaina: ${item.price} EUR`;

        const itemButtonWrapper = document.createElement('div');
        itemButtonWrapper.classList.add('item-button-wrapper');

        const itemButton = document.createElement('button');
        itemButton.classList.add('item-button');
        itemButton.innerHTML = 'Plačiau';
        itemButton.addEventListener('click', () => {
            localStorage.setItem("id", item.id);
            window.location.href = "./item.html"
        })

        itemInfo.append(itemName, itemPrice);
        itemButtonWrapper.append(itemButton);
        itemWrapper.append(itemImage, itemInfo, itemButtonWrapper);
        itemsWrapper.append(itemWrapper, divider);

        console.log("viskas veikia gerai!" + item.id);
    });

}

getAllItems();
