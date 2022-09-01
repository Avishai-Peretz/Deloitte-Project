import { EmployeeData, Employees } from "../types";

export const sortInputFirst = (input: string, data: Employees) => {
    let first: Employees = []; let others: Employees = [];
    for (let i: number = 0; i < data.length; i++) {
        if (data[i]['WorkTitle' || 'Name'].toLowerCase().indexOf(input.toLowerCase()) === 0) { first.push(data[i]); }
        else { others.push(data[i]); }
    }
    first.sort(); others.sort();
    const sorted: Employees = first.concat(others)
    return sorted;
}

export const getFilterByValue = (data: Employees, filteredValue: string) => {
    return data.filter((obj: EmployeeData) => obj.WorkTitle.toLowerCase().includes(filteredValue.toLowerCase()) || obj.Name.toLowerCase().includes(filteredValue.toLowerCase())
   )
}
