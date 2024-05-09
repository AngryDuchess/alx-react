import * as notifications from "../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  const filtered = notifications.filter((notification) => notification.author.id === userId)
  const getContexts = filtered.map((notification) => notification.context);
  return getContexts;
}
