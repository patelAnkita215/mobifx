import { environment } from '../../environments/environment';

// let domain = window.location.host.split('.')[0];
let apiurl = environment.baseApiUrl;
export const Endpoints = {
    // site: {
    //     // get url() {
    //     //     return 'http://my.mobifx.net/';
    //     // },
    //     get apiurl() {
    //         return 
    //     }
    //     // get apiurl() {
    //     //     return domain == 'nfpc' ? environment.baseApiUrl : environment.baseApiUrl;
    //     // },
    // },
    apiendpoint: {
        auth: {
            get signup() {
                return `${apiurl}/auth/signup`;
            },
            get login() {
                return `${apiurl}/auth/login`;
            },
            get verifyEmail() {
                return `${apiurl}/auth/verification/`;
            },
            get userInformation() {
                return `${apiurl}/auth/user-information`;
            }
        }
    }
}