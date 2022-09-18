import { useState, useEffect } from "react";
import {StyledEngineProvider} from "@mui/material";
import TextFiled from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

import './search-bar.scss';


const SearchBar = () => {

    const [category, setCategory] = useState(0);
    const [categories, getCategories] = useState('');

    const url = 'http://localhost:3004'; // change url when deploying
    const categoryURL = url + '/api/types';

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = () => {
        axios.get(categoryURL)
        .then ((response) => {
            const responseCategories = response.data;
            getCategories(responseCategories);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    const arr = Object.keys(categories).map(key => ({name: key, value: categories[key]}));
    let categoryCount = 0;

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <StyledEngineProvider injectFirst={true}>
            <div className="searchBar">
                <Grid container={true} spacing={0}>
                    <Grid item={true} sm={7} xs={12}>
                        <TextFiled className="textBox input"
                                   placeholder="Search for anything" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}></TextFiled>
                    </Grid>
                    <Grid item={true} sm={3} xs={12}>
                        <Select className="input" value={category} onChange={handleChange}>
                            {arr.map((category, index) => {
                                let item = <MenuItem key={index} value={categoryCount}>{category.value.name}</MenuItem>;
                                categoryCount++;
                                return item;
                            })}
                        </Select>
                    </Grid>
                    <Grid item={true} sm={2} xs={12}>
                        <Button className="button" variant="outlined" size="large">Search</Button>
                    </Grid>
                </Grid>
            </div>
        </StyledEngineProvider>
    );
}

export default SearchBar;