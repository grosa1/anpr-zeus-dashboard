import axios from 'axios';
import Config from '../config'

const HOST = Config.API_HOST;
const PATH = "/recommendations";
const BASE_URL = HOST + PATH;

export function getRecommendedUsers(loginName, repoName, isseNumber, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/get-assignees-for-issues/${loginName}/${repoName}/${isseNumber}/${token}`)
            .then(function (response) {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject();
                }
            }).catch((err) => {
            reject(err);
        });
    });
}
