import cls from './classes.js';

export default [
  {
    name: 'title'
  },
  {
    name: 'description',
    mods: [cls.itemFull]
  },
  {
    name: 'images',
    mods: [cls.itemFull]
  },
  {
    name: 'subcategory'
  },
  {
    name: 'price',
    mods: [cls.itemTiny]
  },
  {
    name: 'discount',
    mods: [cls.itemTiny, cls.itemFollow]
  },
  {
    name: 'quantity',
    mods: [cls.itemTiny]
  },
  {
    name: 'status',
    mods: [cls.itemTiny]
  }
];
