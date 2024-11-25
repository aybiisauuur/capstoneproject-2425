/*$(document).ready(function() {
    $('#translation-form').on('submit', function(e) {
        e.preventDefault();
        var $button = $('#translate-btn');
        var $videoPlaceholder = $('#video-placeholder');
        
        $button.text('Translating').addClass('translating').prop('disabled', true);
        $videoPlaceholder.removeClass('video-active');
        
        setTimeout(function() {
            $videoPlaceholder.html('Video content here').addClass('video-active');
            $button.text('Translate').removeClass('translating').prop('disabled', false);
        }, 2000);
    });
});*/

$(document).ready(function () {
    $("#translation-form").on("submit", function (event) {
        event.preventDefault();

        const inputText = $("#text-input").val().trim();
        if (!inputText) {
            alert("Please enter text to translate.");
            return;
        }

        $.ajax({
            url: "/translate",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ text: inputText }),
            success: function (response) {
                const placeholder = $("#video-placeholder");
                placeholder.empty(); // Clear previous results

                if (response.images && response.images.length > 0) {
                    response.images.forEach(function (imagePath) {
                        const img = $("<img>")
                            .attr("src", "/" + imagePath)  // Make sure the server can serve these images
                            .attr("alt", "FSL letter")
                            .css({ width: "100px", height: "100px", margin: "5px" });
                        placeholder.append(img);
                    });
                } else {
                    placeholder.text("No FSL images found for the given text.");
                }
            },
            error: function (xhr) {
                // Handle the error properly by displaying the error message
                const errorMsg = xhr.responseJSON ? xhr.responseJSON.error : "An error occurred.";
                alert("Error: " + errorMsg);
            },
        });
    });
});