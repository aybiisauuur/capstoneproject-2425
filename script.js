/*$('.search-input').on('keyup', function () {
    const value = $(this).val().toLowerCase();
    console.log('Search value:', value); // Check input value

    const items = $('.phrase-card').filter(function () {
        const text = $(this).text().toLowerCase();
        console.log('Checking card text:', text);
        return text.includes(value);
    });

    $('.phrase-card').hide(); // Hide all cards initially
    if (items.length) {
        items.show(); // Show matching cards
        $('.no-results').hide(); // Hide "no-results" message
    } else {
        $('.no-results').show(); // Show "no-results" message
    }
});*/
