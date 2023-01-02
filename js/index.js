

$('#change-color').on('click',function(){
    $text = $("button[id='change-color']").text()
    if ($text === 'Dark Theme'){
        $('body').css('background-color', ' rgb(202, 195, 195)')
        $("button[id='change-color']").text('Light Theme')
    }
    else if ($text === 'Light Theme'){
        $('body').css('background-color', 'white')
        $("button[id='change-color']").text('Dark Theme')
    }
    
});












