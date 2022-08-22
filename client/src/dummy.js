import axios from "axios"

export const dummy = [
    {
      "Name": "Sherman Bruen",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/508.jpg",
      "WorkTitle": "Dynamic Interactions Consultant",
      "id": "1"
    },
    {
      "Name": "Charlene Ruecker",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/684.jpg",
      "WorkTitle": "Lead Operations Technician",
      "id": "2"
    },
    {
      "Name": "Kristopher Mosciski",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/327.jpg",
      "WorkTitle": "Forward Solutions Executive",
      "id": "3"
    },
    {
      "Name": "Miss Pedro Moore",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/23.jpg",
      "WorkTitle": "Internal Quality Analyst",
      "id": "4"
    },
    {
      "Name": "Toby Goldner DDS",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/138.jpg",
      "WorkTitle": "Dynamic Communications Agent",
      "id": "5"
    },
    {
      "Name": "Joan Aufderhar",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg",
      "WorkTitle": "Product Assurance Representative",
      "id": "6"
    },
    {
      "Name": "Salvatore Johnston",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/283.jpg",
      "WorkTitle": "Direct Quality Associate",
      "id": "7"
    },
    {
      "Name": "Elijah Lesch",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/638.jpg",
      "WorkTitle": "Regional Directives Coordinator",
      "id": "8"
    },
    {
      "Name": "Darin Cummerata",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/587.jpg",
      "WorkTitle": "National Response Administrator",
      "id": "9"
    },
    {
      "Name": "Salvador Beer",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
      "WorkTitle": "Lead Tactics Planner",
      "id": "10"
    },
    {
      "Name": "Anna Runolfsdottir",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      "WorkTitle": "Principal Operations Developer",
      "id": "11"
    },
    {
      "Name": "Lola Roob",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg",
      "WorkTitle": "Dynamic Configuration Strategist",
      "id": "12"
    },
    {
      "Name": "Debbie Rogahn",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg",
      "WorkTitle": "Chief Integration Officer",
      "id": "13"
    },
    {
      "Name": "Lillie Fisher",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/859.jpg",
      "WorkTitle": "Direct Interactions Officer",
      "id": "14"
    },
    {
      "Name": "Emma McKenzie",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg",
      "WorkTitle": "Chief Usability Analyst",
      "id": "15"
    },
    {
      "Name": "Ms. Lola Wisozk",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg",
      "WorkTitle": "Direct Identity Coordinator",
      "id": "16"
    },
    {
      "Name": "Jorge Towne",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/191.jpg",
      "WorkTitle": "Corporate Assurance Engineer",
      "id": "17"
    },
    {
      "Name": "Pat Welch",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg",
      "WorkTitle": "Forward Communications Officer",
      "id": "18"
    },
    {
      "Name": "Vicky Schulist",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1015.jpg",
      "WorkTitle": "Forward Web Analyst",
      "id": "19"
    },
    {
      "Name": "Alejandro Tremblay",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/358.jpg",
      "WorkTitle": "Dynamic Assurance Coordinator",
      "id": "20"
    },
    {
      "Name": "Margaret Buckridge",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg",
      "WorkTitle": "Investor Web Strategist",
      "id": "21"
    },
    {
      "Name": "Brandon Adams",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/199.jpg",
      "WorkTitle": "Direct Response Supervisor",
      "id": "22"
    },
    {
      "Name": "Marlon Prosacco",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
      "WorkTitle": "Senior Web Strategist",
      "id": "23"
    },
    {
      "Name": "Jason Hane",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/840.jpg",
      "WorkTitle": "Corporate Operations Officer",
      "id": "24"
    },
    {
      "Name": "Owen Altenwerth",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/52.jpg",
      "WorkTitle": "Global Usability Technician",
      "id": "25"
    },
    {
      "Name": "Dr. Regina Shields",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/83.jpg",
      "WorkTitle": "Chief Interactions Consultant",
      "id": "26"
    },
    {
      "Name": "Dr. Delbert Corkery",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1014.jpg",
      "WorkTitle": "Customer Configuration Manager",
      "id": "27"
    },
    {
      "Name": "Jaime White III",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/243.jpg",
      "WorkTitle": "Regional Factors Technician",
      "id": "28"
    },
    {
      "Name": "Arnold Monahan",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg",
      "WorkTitle": "Direct Web Developer",
      "id": "29"
    },
    {
      "Name": "Woodrow Altenwerth",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1025.jpg",
      "WorkTitle": "Senior Markets Technician",
      "id": "30"
    },
    {
      "Name": "Anne Howe",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg",
      "WorkTitle": "Senior Intranet Manager",
      "id": "31"
    },
    {
      "Name": "Dr. Reginald Hettinger",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/350.jpg",
      "WorkTitle": "Forward Accountability Representative",
      "id": "32"
    },
    {
      "Name": "Orlando Collins III",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/695.jpg",
      "WorkTitle": "Central Mobility Facilitator",
      "id": "33"
    },
    {
      "Name": "Hannah Stehr",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/669.jpg",
      "WorkTitle": "Product Group Developer",
      "id": "34"
    },
    {
      "Name": "Darlene Borer",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg",
      "WorkTitle": "Human Quality Designer",
      "id": "35"
    },
    {
      "Name": "Marianne Heathcote",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
      "WorkTitle": "Investor Paradigm Supervisor",
      "id": "36"
    },
    {
      "Name": "Mrs. Clifton Hagenes",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
      "WorkTitle": "Product Infrastructure Specialist",
      "id": "37"
    },
    {
      "Name": "Javier Stamm",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg",
      "WorkTitle": "District Factors Analyst",
      "id": "38"
    },
    {
      "Name": "Benjamin Smitham",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg",
      "WorkTitle": "Human Response Liaison",
      "id": "39"
    },
    {
      "Name": "Susan Vandervort",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/321.jpg",
      "WorkTitle": "Legacy Research Administrator",
      "id": "40"
    },
    {
      "Name": "Lucas Nicolas",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/318.jpg",
      "WorkTitle": "Senior Operations Architect",
      "id": "41"
    },
    {
      "Name": "Toby Reinger",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1207.jpg",
      "WorkTitle": "Dynamic Communications Administrator",
      "id": "42"
    },
    {
      "Name": "Irma Stiedemann IV",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/226.jpg",
      "WorkTitle": "Senior Directives Associate",
      "id": "43"
    },
    {
      "Name": "Jo Fritsch",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/445.jpg",
      "WorkTitle": "Corporate Assurance Planner",
      "id": "44"
    },
    {
      "Name": "Chester Grimes",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
      "WorkTitle": "Customer Division Representative",
      "id": "45"
    },
    {
      "Name": "Hazel Mueller",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg",
      "WorkTitle": "National Markets Designer",
      "id": "46"
    },
    {
      "Name": "Bernadette West",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1110.jpg",
      "WorkTitle": "Central Division Agent",
      "id": "47"
    },
    {
      "Name": "Neal Dickinson",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/468.jpg",
      "WorkTitle": "Future Communications Producer",
      "id": "48"
    },
    {
      "Name": "Dr. Katherine Hand",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/869.jpg",
      "WorkTitle": "Forward Marketing Liaison",
      "id": "49"
    },
    {
      "Name": "Terrence Koss",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1052.jpg",
      "WorkTitle": "Customer Assurance Executive",
      "id": "50"
    }
  ]
const url = 'http://localhost:3002/employees';
export const fetch= () => {
    dummy.forEach((item) => axios.post(url, item))
}

