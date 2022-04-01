import React from 'react';
import { DivFilterContainer } from '../styles/styles';
import FilterBusqueda from './FilterBusqueda';
import FilterCheck from './FilterCheck';

const FilterContainer = () => {
    return (
        <DivFilterContainer>
            <FilterBusqueda/>
            <FilterCheck/>
        </DivFilterContainer>
    )
}

export default FilterContainer;