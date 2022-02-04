import { userConstants } from '../_constants';
import { history } from '../_helpers';
import axios from "axios";
import { Toast } from "../components/common/ToastAlert";
const API_URL = "http://localhost:8080";


 export function register(registeruserdata) {
     return dispatch => {
         //console.log('sended data:', registeruserdata);
         axios.post(API_URL + "/api/auth/signup", registeruserdata)
            .then(res => { 
                    //console.log('received data:', res.data);
                    Toast("",res.data, "success");
                    dispatch({
                        type: userConstants.REGISTER_SUCCESS, 
                        payload: res.data
                    });
                    history.push('/login');
                }
            )
            .catch(error => {
                console.log("received error data:", error.response.data)
                dispatch({
                    type: userConstants.REGISTER_FAILURE, 
                    payload: "error"
                });
            });
     };
 
 }

export function login(logindata) {
    return dispatch => {
        //console.log('sended data:', logindata);
        axios.post(API_URL + "/api/auth/signin", logindata)
           .then(res => { 
                   console.log('received data:', res.data);
                   Toast("","login success!", "success");
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(res.data));
                   dispatch({
                       type: userConstants.LOGIN_SUCCESS, 
                       payload: res.data
                   });
                   history.push('/');
               }
           )
           .catch(error => {
               //console.log("received error data:", error.response.data)
               Toast("",error.response.data,"danger");
               dispatch({
                   type: userConstants.LOGIN_FAILURE, 
                   payload: "error"
               });
           });
    };

};