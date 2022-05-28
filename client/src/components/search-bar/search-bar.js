import {useState} from "react";
import {StyledEngineProvider} from "@mui/material";
import TextFiled from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import styles from './search-bar.css';


const SearchBar = () =>{

    const [category, setCategory] = useState(0);

    const handleChange = (event) =>{
        setCategory(event.target.value);
    }

    return(
      <div>
          <StyledEngineProvider injectFirst={true}>
              <TextFiled id="input-with-icon-textfield" placeholder="Search for anything" InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                          <SearchIcon />
                      </InputAdornment>
                  ),
              }}></TextFiled>
              <Select value={category} onChange={handleChange}>
                  <MenuItem value={0}>All categories</MenuItem>
                  <MenuItem value={10}>To</MenuItem>
                  <MenuItem value={20}>Be</MenuItem>
                  <MenuItem value={30}>Fetched</MenuItem>
                  <MenuItem value={40}>From</MenuItem>
                  <MenuItem value={50}>Backend</MenuItem>
              </Select>
              <Button variant="outlined" size="large">Search</Button>
          </StyledEngineProvider>
      </div>
    );
}

export default styled(SearchBar)(styles);