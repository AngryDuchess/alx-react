import * as notifications from "../../notifications.json";
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
  const filtered = notifications.filter((notification) => notification.author.id === userId)
  const getContexts = filtered.map((notification) => notification.context);
  return getContexts;
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages');
const messageSchema = {messages: "guid"}
const notification = new schema.Entity('notifications');


