import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import Select from "react-select";
import "./App.css";
import style from "./style.module.scss";
import Seperator from "./components/Seperator";
import Card from "./components/Card";
import Plot from "react-plotly.js";
import CompareData from "./components/CompareData";
import { FlexContainer, FlexItem } from "./components/Flex";
import DataTable from "./components/DataTable";
import { Table } from "@tanstack/react-table";

const required_schools = [
  "Aurinko Academy",
  "Gnan Shrishti School Of Excellence",
  "BNR Memorial School",
  "Prestige International School",
  "Tunbridge High School",
  "Christ Academy",
  "St Joseph Academy",
  "Chinmaya Vidyalaya Banashankari",
  "Unicent School",
  "Sri Vivekananda International School",
  "Spring Dale School Mallapur",
  "Olivemount Global School",
  "KGS Matriculation Tirupur",
  "NPS Gottigere",
  "C.K.S. English School RK Puram",
  "Harsha International Public School",
  "SMS Vidyapeeth",
  "C.K.S. English School BM Road",
  "Janak Academy",
  "Yenapoya",
  "Carmel Teresa",
  "Edify School",
  "NPS Agara",
  "KSR Akshara Academy",
  "Balodyana English School",
  "Glentree Academy, Whitefield",
  "Vidya Dayini",
  "Sahasraa high school",
  "oxford global school Mangalore",
  "United Public School",
  "HH International",
  "PACE",
  "Dolphin Kanwar Nagar",
  "Delhi Public School Ujjain",
  "Wellwisher School",
  "Vedant World School, Jaipur",
  "Dolphins High School",
  "Swamy Vivekananda School",
  "St Thomas Residential School",
  "Dolphin RP Center",
  "Gangothri International Public School",
  "Scholars School Rajpura",
  "AVP Trust School",
  "CHINMAYA VIDYALAYA BOISAR",
  "Whitefield Global School",
  "SLS International Gurukul",
  "Dolphin Chaksu",
  "PES SCHOOL",
  "Glentree Academy, Sarjapur",
  "Chinmaya International School Boisar",
  "Carmel School Johrat",
  "ARRS Academy",
];
const date_options = [
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "This Month",
  "Next Month",
  "This Year",
  "Next Year",
];
const lab_data = {
  completed: 90,
  total: 100,
};
const data_options = ["completed", "attendance"];
const compare_data_options = [
  { completed: 90, attendance: 20 },
  { completed: 30, attendance: 40 },
  { completed: 50, attendance: 50 },
  { completed: 70, attendance: 40 },
  { completed: 10, attendance: 60 },
];

const columns = [
  { title: "Name", key: "name" },
  { title: "Email", key: "email" },
  { title: "Phone", key: "phone" },
];

const data = [
  { name: "John Smith", email: "john@example.com", phone: "555-555-1212" },
  { name: "Jane Doe", email: "jane@example.com", phone: "555-555-1213" },
  { name: "Bob Johnson", email: "bob@example.com", phone: "555-555-1214" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className={style.school_overview}>
        <div className={style.school_overview__filter_section}>
          <Select
            className={style.school_overview__filter_section__school}
            placeholder="Select School"
            options={required_schools.map((school) => {
              return {
                label: school,
                value: school,
              };
            })}
          ></Select>
          <Select
            className={style.school_overview__filter_section__date}
            // placeholder="Select Date"
            options={date_options.map((item) => {
              return {
                label: item,
                value: item,
              };
            })}
            defaultValue={date_options[0]}
          ></Select>
        </div>
        <Seperator
          style={{
            width: "100%",
            background: "rgb(242 242 242)",
          }}
        />
        <FlexContainer
          gap={20}
          align="space-between"
          className={style.school_overview__graph_section}
        >
          <FlexItem>
            <Card
              style={{
                width: "fit-content",
              }}
              header="Lab Overview"
            >
              <div className={style.school_overview__graph_section__graph}>
                {/* pie graph */}
                <Plot
                  data={[
                    {
                      values: [
                        lab_data.completed,
                        lab_data.total - lab_data.completed,
                      ],
                      labels: ["Completed", "Pending"],
                      type: "pie",
                      marker: {
                        colors: ["#00b894", "#d63031"],
                      },
                    },
                  ]}
                  layout={{
                    width: 400,
                    height: 400,
                  }}
                />
              </div>
            </Card>
          </FlexItem>
          <FlexItem>
            <Card
              style={{
                width: "fit-content",
              }}
              header="Compare Data"
            >
              <CompareData
                options={keyAndValue(data_options)}
                data={compare_data_options}
              ></CompareData>
            </Card>
          </FlexItem>
        </FlexContainer>
        <Seperator />
      </div>
    </div>
  );
}

export const keyAndValue = (data) => {
  return data.map((item) => {
    return {
      label: item,
      value: item,
    };
  });
};
export default App;
