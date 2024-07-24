import { GameState } from "./GameState";
import { NotificationData } from "./Notification";
export declare function getNotificationById(state: GameState, id: string): NotificationData | undefined;
export declare function getNotificationByGroupAndItem(state: GameState, group: string, item: string): NotificationData | undefined;
export declare function getNotificationsByGroup(state: GameState, group: string): NotificationData[];
export declare function getUnreadNotificationsByGroup(state: GameState, group: string): NotificationData[];
export declare function triggerNotification(state: GameState, group: string, item: string): GameState;
export declare function markNotificationAsRead(state: GameState, group: string, item: string): GameState;
