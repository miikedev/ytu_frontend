/**
 * All API urls and other constants will reside here.
 * It is always a good idea to keep a local copy of all API response to 
 * keep your app working for UI changes and 
 * make it independent of network requirements.
 * 
 * They need to be categorised and grouped together as:
 *  - Actual endpoints url.
 *  - Local data .json file path.
 * At a moment only one group should be uncommented.
 * 
 * Other way to deal with this is to name every json file as per your service endpoint and use a basepath variable.
 * Toggle this basePath variable between "actual-domain.com/" or "/data/".
 */

// Actual endpoints. Uncomment below section to use actual data.
// export const GET_ALL_USERS = () => `https://jsonplaceholder.typicode.com/users`;
// export const GET_USER_DETAILS = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// Local endpoints. Uncomment below section to use dummy local data.
let domain = process.env.REACT_APP_DOMAIN;
console.log('domain=', domain)
export const GET_HOME_PAGE_API = `${domain}api/home`;
export const GET_RECENT_NEWS_API = (limit)=> `${domain}api/contents?sortColumn=id&sortDirection=desc&limit=${limit}&type=news`;
export const GET_HOME_RECENT_CAMPAIGN_API =(limit)=> `${domain}api/contents?sortColumn=id&sortDirection=desc&limit=${limit}&type=homepage_campaign`;
export const GET_STATEMENT_API =(limit)=> `${domain}api/statements?sortColumn=id&sortDirection=desc&limit=10`;
export const GET_STUDENT_ASSOCIATION_API =(limit)=> `${domain}api/organization-logos?sortColumn=id&sortDirection=desc&limit=${limit}&type=student_association`;
export const GET_STUDENT_CLUB_API =(limit)=> `${domain}api/organization-logos?sortColumn=id&sortDirection=desc&limit=${limit}&type=student_club`;
export const GET_OTHER_CLUB_API =(limit)=> `${domain}api/organization-logos?sortColumn=id&sortDirection=desc&limit=${limit}&type=other_club`;
export const GET_SPRING_REVOLUTION_API =(limit)=> `${domain}api/spring-revolution`;
export const GET_MOMENT_CAMPAIGN_API =(limit)=> `${domain}api/contents?sortColumn=id&sortDirection=desc&limit=${limit}&type=moment_campaign`;
export const GET_ACTIVITIES_API =(limit)=> `${domain}api/contents?sortColumn=id&sortDirection=desc&limit=${limit}&type=activity`;
export const GET_CDM_SUPPORT_API =(limit)=> `${domain}api/cdm-support-records?sortColumn=id&sortDirection=desc&limit=${limit}`;



export const GET_USER_DETAILS = (id) => `/api/user`;
