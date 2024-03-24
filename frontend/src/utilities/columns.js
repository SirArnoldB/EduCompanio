const generateColumns = (statuses, items) => {
    const columns = {};
    statuses.forEach((status) => {
        columns[status.id] = {
            name: status.status,
            items: items.filter((item) => item.statusId === status.id),
        };
    });
    return columns;
};

export { generateColumns }