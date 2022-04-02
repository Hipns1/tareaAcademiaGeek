import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { getData } from "../helpers/getData";
import { filterCheckBox } from "../helpers/filterCheckBox";
import { DivCheck } from "../styles/styles";

const url = "https://workshop-2-nvidia.herokuapp.com/sessions/";

const FilterCheck = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
  }, []);

  //FILTRO INDUSTRIA
  const arrayIndustrie = data.map((filter) => filter.industry_segment);
  const arrayIndustrieSolo = new Set(arrayIndustrie);
  let industrie = [...arrayIndustrieSolo];

  //FILTRO TOPIC
  const arrayTopic = data.map((filter) => filter.primary_topic);
  const arrayTopicSolo = new Set(arrayTopic);
  let topic = [...arrayTopicSolo];

  //FILTRO SESSION
  const arraySession = data.map((filter) => filter.session_type);
  const arraySessionSolo = new Set(arraySession);
  let session = [...arraySessionSolo];

  //FILTRO AUDIENCE
  const arrayAudience = data.map((filter) => filter.audience_type);
  const arrayAudienceSolo = new Set(arrayAudience);
  let audience = [...arrayAudienceSolo];

  //FILTRO LEVEL
  const arrayLevel = data.map((filter) => filter.audience_level);
  const arrayLevelSolo = new Set(arrayLevel);
  let level = [...arrayLevelSolo];

  //FILTRO LANGUAGE
  const arrayLanguage = data.map((filter) => filter.lenguage);
  const arrayLanguageSolo = new Set(arrayLanguage);
  let language = [...arrayLanguageSolo];

  // PRUEBA BORRAR
  let resultLanguage = [];
  return (
    <DivCheck>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={"span"}>Industry Segment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <FormGroup>
              {industrie.map((arr) => (
                <FormControlLabel
                  key={arr}
                  control={<Checkbox />}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      resultLanguage.push(
                        filterCheckBox(data, arr, "industry_segment", [], "add")
                      );
                      console.log(resultLanguage);
                    } else {
                      resultLanguage = filterCheckBox(
                        data,
                        arr,
                        "industry_segment",
                        resultLanguage,
                        "remove"
                      );
                      console.log(resultLanguage);
                    }
                  }}
                  label={arr}
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography component={"span"}>Primary Topic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <FormGroup>
              {topic.map((arr) => (
                <FormControlLabel
                  key={arr}
                  control={<Checkbox />}
                  value={arr}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      resultLanguage.push(
                        filterCheckBox(data, arr, "primary_topic", [], "add")
                      );
                      console.log(resultLanguage);
                    } else {
                      resultLanguage = filterCheckBox(
                        data,
                        arr,
                        "primary_topic",
                        [],
                        "remove"
                      );
                      console.log(resultLanguage);
                    }
                  }}
                  label={arr}
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component={"span"}>Session Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <FormGroup>
              {session.map((arr) => (
                <FormControlLabel
                  key={arr}
                  control={<Checkbox />}
                  value={arr}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      resultLanguage.push(
                        filterCheckBox(data, arr, "session_type", [], "add")
                      );
                      console.log(resultLanguage);
                    } else {
                      resultLanguage = filterCheckBox(
                        data,
                        arr,
                        "session_type",
                        resultLanguage,
                        "remove"
                      );
                      console.log(resultLanguage);
                    }
                  }}
                  label={arr}
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography component={"span"}>Audience Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <FormGroup>
              {audience.map((arr) => (
                <FormControlLabel
                  key={arr}
                  control={<Checkbox />}
                  value={arr}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      resultLanguage.push(
                        filterCheckBox(data, arr, "audience_type", [], "add")
                      );
                      console.log(resultLanguage);
                    } else {
                      resultLanguage = filterCheckBox(
                        data,
                        arr,
                        "audience_type",
                        resultLanguage,
                        "remove"
                      );
                      console.log(resultLanguage);
                    }
                  }}
                  label={arr}
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography component={"span"}>Audience Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <FormGroup>
              {level.map((arr) => (
                <FormControlLabel
                  key={arr}
                  control={<Checkbox />}
                  value={arr}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      resultLanguage.push(
                        filterCheckBox(data, arr, "audience_level", [], "add")
                      );
                      console.log(resultLanguage);
                    } else {
                      resultLanguage = filterCheckBox(
                        data,
                        arr,
                        "audience_level",
                        resultLanguage,
                        "remove"
                      );
                      console.log(resultLanguage);
                    }
                  }}
                  label={arr}
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography component={"span"}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <FormGroup>
              {language.map((arr) => (
                <FormControlLabel
                  key={arr}
                  id={arr}
                  control={<Checkbox />}
                  value={arr}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      resultLanguage.push(
                        filterCheckBox(data, arr, "lenguage", [], "add")
                      );
                      console.log(resultLanguage);
                    } else {
                      resultLanguage = filterCheckBox(
                        data,
                        arr,
                        "lenguage",
                        resultLanguage,
                        "remove"
                      );

                      console.log(resultLanguage);
                      console.log("no está seleccionado");
                      // console.log(new Date("2022-06-06T07:07:52.355Z"));
                    }
                  }}
                  label={arr}
                />
              ))}
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </DivCheck>
  );
};

export default FilterCheck;
