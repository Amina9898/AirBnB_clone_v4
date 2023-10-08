$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search';
  const requestPayload = '{}';

  $.ajax({
    type: 'POST',
    url: url,
    data: requestPayload,
    contentType: 'application/json',
    success: function (data) {
      for (let place of data) {
        const article = $('<article>');
        article.append(`<div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div>`);
        article.append(`<div class="information"><div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div><div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div><div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div></div>`);
        article.append(`<div class="description">${place.description}</div>`);
        $('.places').append(article);
      }
    }
  });
});
