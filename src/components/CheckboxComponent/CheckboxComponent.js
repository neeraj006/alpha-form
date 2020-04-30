import React from "react";
import "./CheckboxComponent.scss";
import Checkbox from "../Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";

export default function CheckboxComponent() {
  const countries = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="checkbox-component-container">
      {countries.map(country => (
        <React.Fragment key={country.name}>
          <h2>{country.name}</h2>
          {country.people.map(person => (
            <Checkbox
              key={person.id}
              id={person.id}
              isChecked={person.isChecked}
              value={person.value}
              handleCheckChildElement={event =>
                handleCheckChildElement(
                  event,
                  person,
                  country,
                  dispatch,
                  countries
                )
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

function handleCheckChildElement(event, person, country, dispatch, countries) {
  person.isChecked = event.target.checked;
  country.totalSelected = person.isChecked
    ? country.totalSelected + 1
    : country.totalSelected - 1;
  dispatch({ type: "SELECTION_CHANGE", payload: countries });
}
