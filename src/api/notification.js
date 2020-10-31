import { authRequest } from '@/utils/request'

export function getNotifications(...params) {
  return authRequest('notifications/stats', ...params)
}
