import { getActiveUser, getUser } from '../../base/05-funciones';

describe('Tests functions on 05-funciones', () => {
  test('getUser: Must be return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    console.log(user);

    expect(user).toEqual(userTest);
  });
  test('geActiveUser: Must be return an object', () => {
    const username = 'Pablo';

    const userTest = {
      uid: 'ABC567',
      username,
    };

    const user = getActiveUser(username);

    console.log(user);

    expect(user).toEqual(userTest);
  });
});
