//Show the feedback prompt once the user scrolls to the bottom of the page.
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.getElementById('feedback').showModal();
        window.removeEventListener('scroll', arguments.callee);
    }
});

//Wait until the page is loaded before attaching button and form event listeners.
document.addEventListener('DOMContentLoaded', function() {
    //  "Love" reaction button click.
    document.getElementById('love-btn').addEventListener('click', function() {
        alert('Yeehaw! Our Cat Boys are amazing!');
        console.log('Love reaction');
        document.getElementById('feedback').close();
    });

    //"Like" reaction button click.
    document.getElementById('like-btn').addEventListener('click', function() {
        alert('Yeehaw! Our Cat Boys are alright!');
        console.log('Like reaction');
        document.getElementById('feedback').close();
    });

    //"Dislike" reaction button click.
    document.getElementById('dislike-btn').addEventListener('click', function() {
        alert('Yeehaw! Our Cat Boys don\'t like you either!');
        console.log('Dislike reaction');
        document.getElementById('feedback').close();
    });

    // button that closes the exits the prompt without response.
    document.getElementById('no-feedback-btn').addEventListener('click', function() {
        document.getElementById('feedback').close();
    });

    // Quote form submission handler
    var quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            quoteForm.reset();
        });
    }

});