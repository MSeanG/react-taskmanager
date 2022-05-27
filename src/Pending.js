import React from 'react'

export const Pending = ({items, unique, updateStatus}) => {

  return (
    <div className="pending">
      <h1 id="p">Pending</h1>

      {
        items && items.map((item) => {
          if (unique === true) {
            if(item && item.status === 'Pending') {
              return <>
                <p className="item" key={item.id}>
                  {item.title}
                  <button  className="mark_complete" key={item.id} onClick={()=>{updateStatus(item.id,'Completed')}}>Mark Complete</button>
                </p>
              </>
            }
          return null;
          }
          return <>
            <p className="item" key={item.id}>
              {item.title}
              <button  className="mark_complete" key={item.id} onClick={()=>{updateStatus(item.id,'Completed')}}>Mark Complete</button>
            </p>
          </>
        })
      }
    </div>
  )
}