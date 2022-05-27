import React from 'react'

export const Available = ({roles, updateList}) => {
  //console.log(roles);
    return (
        <div className="completed" key={'Available'}>
            <h1 key={'h1Available'}>Available</h1>
            {
              roles && roles.map((role)=>{
                        if(role && role.list==='Available') {
                          return <><p className="item" key={role.id}>{role.text} <button className="mark_pending" key={role.id.toString()} onClick={()=>{updateList(role.id,'Selected')}}>Move to Selected</button></p></>
                        }
                        return null;
                    })
                }
 
        </div>
    )
}