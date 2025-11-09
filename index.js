let cont = document.querySelector(".cont")

let images = {
    Bahamas : 'https://www.travelandleisure.com/thmb/LovddQ6UScwjC53MYcOngNpLHFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-fowl-cay-BESTHOTELSBAHAMAS0224-622f8b5f8b2343e29df9cedbd7e053d0.jpg',
    Georgia : 'https://storage.georgia.travel/images/summer-adventures-in-georgia.webp',
    India : 'https://deih43ym53wif.cloudfront.net/elephant-walking-on-beach-andaman-islands-india-shutterstock_774152350.jpg_ebe87e3377.jpg',
} // Represents the amount of pictures we would use as API dynamically

for (let place in images) {
    let box = document.createElement('div');
    box.classList.add('image-box');

    let img = document.createElement('img');
    img.src = images[place];
    img.alt = place;

    let caption = document.createElement('p');
    caption.textContent = place;

    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.textContent = "Book your trip!"; 

    box.appendChild(img);
    box.appendChild(caption);
    box.appendChild(overlay);
    cont.appendChild(box);
}