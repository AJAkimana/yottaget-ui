export const getInitials = (name = '') =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');
export const toAccess = (access) => {
  return Number(access) === 2
    ? 'Landload'
    : Number(access) === 2
    ? 'Tenant'
    : 'Administrator';
};
