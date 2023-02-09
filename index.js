const mainArr = [
    {
        id: 0,
        fieldArr: [2, 4, 5, 2, 3, 7]
    },
    {
        id: 1,
        fieldArr: [2, 8, 11, 12, 5, 2, 8, 7]
    },
    {
        id: 2,
        fieldArr: [2, 4, 5, 9, 3, 7]
    },
    {
        id: 3,
        fieldArr: [2, 2, 5, 2, 3, 7]
    },
    {
        id: 4,
        fieldArr: [2, 8, 5, 2, 3, 7]
    }
];

const uniqArr = []
mainArr.forEach(el => {
        el.fieldArr.forEach(field => {
            if (!uniqArr.includes(field)) {
                uniqArr.push(field)
            }
    })
});

console.log(uniqArr)