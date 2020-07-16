import axios from 'axios';
import Config from '../config'

const HOST = Config.API_HOST;
const PATH = "/analytics";
const BASE_URL = HOST + PATH;

const ROUTE_AVERAGE_CLOSING_TIME="/average-closing-time";
const ROUTE_AVERAGE_FIXING_TIME="/average-fixing-time";
const ROUTE_AVERAGE_FIRST_RESPONSE_TIME="/average-first-response-time";
const ROUTE_AVERAGE_TIME_FROM_LAST_COMMENT="/average-time-from-last-comment";
const ROUTE_COMMENTED_CLOSED_ISSUE="/commented-closed-issues";
const ROUTE_COMMENTED_FIXED_ISSUE="/commented-fixed-issues";
const ROUTE_COMMENTED_OPEN_ISSUES="/commented-open-issues";
const ROUTE_TICKER_CLOSING_TIME_DISTRIBUTION="/closing-time-distribution";
const ROUTE_FIRST_RESPONSE_TIME_DISTRIBUTION="/first-response-time-distribution";
const ROUTE_FIXING_TIME_DISTRIBUTION="/fixing-time-distribution";
const ROUTE_LABELED_CLOSED_ISSUES="/labeled-closed-issues";
const ROUTE_LABELED_FIXED_ISSUES="/labeled-fixed-issues";
const ROUTE_LABELED_OPEN_ISSUES="/labeled-open-issues";
const ROUTE_NUMBER_OF_COMMENTED_CLOSED_ISSUES="/number-of-commented-closed-issues";
const ROUTE_NUMBER_OF_COMMENTED_FIXED_ISSUES="/number-of-commented-fixed-issues";
const ROUTE_NUMBER_OF_COMMENTED_OPEN_ISSUES="/number-of-commented-open-issues";
const ROUTE_NUMBER_OF_CLOSED_ISSUES="/number-of-closed-issues";
const ROUTE_NUMBER_OF_FIXED_ISSUES="/number-of-fixed-issues";
const ROUTE_NUMBER_OF_LABELED_CLOSED_ISSUES="/number-of-labeled-closed-issues";
const ROUTE_NUMBER_OF_LABELED_FIXED_ISSUES="/number-of-labeled-fixed-issues";
const ROUTE_NUMBER_OF_LABELED_OPEN_ISSUES="/number-of-labeled-open-issues";
const ROUTE_NUMBER_OF_OPEN_ISSUES="/number-of-open-issues";
const ROUTE_NUMBER_OF_UNCOMMENTED_CLOSED_ISSUES="/number-of-uncommented-closed-issues";
const ROUTE_NUMBER_OF_UNCOMMENTED_FIXED_ISSUES="/number-of-uncommented-fixed-issues";
const ROUTE_NUMBER_OF_UNCOMMENTED_OPEN_ISSUES="/number-of-uncommented-open-issues";
const ROUTE_NUMBER_OF_UNLABELED_CLOSED_ISSUES="/number-of-unlabeled-closed-issues";
const ROUTE_NUMBER_OF_UNLABELED_FIXED_ISSUES="/number-of-unlabeled-fixed-issues";
const ROUTE_NUMBER_OF_UNLABELED_OPEN_ISSUES="/number-of-unlabeled-open-issues";
const ROUTE_TIMES_FROM_LAST_COMMENT="/times-from-last-comment";
const ROUTE_UNCOMMENTED_CLOSED_ISSUES="/uncommented-closed-issues";
const ROUTE_UNCOMMENTED_FIXED_ISSUES="/uncommented-fixed-issues";
const ROUTE_UNCOMMENTED_OPEN_ISSUES="/uncommented-open-issues";
const ROUTE_UNLABELED_CLOSED_ISSUES="/unlabeled-closed-issues";
const ROUTE_UNLABELED_FIXED_ISSUES="/unlabeled-fixed-issues";
const ROUTE_UNLABELED_OPEN_ISSUES="/unlabeled-open-issues";


export function getAverageClosingTime(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_AVERAGE_CLOSING_TIME}/${loginName}/${repoName}/${token}`)
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

export function getAverageFixingTime(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_AVERAGE_FIXING_TIME}/${loginName}/${repoName}/${token}`)
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

export function getAverageFirstResponseTime(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_AVERAGE_FIRST_RESPONSE_TIME}/${loginName}/${repoName}/${token}`)
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

export function getAverageTimeFromLastComment(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_AVERAGE_TIME_FROM_LAST_COMMENT}/${loginName}/${repoName}/${token}`)
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

export function getCommentedClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_COMMENTED_CLOSED_ISSUE}/${loginName}/${repoName}/${token}`)
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

export function getCommentedFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_COMMENTED_FIXED_ISSUE}/${loginName}/${repoName}/${token}`)
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

export function getCommentedOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_COMMENTED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getTicketClosingTimeDistribution(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_TICKER_CLOSING_TIME_DISTRIBUTION}/${loginName}/${repoName}/${token}`)
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

export function getFirstResponseTimeDistribution(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_FIRST_RESPONSE_TIME_DISTRIBUTION}/${loginName}/${repoName}/${token}`)
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

export function getFixingTimeDistribution(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_FIXING_TIME_DISTRIBUTION}/${loginName}/${repoName}/${token}`)
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

export function getLabeledClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_LABELED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getLabeledFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_LABELED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getLabeledOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_LABELED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfCommentedClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_COMMENTED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfCommentedFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_COMMENTED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfCommentedOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_COMMENTED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfLabeledClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_LABELED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfLabeledFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_LABELED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfLabeledOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_LABELED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfUncommentedClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_UNCOMMENTED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfUncommentedFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_UNCOMMENTED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfUncommentedOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_UNCOMMENTED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfUnlabeledClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_UNLABELED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfUnlabeledFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_UNLABELED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getNumberOfUnlabeledOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_NUMBER_OF_UNLABELED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getTimesFromLastComment(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_TIMES_FROM_LAST_COMMENT}/${loginName}/${repoName}/${token}`)
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

export function getUncommentedClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_UNCOMMENTED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getUncommentedFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_UNCOMMENTED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getUncommentedOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_UNCOMMENTED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getUnlabeledClosedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_UNLABELED_CLOSED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getUnlabeledFixedIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_UNLABELED_FIXED_ISSUES}/${loginName}/${repoName}/${token}`)
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

export function getUnlabeledOpenIssues(loginName, repoName, token) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${ROUTE_UNLABELED_OPEN_ISSUES}/${loginName}/${repoName}/${token}`)
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
