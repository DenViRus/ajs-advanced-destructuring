export function getSpecialAttacks(character) {
  const specialAttacs = [];

  for (const specAttack of character.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = specAttack;
    specialAttacs.push({
      id,
      name,
      icon,
      description,
    });
  }

  return specialAttacs;
}
