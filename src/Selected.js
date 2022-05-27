import React from 'react'

export const Selected = ({roles, updateList, unique}) => {

  return (
    <div className="pending" key={'Selected'}>
      <h1 id="p">Selected</h1>

      {
        roles && roles.map((role) => {
          if (unique === true) {
            if(role && role.list === 'Selected') {
              return <>
                <p className="item" key={role.id}>
                  {role.text}
                  <button  className="mark_complete" key={role.id} onClick={()=>{updateList(role.id,'Available')}}>Move to Available</button>
                </p>
              </>
            }
          return null;
          }
          return <>
          <p className="item" key={role.id}>
            {role.text}
            <button  className="mark_complete" key={role.id} onClick={()=>{updateList(role.id,'Available')}}>Move to Available</button>
          </p>
          </>
        })
      }
    </div>
  )
}