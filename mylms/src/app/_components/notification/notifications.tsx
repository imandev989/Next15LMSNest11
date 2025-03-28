"use client";
import { useNotificationStore } from "@/stores/notification.store";
import { NotificationToast } from "./notification-toast";
import { NotificationProps } from "./notification.types";

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  if (notifications.length < 1) return null;

  return (
    <div className="fixed  flex flex-col-reverse bottom-3 left-30 gap-3">
      {notifications.map((notification) => {
        return (
          <NotificationToast
            key={`notification-${notification.id}`}
            notification={notification}
          />
        );
      })}
    </div>
  );
};
