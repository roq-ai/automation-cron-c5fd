const mapping: Record<string, string> = {
  administrators: 'administrator',
  'cron-jobs': 'cron_job',
  invites: 'invite',
  organizations: 'organization',
  owners: 'owner',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
