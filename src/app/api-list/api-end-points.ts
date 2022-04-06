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
    ApiEndpoint: {
        Auth: {
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
                return `${apiurl}/user-information`;
            },
            get countries() {
                return `${"https://countries.petethompson.net/data/countries.json"}`;
            }
        },
        Plans: {
            get plans() {
                return `${apiurl}/plan/list`;
            },
            get addPlans() {
                return `${apiurl}/plan/add`;
            },
        },
        Leverage: {
            get leverage() {
                return `${apiurl}/leverage/list`;
            },
            get addLeverage() {
                return `${apiurl}/leverage/add`;
            },
        }
    }
}