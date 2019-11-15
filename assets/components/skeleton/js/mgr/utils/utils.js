Ext.namespace('skeleton.utils');

Skeleton.utils.getMenu = function (actions, grid, selected) {
    var menu = [], cls, icon, title, item, has_delete = false;

    for (var i in actions) {
        if (!actions.hasOwnProperty(i)) {
            continue;
        }

        item = actions[i];

        if (!item['menu']) {
            //Check if its a separation
            if (item == '-') {
                menu.push(item);
            }

            continue;
        } else if (menu.length > 0 && !has_delete && (/^remove/i.test(item['action']) || /^delete/i.test(item['action']))) {
            //Add an line to visual separate the delete item from the rest of the items
            menu.push('-');
            has_delete = true;
        }

        //Check if multiple menu request
        if (selected.length > 1) {
            if (!item['multiple']) {
                continue;
            } else if (typeof(item['multiple']) == 'string') {
                item['title'] = item['multiple'];
            }
        }

        title = item['title'] ? item['title'] : '';
        icon = item['icon'] ? item['icon'] : '';

        //Check if for menu is an exception class
        if (typeof(item['cls']) == 'object') {
            if (typeof(item['cls']['menu']) != 'undefined') {
                icon += ' ' + item['cls']['menu'];
            }
        } else {
            cls = item['cls'] ? item['cls'] : '';
        }

        menu.push({
            handler: item['action'] ? grid[item['action']] : '',
            text: String.format('<span class="{0}"><i class="x-menu-item-icon {1}"></i>{2}</span>', cls, icon, title),
            scope: grid
        });
    }

    return menu;
};

Skeleton.utils.renderActions = function (value, props, row) {
    var list = [], cls, icon, title, action, item;

    for (var i in row.data.actions) {
        if (!row.data.actions.hasOwnProperty(i)) {
            continue;
        }

        item = row.data.actions[i];

        if (!item['button']) {
            continue;
        }

        icon = item['icon'] ? item['icon'] : '';

        //Check if for action is an exception class
        if (typeof(item['cls']) == 'object') {
            if (typeof(item['cls']['button']) != 'undefined') {
                icon += ' ' + item['cls']['button'];
            }
        } else {
            cls = item['cls'] ? item['cls'] : '';
        }

        action = item['action'] ? item['action'] : '';
        title = item['title'] ? item['title'] : '';

        item = String.format(
            '<li class="{0}"><button class="btn btn-default {1}" action="{2}" title="{3}"></button></li>',
            cls, icon, action, title
        );

        list.push(item);
    }

    return String.format('<ul class="general-row-actions">{0}</ul>', list.join(''));
};