import { petsType } from '../model/pet';

export const getPets = () => {
  const mock: petsType[] = [
    { id: 1, name: 'Panchi', kind: 'chihuahua', isAdopted: false },
    { id: 2, name: 'Melly', kind: 'yorkshire', isAdopted: false },
    { id: 3, name: 'Dori', kind: 'egipcio', isAdopted: false },
  ];
  return mock;
};
