/**
Adding a new endpoints:
1. Create a new property in the ApiProps enum in api.properties.ts
2. Create a new entry in api.map. Add endpoint, store property and uniqueID
3. Add the end data location in the main store state in api.state.ts
*/

// import IStore
import { IStore } from '@shared';
import { ApiProps } from './api.properties';
// IStore.ApiMap

export const ApiMap: IStore.ApiMapping = {

  // Example
  users: {
    endpoint: '//jsonplaceholder.typicode.com/users',
    storeProperty: ApiProps.users,
    uniqueId: 'id',
    mapSrc: 'src',
    map: (users: any[]) => {
      // Sample dictionary mapping based on id property
      const dict = {};
      users.forEach(user => dict[user.id] = user);
      return {
        src: users,
        dict: dict
      };
    }
  },
};
