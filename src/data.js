const dataExample = [
  {
    list1: {
      id: "list-1",
      title: "list 1",
      cards: [
        {
          id: "card-1",
          title: "card 1",
          description: "",
          member: [
            {
              id: "member-1",
              name: "member 1",
            },
          ],
          status: "NEW",
        },
      ],
    },
  },
  {
    list2: {
      id: "list-2",
      title: "list 2",
      cards: [
        {
          id: "card-1",
          title: "card 1",
          description: "",
          member: [
            {
              id: "member-1",
              name: "member 1",
            },
          ],
          status: "NEW",
        },
      ],
    },
  },
];

// list: find item in array => remove item 0 -> add item new position

// card
// find card where list => update card array => find index of list => add card array this list

// hash map object
export const data = {
  columns: ["list-1", "list-2"],
  lists: {
    "list-1": {
      id: "list-1",
      title: "list 1",
      cards: ["card-1", "card-2"],
    },
    "list-2": {
      id: "list-2",
      title: "list 2",
      cards: ["card-3"],
    },
  },
  cards: [
    {
      id: "card-1",
      title: "card 1",
      description: "",
      member: [
        {
          id: "member-1",
          name: "member 1",
        },
      ],
      status: "NEW",
    },
    {
      id: "card-2",
      title: "card 1",
      description: "",
      member: [
        {
          id: "member-1",
          name: "member 1",
        },
      ],
      status: "NEW",
    },
    {
      id: "card-3",
      title: "card 1",
      description: "",
      member: [
        {
          id: "member-1",
          name: "member 1",
        },
      ],
      status: "NEW",
    },
  ],
};
