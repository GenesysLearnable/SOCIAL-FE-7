import React, { useState } from 'react'


const profile = () => {
    const [name, setName] = useState();
  return (
    <>
        <div className="container-proile">
            <div></div>
            <div>
                <div>
                    <p>Your User ID {name}</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default profile