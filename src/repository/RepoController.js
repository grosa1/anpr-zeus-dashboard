import axios from 'axios';
import Config from "../config";

const HOST = Config.GITHUB_HOST;

export function getRepoList(token) {
    return new Promise((resolve, reject) => {
        axios.get(HOST, {
            headers: {
                Authorization:  "token " + token
            }
        })
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

//https://api.github.com/user/repos?access_token=88fb84222da601030cc138a8d6b8aa179418ed18
