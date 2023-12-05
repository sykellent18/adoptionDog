// script.js

document.getElementById('fetch-dog-button').addEventListener('click', () => {
  fetchRandomDog();
});

function fetchRandomDog() {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the response data here
      displayDogImage(data.message);
      // Display organization and dog info when the "Yes" button is clicked
      document.getElementById('fetch-dog-button').addEventListener('click', () => {
        displayAdoptionInfo(data.message);
      });
    })
    .catch(error => {
      // Handle errors
      console.error("Error fetching dog data:", error);
    });
}

function displayDogImage(imageUrl) {
  const dogContainer = document.getElementById('dog-container');
  dogContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
}

function displayAdoptionInfo(dogImageUrl) {
  // Simulated organization and dog information
  const organizationInfo = {
    name: "Dog Rescue Organization",
    location: "Cityville",
    contact: "contact@dogrescue.org",
  };

  const dogInfo = {
    name: "Buddy",
    breed: "Labrador Retriever",
    age: "2 years",
    temperament: "Friendly and playful",
  };

  const dogInfoContainer = document.getElementById('dog-info-container');
  dogInfoContainer.innerHTML = `
    <h2>${organizationInfo.name}</h2>
    <p>Location: ${organizationInfo.location}</p>
    <p>Contact: ${organizationInfo.contact}</p>
    <h3>About ${dogInfo.name}</h3>
    <p>Breed: ${dogInfo.breed}</p>
    <p>Age: ${dogInfo.age}</p>
    <p>Temperament: ${dogInfo.temperament}</p>
    <img src="${dogImageUrl}" alt="${dogInfo.name}">
  `;
}
