import WrapPresentsImg from "./WrapPresents.jpg";
import TidyGardenImg from "./TidyGarden.jpg";
import ServeFoodImg from "./ServeFood.jpg";
import SortClothingImg from "./SortClothing.jpg";

export const opportunities = [
    {
        id: 1,
        charity: "NSPCC",
        taskType: "Sort Clothes",
        numVolunteers: 5,
        date: "10/1/2021",
        location: "Bolton",
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        address: "60 Grange Road, BOLTON, AB48 3TH",
    },
    {
        id: 2,
        charity: "NSPCC",
        taskType: "Wrap Presents",
        numVolunteers: 5,
        date: "10/12/2020",
        location: "Bolton",
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus",
        address: "60 Grange Road, BOLTON, AB48 3TH",
    },
    {
        id: 3,
        charity: "NSPCC",
        taskType: "Sort Clothes",
        numVolunteers: 5,
        date: "10/1/2021",
        location: "Manchester",
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempore.",
        address: "60 Grange Road, MANCHESTER, AB48 3TH",
    },
    {
        id: 4,
        charity: "Derrian House",
        taskType: "Gardening",
        numVolunteers: 5,
        date: "10/1/2021",
        location: "Crewe",
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        address: "60 Grange Road, CREWE, AB48 3TH",
    },
    {
        id: 5,
        charity: "NSPCC",
        taskType: "Sort Clothes",
        numVolunteers: 5,
        date: "10/1/2021",
        location: "Crewe",
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante  fringillaneque.",
        address: "60 Grange Road, CREWE, AB48 3TH",
    },
    {
        id: 6,
        charity: "NSPCC",
        taskType: "Wrap Presents",
        numVolunteers: 5,
        date: "10/1/2021",
        location: "Bolton",
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus peque.",
        address: "60 Grange Road, BOLTON, AB48 3TH",
    },
    {
        id: 7,
        charity: "NSPCC",
        taskType: "Serve Food",
        numVolunteers: 5,
        date: "10/1/2021",
        location: "Bolton",
        description:
            "Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        address: "60 Grange Road, BOLTON, AB48 3TH",
    },
];
export const taskImg = {
    "Sort Clothes": SortClothingImg,
    "Gardening": TidyGardenImg,
    "Wrap Presents": WrapPresentsImg,
    "Serve Food": ServeFoodImg,
};

export const charities = [
    {
        id: 1,
        name: "NSPCC",
        numActiveProjects: 5,
        numCompletedProjects: 1,
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        address: "60 Grange Road, BOLTON, AB48 3TH",
        img:  "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
        volunteerComments: [{id: 1, name: "John Doe", comment: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", imgs: ["https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true"]},
        {id: 2, name: "Someone Else", comment: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", imgs: ["https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true","https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true"]} ]
    },
    {
        id: 2,
        name: "Derrian House",
        numActiveProjects: 3,
        numCompletedProjects: 1,
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus",
        address: "60 Grange Road, BOLTON, AB48 3TH",
        img:  "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
    },
    {
        id: 3,
        name: "St Mary's",
        numActiveProjects: 4,
        numCompletedProjects: 2,
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempore.",
        address: "60 Grange Road, MANCHESTER, AB48 3TH",
        img:  "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
        volunteerComments: [{id: 1, name: "John Doe", comment: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", imgs: []},
        {id: 2, name: "John Doe", comment: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", imgs: ["https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true","https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true"]} ]
    },
    {
        id: 4,
        name: "Hospice",
        numActiveProjects: 2,
        numCompletedProjects: 0,
        description:
            "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        address: "60 Grange Road, CREWE, AB48 3TH",
        img:  "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true"
    },
    
];
