const generateColumns = (statuses, items) => {
    const columns = {};
    statuses.forEach((status) => {
        columns[status.id] = {
            name: status.status,
            items: items.filter((item) => item.status_id === status.id),
        };
    });
    return columns;
};

export { generateColumns }