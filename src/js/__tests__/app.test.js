import { getSpecialAttacks } from '../app.js';

test('check function getSpecialAttacks() - 1', () => {
  const character1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const received = getSpecialAttacks(character1);
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  expect(received).toEqual(expected);
});

test('check function getSpecialAttacks() - 2', () => {
  const character2 = {
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 5,
    attack: 80,
    defence: 40,
    special: [
      {
        id: 15,
        name: 'Fire',
        icon: '🔥',
        description: 'Огонь наносит урон 30%',
      },
      {
        id: 20,
        name: 'Plague',
        icon: '💀',
        description: 'Заражение, регулярный урон 5%',
      },
      {
        id: 21,
        name: 'Radiation',
        icon: '☢️',
      },
    ],
  };

  const received = getSpecialAttacks(character2);
  const expected = [
    {
      id: 15,
      name: 'Fire',
      icon: '🔥',
      description: 'Огонь наносит урон 30%',
    },
    {
      id: 20,
      name: 'Plague',
      icon: '💀',
      description: 'Заражение, регулярный урон 5%',
    },
    {
      id: 21,
      name: 'Radiation',
      icon: '☢️',
      description: 'Описание недоступно',
    },
  ];

  expect(received).toEqual(expected);
});
