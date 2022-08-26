export const sortInputFirst = (input, data = []) => {
    let first = []; let others = [];
    for (let i = 0; i < data.length; i++) { if (data[i].Name.toLowerCase().indexOf(input.toLowerCase()) === 0) { first.push(data[i]); }
        else { others.push(data[i]); }
    }
    first.sort(); others.sort(); return (first.concat(others));
}

export const getFilterByValue = (data,term, filteredValue) => {return data.filter(obj => obj[term].toLowerCase().includes(filteredValue.toLowerCase())) }

// filterFromLocal = localData.filter(employee => employee.Name.toLowerCase().includes(filteredValue.toLowerCase()))