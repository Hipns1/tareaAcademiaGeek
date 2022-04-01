import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { getData } from '../helpers/getData';
import { AccordionStyle, DivCheck } from '../styles/styles';

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
    const arrayIndustrieSolo = new Set(arrayIndustrie)
    let industrie = [...arrayIndustrieSolo]

    //FILTRO TOPIC
    const arrayTopic = data.map((filter) => filter.primary_topic);
    const arrayTopicSolo = new Set(arrayTopic)
    let topic = [...arrayTopicSolo]

    //FILTRO SESSION
    const arraySession = data.map((filter) => filter.session_type);
    const arraySessionSolo = new Set(arraySession)
    let session = [...arraySessionSolo]

    //FILTRO AUDIENCE
    const arrayAudience = data.map((filter) => filter.audience_type);
    const arrayAudienceSolo = new Set(arrayAudience)
    let audience = [...arrayAudienceSolo]

    //FILTRO LEVEL
    const arrayLevel = data.map((filter) => filter.audience_level);
    const arrayLevelSolo = new Set(arrayLevel)
    let level = [...arrayLevelSolo]

    //FILTRO LANGUAGE
    const arrayLanguage = data.map((filter) => filter.lenguage);
    const arrayLanguageSolo = new Set(arrayLanguage)
    let language = [...arrayLanguageSolo]


    return (
        <DivCheck>
            <AccordionStyle>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography component={'span'}>Industry Segment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <FormGroup>
                            {
                                industrie.map(arr => (
                                    <FormControlLabel key={arr} control={<Checkbox />} label={arr} />
                                ))
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </AccordionStyle>

            <AccordionStyle>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography component={'span'}>Primary Topic</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <FormGroup>
                            {
                                topic.map(arr => (
                                    <FormControlLabel key={arr} control={<Checkbox />} label={arr} />
                                ))
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </AccordionStyle>

            <AccordionStyle>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography component={'span'}>Session Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <FormGroup>
                            {
                                session.map(arr => (
                                    <FormControlLabel key={arr} control={<Checkbox />} label={arr} />
                                ))
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </AccordionStyle>

            <AccordionStyle>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography component={'span'}>Audience Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <FormGroup>
                            {
                                audience.map(arr => (
                                    <FormControlLabel key={arr} control={<Checkbox />} label={arr} />
                                ))
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </AccordionStyle>

            <AccordionStyle>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography component={'span'}>Audience Level</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <FormGroup>
                            {
                                level.map(arr => (
                                    <FormControlLabel key={arr} control={<Checkbox />} label={arr} />
                                ))
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </AccordionStyle>

            <AccordionStyle>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <Typography component={'span'}>Language</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <FormGroup>
                            {
                                language.map(arr => (
                                    <FormControlLabel key={arr} control={<Checkbox />} label={arr} />
                                ))
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </AccordionStyle>
        </DivCheck>
    )
}

export default FilterCheck;