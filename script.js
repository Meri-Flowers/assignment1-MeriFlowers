window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.getElementById('feedback').showModal();
        window.removeEventListener('scroll', arguments.callee);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('love-btn').addEventListener('click', function() {
        alert('Yeehaw! Our Cat Boys are amazing!');
        console.log('Love reaction');
        document.getElementById('feedback').close();
    });

    document.getElementById('like-btn').addEventListener('click', function() {
        alert('Yeehaw! Our Cat Boys are alright!');
        console.log('Like reaction');
        document.getElementById('feedback').close();
    });

    document.getElementById('dislike-btn').addEventListener('click', function() {
        alert('Yeehaw! Our Cat Boys don\'t like you either!');
        console.log('Dislike reaction');
        document.getElementById('feedback').close();
    });

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
            
            console.log('Quote request submitted:', formData);
            alert('Thank you for your quote request! Our Cat Boys will contact you soon at ' + formData.email);
            quoteForm.reset();
        });
    }
});