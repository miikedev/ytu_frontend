import axios from "axios";
// const idpData = "http://localhost:3006/idp"


export async function getData(apiLink) {
    const response = await axios.get(apiLink);
    return response;
}

export async function getDataID(apiLink, blogID) {
    const response = await axios.get(apiLink + '/' + blogID)
    return response;
}