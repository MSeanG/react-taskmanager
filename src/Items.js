import React, {useState, useEffect, useMemo} from 'react'

import { Selected } from './Selected'
import { Available } from './Available'
import { ChildComponent } from './ChildComponent'

const Items = ({update}) => {

  const array1 = useMemo(() => ['Role 1', 'Role 2', 'Role 3', 'Role 4', 'Role 5'], []);
  const array2 = useMemo(() => ['Role 2', 'Role 4'], []);
  const unique = true;

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  };

  const arrayToObject = (array, view) => {
    const obj = array.map((text, index) => {
      return {id: (index + 1), text: text};
    });
    return obj.map((kv) => ({...kv, list: view}));
  };

 // const objectArray = useMemo(() => arrayToObject(array1, 'Available', [array1]));
 const objectArray = arrayToObject(array1, 'Available');

  const rolesObjectArray = () => {
    let newObjectArray = [];
    array2.map((role) => {
      return objectArray.map((obj) => {
        if (obj.text === role) {
          obj.list = 'Selected';
        }
        return newObjectArray.push(obj);
      })
    })
    return newObjectArray.filter((v,i,a) => a.findIndex(v2 => (v2.id === v.id)) === i);
  };

  const [roles, setRoles] = useState(rolesObjectArray);
  const [selectedList, setSelectedList] = useState([]);

  //console.log(roles);
  const updateList = (id, newList) => {
    //console.log(roles);
    let roleList = roles;
    roleList = roleList.map((role) => {
      if (role.id === id) {
        role.list = newList;
      }
      return role;
    })
    setRoles(roleList)
  }

  const handleUpdate = () => {
    let array = [];
    roles.map((role) => {
      if (role.list === 'Selected') {
        array.push(role.text);
      }
      return array;
    });
    //console.log(array);
    setSelectedList(array);
    //console.log('click');
  };

  useEffect(() => {
    console.log(selectedList);
    update(selectedList);
  })

  return (
    <div className="items" onClick={handleUpdate}>
      <Selected roles={roles} updateList={updateList} unique={unique} />
      <Available roles={roles} updateList={updateList} />

      <ChildComponent onClick={increment} count={count} />
      {/*<textarea value={[selectedList]} readOnly></textarea> */}
    </div>
  )
}

export default Items;