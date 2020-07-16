import axios from 'axios';

const HOST = "https://api.github.com/user/repos";
export const TEST_TOKEN = "2c3bc2ad04f0b4721677e640079c613f8983b1b1";

export function getRepoList(token) {
    return new Promise((resolve, reject) => {
        axios.get(HOST, {
            params: {
                access_token: token
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