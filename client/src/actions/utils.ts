import { EmployeeData, Employees } from "../types";

export const sortInputFirst = (input: string, data: Employees) => {
    // let sortPreparation = []
    
    // for (let i: number = 0; i < data.length; i++) {
    //     const indexOfInputByName: number = data[i]['Name'].toLowerCase().indexOf(input.toLowerCase())
    //     const indexOfInputByWorkTitle: number = data[i]['WorkTitle'].toLowerCase().indexOf(input.toLowerCase())
    //     const indexedEmployee = { ...data[i], indexOfInputByName: indexOfInputByName, indexOfInputByWorkTitle:indexOfInputByWorkTitle  }
    //     sortPreparation.push(indexedEmployee)
    // }
    const sortPreparation = data.map((employee) => {
        return {
            ...employee,
            indexOfInputByName: employee['Name'].toLowerCase().indexOf(input.toLowerCase()),
            indexOfInputByWorkTitle: employee['WorkTitle'].toLowerCase().indexOf(input.toLowerCase())
        }
    })
    const sortByNameAndWorkTitle = sortPreparation.filter(employee => employee.indexOfInputByName >= 0 && employee.indexOfInputByWorkTitle >= 0)
    const sortByName = sortPreparation.filter(employee => employee.indexOfInputByName >= 0 && employee.indexOfInputByWorkTitle < 0 )
    const sortByWorkTitle = sortPreparation.filter(employee => employee.indexOfInputByName < 0 && employee.indexOfInputByWorkTitle >= 0 )
    
    sortByNameAndWorkTitle.sort((first: EmployeeData, sec: EmployeeData) => {
        const firstInputIndex : number = first.indexOfInputByName! + first.indexOfInputByWorkTitle!
        const secInputIndex : number = sec.indexOfInputByName! + sec.indexOfInputByWorkTitle!
        return firstInputIndex - secInputIndex
    })
    sortByName.sort((first: EmployeeData, sec:EmployeeData) => {
        const firstInputIndex : number = first.indexOfInputByName!
        const secInputIndex : number = sec.indexOfInputByName!
        return firstInputIndex - secInputIndex
    })
    sortByWorkTitle.sort((first: EmployeeData, sec:EmployeeData) => {
        const firstInputIndex : number =first.indexOfInputByWorkTitle!
        const secInputIndex : number =sec.indexOfInputByWorkTitle!
        return firstInputIndex - secInputIndex
    })
    const sorted = [...sortByWorkTitle, ...sortByName, ...sortByNameAndWorkTitle]
    return sorted;
}

export const getFilterByValue = (data: Employees, filteredValue: string) => {
    return data.filter((obj: EmployeeData) => obj.WorkTitle.toLowerCase().includes(filteredValue.toLowerCase()) || obj.Name.toLowerCase().includes(filteredValue.toLowerCase())
   )
}
