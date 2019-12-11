$(function(){
    $(".chat").niceScroll();
    
    var chatmessages = [{
        username : 'bot',
        name: 'Speedy',
        avatar: './img/chat1.png',
        text: 'Texto 1',
        ago: '5 min ago' 
        
    },
    {
        username : 'Kushta',
        name: 'Lucky dube',
        avatar: './img/chat2.png',
        text: 'Texto 2',
        ago: '2 min ago' 
        
    }];
    
    let htmldiv = ``;
    jQuery.each( chatmessages, function( i, item ) {

        let position = item.username=='bot'? 'left': 'right';
        let ago = item.ago;
        htmldiv += `<div class="answer ${position}">
                <div class="avatar">
                  <img src="${item.avatar}" alt="${item.name}">
                  <div class="status offline"></div>
                </div>
                <div class="name">${item.name}</div>
                <div class="text">
                  ${item.text}
                </div>
                <div class="time">${ago}</div>
              </div>`;
    });
    
 
    // u can loop in angular, this is just an exemple to show that an object can be looped
    $("div#chat-messages" ).html(htmldiv);

}) 