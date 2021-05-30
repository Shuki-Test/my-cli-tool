const inquirer = require("inquirer");
const { getCommonMenu } = require("./common");
const main = require("./main");
const localstack = require("./localstack");
const { MENUS } = require("../constants");

const getMenu = (menuName, ctx, menus = null) => {
    try {
        //todo inject custom menu
        menus = menus || { ...main, ...localstack };

        const { items, meta = {} } = menus[menuName];

        ctx.choises = items;
        ctx.isMainMenu = meta.isMain || false;

        ctx.previousMenu = meta.isMain ? null : ctx.currentMenu;
        ctx.currentMenu = menuName;

        choices = [
            ...(ctx.choises ? ctx.choises : []),
            ...[new inquirer.Separator()],
            ...getCommonMenu(ctx),
        ];

        return inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "choice",
                    message: ctx.menuMessage || "Select option",
                    loop: false,
                    choices: choices,
                },
            ])
            .then((answers) => {
                ctx.performAction(answers, ctx);
            });
    } catch (error) {
        // todo - handle dynamic menu items
        getMenu(MENUS.MAIN, ctx);
    }
};

module.exports = getMenu;