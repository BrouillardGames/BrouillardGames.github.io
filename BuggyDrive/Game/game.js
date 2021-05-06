var vk_user_id;

VK.init(function() {
	init();
  }, function() {
    alert('Ошибка авторизации SDK');
	
}, '5.130');

function init() {
	VK.api("user.get", {"user_ids": "id!", "v":"5.73"}, function (data) { vk_user_id = data.response[0].id });
}


function post(score) {
	VK.api("wall.post", {"message": "Я набрал " + (score) + " очков в игре Buggy Drive (https://vk.com/app7846841). Сможешь больше? #BrouillardGames", "attachments" : "photo-165410964_457239179, https://vk.com/app7846841", "v":"5.73"}, function (data) {
});
}
	
function friend() {
	VK.callMethod("showInviteBox");
}



/*

window.addEventListener('load', function() {
 
   var user_id = vk_user_id;   // user's id
   var app_id = 7846841;  // your app's id
 
   admanInit({
   user_id: user_id,
   app_id: 7846841,
   type: 'preloader'         // 'preloader' or 'rewarded' (default - 'preloader')
   // params: {preview: 1}   // to verify the correct operation of advertising
}, onAdsReady, onNoAds);
 
function onAdsReady(adman) {
    adman.onStarted(function () {});
    adman.onCompleted(function() {});          
    adman.onSkipped(function() {});          
    adman.onClicked(function() {});
    adman.start('preroll');
};
function onNoAds() {};

*/

setTimeout(() => {
   ShowAdvert();
   console.log('Advert showed!!! ' + vk_user_id);
}, 20000);

function ShowAdvert() {
	
	var user_id = vk_user_id;   // user's id
    var app_id = 7846841;  // your app's id
 
    admanInit({
      user_id: user_id,
      app_id: 7846841,
      type: 'preloader'         // 'preloader' or 'rewarded' (default - 'preloader')
      // params: {preview: 1}   // to verify the correct operation of advertising
    }, onAdsReady, onNoAds);
 
    function onAdsReady(adman) {
      adman.onStarted(function () {});
      adman.onCompleted(function() {});          
      adman.onSkipped(function() {});          
      adman.onClicked(function() {});
      adman.start('preroll');
    };
    function onNoAds() {};
	
};
