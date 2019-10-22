
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogLinks = [];
  Object.keys(dogs).forEach(dog => {
    let a = document.createElement('a');
    a.innerHTML = dog;
    a.href = dogs[dog];
    let li = document.createElement('li');
    li.className = 'dog-link';
    li.append(a);
    dogLinks.push(li);
  });
  return dogLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let dogList = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach(dog => {
    dogList.appendChild(dog);
  });
}

function handleEnter() {
  let dropDown = document.querySelector(".drop-down-dog-nav");
  let dogList = document.querySelector(".drop-down-dog-list");
  dropDown.addEventListener("mouseenter", (e) => {
    dogList.style.visibility = 'visible'; 
  });
}

function handleLeave() {
  let dropDown = document.querySelector(".drop-down-dog-nav");
  let dogList = document.querySelector(".drop-down-dog-list");
  dropDown.addEventListener("mouseleave", (e) => {
    dogList.style.visibility = 'hidden';
  });
}

attachDogLinks();
handleEnter();
handleLeave();

