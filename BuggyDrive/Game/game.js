VK.init(function() {
	init();
  }, function() {
    alert('Ошибка авторизации SDK');
	
}, '5.130');

function init() {
	
}


function post(score) {
	VK.api("wall.post", {"message": "Я набрал " + (score) + " очков в игре Buggy Drive(https://vk.com/app7846841). Сможешь больше? #BrouillardGames", "attachments" : "photo-165410964_457239179, https://vk.com/app7846841", "v":"5.73"}, function (data) {
});
}
	
function friend() {
	VK.callMethod("showInviteBox");
}

