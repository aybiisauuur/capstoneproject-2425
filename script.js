$(document).ready(function() {
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
});
