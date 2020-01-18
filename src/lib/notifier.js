import Notification from '../components/Notification/index.js';

const notifContainer = document.createElement('div');
notifContainer.classList.add('notifications');
document.body.append(notifContainer);

const notifications = [];

export default async function notify (message, type) {
  const notification = new Notification({
    message,
    container: notifContainer,
    type
  });

  notifications.push(notification);

  if (notification.elem.offsetTop < 0) {
    notifications = notifications.filter(notification => {
      return !notification.isFinished;
    });
    notifications.shift().hideElem();
  }
}
