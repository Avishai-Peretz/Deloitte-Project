import { EmployeeData, Employees } from "../interfaces/test";

export const sortInputFirst = (input: string, data: Employees, field: string) => {
    let first: Employees = []; let others: Employees = [];
    for (let i: number = 0; i < data.length; i++) {
        if (data[i][field as keyof EmployeeData].toLowerCase().indexOf(input.toLowerCase()) === 0) { first.push(data[i]); }
        else { others.push(data[i]); }
    }
    first.sort(); others.sort();
    const sorted: Employees = first.concat(others)
    return sorted;
}

export const getFilterByValue = (data: Employees, term: string, filteredValue: string) => {
    return data.filter((obj: EmployeeData) => obj[term as keyof EmployeeData].toLowerCase().includes(filteredValue.toLowerCase()))
}

