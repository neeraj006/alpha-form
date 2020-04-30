import React from "react";
import "./ListComponent.scss";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";

export default function ListComponent() {
  const countries = useSelector(state => state);
  const dispatch = useDispatch();
  const selectedCountries = countries.filter(
    country => country.totalSelected > 0
  );

  const isEmpty = !selectedCountries.length;
  return (
    <div className="list-component-container">
      {isEmpty ? (
        <h2 style={{ color: "#787878" }}>No Value Selected</h2>
      ) : (
        <React.Fragment>
          {selectedCountries.map(country => (
            <React.Fragment>
              <h2>{country.name}</h2>
              {country.people
                .filter(person => person.isChecked)
                .map(person => (
                  <ListItem
                    name={person.value}
                    onClose={() =>
                      handleCheckChildElement(
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
        </React.Fragment>
      )}
    </div>
  );
}

function handleCheckChildElement(person, country, dispatch, countries) {
  country.totalSelected = country.totalSelected - 1;
  person.isChecked = false;
  dispatch({ type: "SELECTION_CHANGE", payload: countries });
}
