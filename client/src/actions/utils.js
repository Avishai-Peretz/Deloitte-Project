export const sortInputFirst = (input, data = [], field) => {
    let first = []; let others = [];
    for (let i = 0; i < data.length; i++) { if (data[i][field].toLowerCase().indexOf(input.toLowerCase()) === 0) { first.push(data[i]); }
        else { others.push(data[i]); }
    }
    first.sort(); others.sort(); return (first.concat(others));
}

export const getFilterByValue = (data,term, filteredValue) => {return data.filter(obj => obj[term].toLowerCase().includes(filteredValue.toLowerCase())) }

export const setToLocal = (data) => {
    localStorage.setItem('searchResultsByWorkTitle', data);
    localStorage.setItem('searchResultsByName', data);
 }
