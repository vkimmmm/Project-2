// //resource link: https://www.w3schools.com/jquery/default.asp

document.addEventListener('DOMContentLoaded', function() {
    const notifications = document.querySelectorAll('.notification');
    const screen = document.getElementById('screen');
    const audio = new Audio('media/audio/iPhone Notification Sound (HD).mp3');
    let audioInterval;

    function playNotifications() {
        notifications.forEach((notification, index) => {
            setTimeout(() => {
                notification.classList.add('active');
            }, index * 1000);
        });

        // Sound when clicked
        audioInterval = setInterval(function() {
            audio.play();
        }, 1000);
    }

    notifications.forEach(notification => {
        notification.addEventListener('click', function() {
            this.classList.toggle('special-notification');
            audio.pause();
            audio.currentTime = 0;
            clearInterval(audioInterval);
            audioInterval = setInterval(function() {
                audio.play();
            }, 1000);
            const boxId = this.getAttribute('data-box');
            const box = document.getElementById(boxId);
            box.classList.toggle('hidden-box');
        });
    });

    playNotifications();

    setTimeout(() => {
        notifications.forEach(notification => {
            notification.classList.add('chaotic');
        });
    }, (notifications.length * 1000) + 1000);
});