const initialState = [
  {
    name: "Portugal",
    people: [
      { id: 1, value: "Aasiya Jayavant", isChecked: false },
      { id: 2, value: "Luvleen Lawrence", isChecked: false },
      { id: 3, value: "Rey Mibourne", isChecked: false },
      { id: 4, value: "Cayla Brister", isChecked: false }
    ],
    totalSelected: 0
  },
  {
    name: "Nicaragua",
    people: [
      { id: 1, value: "Devedaas Nandi", isChecked: false },
      { id: 2, value: "Obasey Chidy", isChecked: false },
      { id: 3, value: "Xenie Mibourne", isChecked: false },
      { id: 4, value: "Ezequiel Brister", isChecked: false }
    ],
    totalSelected: 0
  },
  {
    name: "Marshall Islands",
    people: [
      { id: 1, value: "Aaron Almazraz", isChecked: false },
      { id: 2, value: "Jelina Denisova", isChecked: false },
      { id: 3, value: "Rey Mibourne", isChecked: false },
      { id: 4, value: "Cayla Brister", isChecked: false }
    ],
    totalSelected: 0
  }
];

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SELECTION_CHANGE":
      return [...payload];

    default:
      return state;
  }
}
