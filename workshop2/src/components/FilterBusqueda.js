import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

const FilterBusqueda = () => {

    return (
        <div>
            <div>
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div>
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

export default FilterBusqueda;