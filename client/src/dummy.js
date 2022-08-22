import axios from "axios"

export const dummy = [
    {
      "Name": "Sherman Bruen",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/508.jpg",
      "WorkTitle": "Dynamic Interactions Consultant",
    },
    {
      "Name": "Charlene Ruecker",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/684.jpg",
      "WorkTitle": "Lead Operations Technician",
    },
    {
      "Name": "Kristopher Mosciski",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/327.jpg",
      "WorkTitle": "Forward Solutions Executive",
    },
    {
      "Name": "Miss Pedro Moore",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/23.jpg",
      "WorkTitle": "Internal Quality Analyst",
    },
    {
      "Name": "Toby Goldner DDS",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/138.jpg",
      "WorkTitle": "Dynamic Communications Agent",
    },
    {
      "Name": "Joan Aufderhar",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg",
      "WorkTitle": "Product Assurance Representative",
    },
    {
      "Name": "Salvatore Johnston",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/283.jpg",
      "WorkTitle": "Direct Quality Associate",
    },
    {
      "Name": "Elijah Lesch",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/638.jpg",
      "WorkTitle": "Regional Directives Coordinator",
    },
    {
      "Name": "Darin Cummerata",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/587.jpg",
      "WorkTitle": "National Response Administrator",
    },
    {
      "Name": "Salvador Beer",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
      "WorkTitle": "Lead Tactics Planner",
    },
    {
      "Name": "Anna Runolfsdottir",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      "WorkTitle": "Principal Operations Developer",
    },
    {
      "Name": "Lola Roob",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg",
      "WorkTitle": "Dynamic Configuration Strategist",
    },
    {
      "Name": "Debbie Rogahn",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg",
      "WorkTitle": "Chief Integration Officer",
    },
    {
      "Name": "Lillie Fisher",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/859.jpg",
      "WorkTitle": "Direct Interactions Officer",
    },
    {
      "Name": "Emma McKenzie",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg",
      "WorkTitle": "Chief Usability Analyst",
    },
    {
      "Name": "Ms. Lola Wisozk",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg",
      "WorkTitle": "Direct Identity Coordinator",
    },
    {
      "Name": "Jorge Towne",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/191.jpg",
      "WorkTitle": "Corporate Assurance Engineer",
    },
    {
      "Name": "Pat Welch",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg",
      "WorkTitle": "Forward Communications Officer",
    },
    {
      "Name": "Vicky Schulist",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1015.jpg",
      "WorkTitle": "Forward Web Analyst",
    },
    {
      "Name": "Alejandro Tremblay",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/358.jpg",
      "WorkTitle": "Dynamic Assurance Coordinator",
    },
    {
      "Name": "Margaret Buckridge",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg",
      "WorkTitle": "Investor Web Strategist",
    },
    {
      "Name": "Brandon Adams",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/199.jpg",
      "WorkTitle": "Direct Response Supervisor",
    },
    {
      "Name": "Marlon Prosacco",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
      "WorkTitle": "Senior Web Strategist",
    },
    {
      "Name": "Jason Hane",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/840.jpg",
      "WorkTitle": "Corporate Operations Officer",
    },
    {
      "Name": "Owen Altenwerth",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/52.jpg",
      "WorkTitle": "Global Usability Technician",
    },
    {
      "Name": "Dr. Regina Shields",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/83.jpg",
      "WorkTitle": "Chief Interactions Consultant",
    },
    {
      "Name": "Dr. Delbert Corkery",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1014.jpg",
      "WorkTitle": "Customer Configuration Manager",
    },
    {
      "Name": "Jaime White III",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/243.jpg",
      "WorkTitle": "Regional Factors Technician",
    },
    {
      "Name": "Arnold Monahan",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg",
      "WorkTitle": "Direct Web Developer",
    },
    {
      "Name": "Woodrow Altenwerth",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1025.jpg",
      "WorkTitle": "Senior Markets Technician",
    },
    {
      "Name": "Anne Howe",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg",
      "WorkTitle": "Senior Intranet Manager",
    },
    {
      "Name": "Dr. Reginald Hettinger",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/350.jpg",
      "WorkTitle": "Forward Accountability Representative",
    },
    {
      "Name": "Orlando Collins III",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/695.jpg",
      "WorkTitle": "Central Mobility Facilitator",
    },
    {
      "Name": "Hannah Stehr",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/669.jpg",
      "WorkTitle": "Product Group Developer",
    },
    {
      "Name": "Darlene Borer",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg",
      "WorkTitle": "Human Quality Designer",
    },
    {
      "Name": "Marianne Heathcote",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
      "WorkTitle": "Investor Paradigm Supervisor",
    },
    {
      "Name": "Mrs. Clifton Hagenes",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
      "WorkTitle": "Product Infrastructure Specialist",
    },
    {
      "Name": "Javier Stamm",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg",
      "WorkTitle": "District Factors Analyst",
    },
    {
      "Name": "Benjamin Smitham",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg",
      "WorkTitle": "Human Response Liaison",
    },
    {
      "Name": "Susan Vandervort",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/321.jpg",
      "WorkTitle": "Legacy Research Administrator",
    },
    {
      "Name": "Lucas Nicolas",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/318.jpg",
      "WorkTitle": "Senior Operations Architect",
    },
    {
      "Name": "Toby Reinger",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1207.jpg",
      "WorkTitle": "Dynamic Communications Administrator",
    },
    {
      "Name": "Irma Stiedemann IV",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/226.jpg",
      "WorkTitle": "Senior Directives Associate",
    },
    {
      "Name": "Jo Fritsch",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/445.jpg",
      "WorkTitle": "Corporate Assurance Planner",
    },
    {
      "Name": "Chester Grimes",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
      "WorkTitle": "Customer Division Representative",
    },
    {
      "Name": "Hazel Mueller",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg",
      "WorkTitle": "National Markets Designer",
    },
    {
      "Name": "Bernadette West",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1110.jpg",
      "WorkTitle": "Central Division Agent",
    },
    {
      "Name": "Neal Dickinson",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/468.jpg",
      "WorkTitle": "Future Communications Producer",
    },
    {
      "Name": "Dr. Katherine Hand",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/869.jpg",
      "WorkTitle": "Forward Marketing Liaison",
    },
    {
      "Name": "Terrence Koss",
      "ImageUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1052.jpg",
      "WorkTitle": "Customer Assurance Executive",
    }
  ]
const url = 'http://localhost:3002/employees';
export const fetch= () => {
    dummy.forEach((item) => axios.post(url, item))
}

