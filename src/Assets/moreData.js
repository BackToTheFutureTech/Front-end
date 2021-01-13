import WrapPresentsImg from "./WrapPresents.jpg";
import TidyGardenImg from "./TidyGarden.jpg";
import ServeFoodImg from "./ServeFood.jpg";
import SortClothingImg from "./SortClothing.jpg";

import SweatShirt from "./SweatShirt.png"
import Present from "./WrapPresents.png"
import Food from "./ServeFood.png"
import Garden from "./CleanGarden.png"

export const opportunities = [
  {
    id: 1,
    charity: "NSPCC",
    name: "Winter Aid",
    taskType: "Sort Clothes",
    numVolunteers: 5,
    date: "2021-12-10",
    postcode: "AB48 3TH",
    address1: "50 Grange Rd",
    address2: "Somewhere",
    location: "Bolton",
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
  },
  {
    id: 2,
    charity: "NSPCC",
    name: "Christmas Cheer",
    taskType: "Wrap Presents",
    numVolunteers: 5,
    date: "2021-02-20",
    postcode: "B48 3TH",
    address1: "60 Grange Rd",
    address2: "",
    location: "Bolton",
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus"
  },
  {
    id: 3,
    charity: "NSPCC",
    name: "Support for children",
    taskType: "Sort Clothes",
    numVolunteers: 5,
    date: "2021-04-20",
    postcode: "M48 3TH",
    address1: "33 Grange Rd",
    address2: "Bla",
    location: "Manchester",
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempore.",
  },
  {
    id: 4,
    charity: "Derrian House",
    name: "Garden makeover",
    taskType: "Gardening",
    numVolunteers: 5,
    date: "2021-03-20",
    postcode: "C48 3TH",
    address1: "60 Grange Rd",
    address2: "",
    location: "Crewe",
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
  },
  {
    id: 5,
    charity: "NSPCC",
    name: "Support for children",
    taskType: "Sort Clothes",
    numVolunteers: 5,
    date: "2021-03-10",
    postcode: "C40 3TH",
    address1: "60 Grange Rd",
    address2: "crewe",
    location: "Crewe",
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante  fringillaneque.",
  },
  {
    id: 6,
    charity: "NSPCC",
    name: "Chritsmas Cheer",
    taskType: "Wrap Presents",
    numVolunteers: 5,
    date: "2021-03-30",
    postcode: "B44 3TH",
    address1: "60 Grange Rd",
    address2: "",
    location: "Bolton",
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus peque.",
  },
  {
    id: 7,
    charity: "St Mary's",
    name: "Feeding the homeless",
    taskType: "Serve Food",
    numVolunteers: 5,
    date: "2021-04-01",
    postcode: "B8 3TH",
    address1: "60 Grange Rd",
    address2: "",
    location: "Bolton",
    description:
      "Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
  },
];
export const taskImg = {
  "Sort Clothes": SortClothingImg,
  "Gardening": TidyGardenImg,
  "Wrap Presents": WrapPresentsImg,
  "Serve Food": ServeFoodImg,
  "SweatShirt":SweatShirt,
  "Present":Present,
  "Food":Food,
  "Garden":Garden,
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
    img:
      "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
    volunteerComments: [
      {
        id: 1,
        name: "John Doe",
        comment:
          "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        imgs: [
          "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true",
        ],
      },
      {
        id: 2,
        name: "Someone Else",
        comment:
          "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        imgs: [
          "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true",
          "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Derrian House",
    numActiveProjects: 3,
    numCompletedProjects: 1,
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus",
    address: "60 Grange Road, BOLTON, AB48 3TH",
    img:
      "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
  },
  {
    id: 3,
    name: "St Mary's",
    numActiveProjects: 4,
    numCompletedProjects: 2,
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempore.",
    address: "60 Grange Road, MANCHESTER, AB48 3TH",
    img:
      "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
    volunteerComments: [
      {
        id: 1,
        name: "John Doe",
        comment:
          "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        imgs: [],
      },
      {
        id: 2,
        name: "John Doe",
        comment:
          "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
        imgs: [
          "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true",
          "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Hospice",
    numActiveProjects: 2,
    numCompletedProjects: 0,
    description:
      "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.",
    address: "60 Grange Road, CREWE, AB48 3TH",
    img:
      "https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/TidyGarden.jpg?raw=true",
  },
];

export const waysToHelp = [
  {
    title: "Sort Clothing",
    icon: "SweatShirt",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eros. Suspendisse sollicitudin nisl quis erat venenatis, ut sodales nunc dignissim. Nullam ut risus ac nisi mollis vestibulum posuere nec leo. Mauris mattis risus quis lacinia condimentum. Morbi id sagittis erat. Vivamus ullamcorper nulla sit amet ullamcorper mattis. Sed maximus tellus eu nisl aliquet auctor vitae vehicula enim. Integer molestie nunc sed consequat finibus. Aenean posuere malesuada odio, et posuere mi gravida in.",
  },
  {
    title: "Serve Food",
    icon: "Food",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eros. Suspendisse sollicitudin nisl quis erat venenatis, ut sodales nunc dignissim. Nullam ut risus ac nisi mollis vestibulum posuere nec leo. Mauris mattis risus quis lacinia condimentum. Morbi id sagittis erat. Vivamus ullamcorper nulla sit amet ullamcorper mattis. Sed maximus tellus eu nisl aliquet auctor vitae vehicula enim. Integer molestie nunc sed consequat finibus. Aenean posuere malesuada odio, et posuere mi gravida in.",
  },
  {
    title: "Clean out a garden",
    icon: "Garden",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eros. Suspendisse sollicitudin nisl quis erat venenatis, ut sodales nunc dignissim. Nullam ut risus ac nisi mollis vestibulum posuere nec leo. Mauris mattis risus quis lacinia condimentum. Morbi id sagittis erat. Vivamus ullamcorper nulla sit amet ullamcorper mattis. Sed maximus tellus eu nisl aliquet auctor vitae vehicula enim. Integer molestie nunc sed consequat finibus. Aenean posuere malesuada odio, et posuere mi gravida in.",
  },
  {
    title: "Wrap presents",
    icon: "Present",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eros. Suspendisse sollicitudin nisl quis erat venenatis, ut sodales nunc dignissim. Nullam ut risus ac nisi mollis vestibulum posuere nec leo. Mauris mattis risus quis lacinia condimentum. Morbi id sagittis erat. Vivamus ullamcorper nulla sit amet ullamcorper mattis. Sed maximus tellus eu nisl aliquet auctor vitae vehicula enim. Integer molestie nunc sed consequat finibus. Aenean posuere malesuada odio, et posuere mi gravida in.",
  },
  
];
