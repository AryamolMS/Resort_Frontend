import React, { createContext, useState } from 'react';

export const editResponseStatusContext = createContext();
export const deleteResponseStatusContext = createContext()
export const addResponseStatusContext = createContext()
export const isAuthtokenContext = createContext()
export const userbookingdetailsContext = createContext()

function ContextShare({ children }) {
  const [editResponseStatus, setEditResponseStatus] = useState({});
  const [deleteResponseStatus,setDeleteResponseStatus] = useState({})
  const [addResponseStatus,setAddResponseStatus] = useState({})
  const [isAuthtken,setIsAuthtoken] = useState(true)
  const [bookingdetails,setBookingdetails] = useState({})
  
  return (
    <editResponseStatusContext.Provider value={{ editResponseStatus, setEditResponseStatus }}>
      <deleteResponseStatusContext.Provider value={{deleteResponseStatus,setDeleteResponseStatus}}>
        <addResponseStatusContext.Provider value={{addResponseStatus,setAddResponseStatus}}>
          <isAuthtokenContext.Provider value={{isAuthtken,setIsAuthtoken}}>
            <userbookingdetailsContext.Provider value={{bookingdetails,setBookingdetails}}>
          {children}
          </userbookingdetailsContext.Provider>
          </isAuthtokenContext.Provider>
        </addResponseStatusContext.Provider>
      </deleteResponseStatusContext.Provider>
    </editResponseStatusContext.Provider>
  );
}

export default ContextShare;
