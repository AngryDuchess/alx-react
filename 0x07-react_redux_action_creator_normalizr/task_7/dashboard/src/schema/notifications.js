import notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";


const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifications, [notification]);

export default function getAllNotificationsByUser(userId) {
  const filtered = [];
  const messages = normalizedData.entities.messages;
  const notifications = normalizedData.entities.notifications;
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      filtered.push(messages[notifications[id].context]);
    }
  }
  return filtered;
}

console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));
