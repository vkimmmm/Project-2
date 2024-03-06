//resource link: https://www.w3schools.com/jquery/default.asp

document.addEventListener('DOMContentLoaded', function() {
  const notifications = document.querySelectorAll('.notification');

  notifications.forEach((notification, index) => {
    setTimeout(() => {
      notification.classList.add('active');
    }, index * 1000); // delay within notifs
  });
});

