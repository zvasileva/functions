export default function health(item) {
  let result = 'wounded';
  if (item.health > 50) {
    result = 'healthy';
  } else if (item.health < 15) {
    result = 'critical';
  }
  return result;
}
