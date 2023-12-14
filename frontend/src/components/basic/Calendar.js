import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
import { DateRange } from "react-date-range";

function Calendar({ state, setState }) {
    const nameMapper = {
        fr: "French",
    };

    const localeOptions = Object.keys(locales)
        .map((key) => ({
            value: key,
            label: `${key} - ${nameMapper[key] || ""}`,
        }))
        .filter((item) => nameMapper[item.value]);

    const [locale, setLocale] = React.useState("fr");
    return (
        <div>
            <select
                style={{ display: "none" }}
                onChange={(e) => setLocale(e.target.value)}
                value={locale}
            >
                {localeOptions.map((option, i) => (
                    <option value={option.value} key={i}>
                        {option.label}
                    </option>
                ))}
            </select>

            <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                minDate={new Date()}
                rangeColors={["#5FFA38"]}
                color="#AAA"
                locale={locales[locale]}
            />
        </div>
    );
}

export default Calendar;
