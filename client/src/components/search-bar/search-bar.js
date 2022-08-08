import {useState} from "react";
import {StyledEngineProvider} from "@mui/material";
import TextFiled from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import './search-bar.scss';


const SearchBar = () => {

    const [category, setCategory] = useState(0);

    
    
    const categories = ['All categories', 'To', 'Be', 'Fetched', 'From', 'Backend'];
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
                            {categories.map(category => {
                                let item = <MenuItem value={categoryCount}>{category}</MenuItem>;
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