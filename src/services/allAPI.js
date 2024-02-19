import { baseurl } from "./baseurl"
import { commonAPI } from "./commonAPI"


//register api
export const registerApi = async(user)=>{
  return  await commonAPI('POST',`${baseurl}/user/register`,user,"")
}

//login api
export const loginApi = async(user)=>{
  return  await commonAPI('POST',`${baseurl}/user/login`,user,"")
}

//rooms add 
export const addRoomsnApi = async(reqBody,reqHeader)=>{
  return  await commonAPI('POST',`${baseurl}/rooms/add`,reqBody,reqHeader)
}

//display rooms
export const displayRoomsnApi = async(reqHeader)=>{
  return  await commonAPI('GET',`${baseurl}/room/home`,"",reqHeader)
}

//edit 
export const editRoomsnApi = async(projectId,reqBody,reqHeader)=>{
  return  await commonAPI('PUT',`${baseurl}/room/edit/${projectId}`,reqBody,reqHeader)
}

//delete
export const deleteroomApi = async(projectId,reqHeader)=>{
  return await commonAPI('DELETE',`${baseurl}/room/delete/${projectId}`,{},reqHeader)
}

//display rooms in user
export const displayuserRoomsnApi = async(reqHeader)=>{
  return  await commonAPI('GET',`${baseurl}/user/home`,"",reqHeader)
}

//edit profile
export const editUserApi = async(reqBody,reqHeader)=>{
  return  await commonAPI('PUT',`${baseurl}/user/edit`,reqBody,reqHeader)
}

//bookings
export const bookingsApi = async (reqBody, reqHeader) => {
  return await commonAPI('POST', `${baseurl}/user/bookings`, reqBody, reqHeader);
};

//userbookings
export const userbookingsApi = async (reqHeader) => {
  return await commonAPI('GET', `${baseurl}/booking/user-bookings`,"",reqHeader);
};

//allbookings
export const allbookingsApi = async (searchKey,reqHeader) => {
  return await commonAPI('GET', `${baseurl}/booking/all-bookings?search=${searchKey}`,"",reqHeader);
};