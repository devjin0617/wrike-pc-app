

const NativeNotification = Notification;
Notification = function (title, options) {
  const noti = new NativeNotification(title, options);
  if (WINDOWS_SEVEN) {
    ipcRenderer.send('notification', options);
  } else {
    noti.addEventListener('click', () => {
      ipcRenderer.send('notification-click');
    });
  }
  return noti;
};

Notification.prototype = NativeNotification.prototype;
Notification.permission = NativeNotification.permission;
Notification.requestPermission = NativeNotification.requestPermission.bind(Notification);
