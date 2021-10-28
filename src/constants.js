const DEFAULT_NAME = "your";

const DEFAULT_LINKS = [];

const MENUS = {
    MAIN: "MAIN",
    MORE: "MORE",
    LOCALSTACK: "LOCALSTACK",
    LOCALSTACK_LAMBDAS_LIST: "LOCALSTACK_LAMBDAS_LIST",
    LOCALSTACK_LAMBDAS_LOGS_GROUPS: "LOCALSTACK_LAMBDAS_LOGS_GROUPS",
    LOCALSTACK_LAMBDAS_LOGS_STREAMS: "LOCALSTACK_LAMBDAS_LOGS_STREAMS",
};

const ACTIONS = {
    GO_BACK: "GO_BACK",
    QUIT: "QUIT",
    GET_MAIN_MENU: "GET_MAIN_MENU",
    LOCALSTACK_GET_MENU: "LOCALSTACK_GET_MENU",
    LOCALSTACK_LAMBDAS_GET_LIST: "LOCALSTACK_LAMBDAS_GET_LIST",
    LOCALSTACK_LAMBDA_GET_DETAILS: "LOCALSTACK_LAMBDA_GET_DETAILS",

    LOCALSTACK_LAMBDAS_GET_LOGS: "LOCALSTACK_LAMBDAS_GET_LOGS",
    LOCALSTACK_LAMBDAS_LOG_GET_GROUPS: "LOCALSTACK_LAMBDAS_LOG_GET_GROUPS",
    LOCALSTACK_LAMBDAS_LOG_GET_STREAMS: "LOCALSTACK_LAMBDAS_LOG_GET_STREAMS",
    LOCALSTACK_LAMBDAS_LOG_GET_DETAILS: "LOCALSTACK_LAMBDAS_LOG_GET_DETAILS",
    LOCALSTACK_EVENT_BRIDGE_STATUS: "LOCALSTACK_EVENT_BRIDGE_STATUS",
    LOCALSTACK_SQS_STATUS: "LOCALSTACK_SQS_STATUS",
    LOCALSTACK_SECRETS_MANAGER: "LOCALSTACK_SECRETS_MANAGER",
};

module.exports = {
    DEFAULT_NAME,
    DEFAULT_LINKS,
    MENUS,
    ACTIONS,
};
