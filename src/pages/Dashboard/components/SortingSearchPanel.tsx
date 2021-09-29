import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField } from '@material-ui/core';

interface SortingSearchPanelProps {
  searchWord: string;
  onChangeSearchWord: (value: string) => void;
}

const SortingSearchPanel = ({
  searchWord,
  onChangeSearchWord,
}: SortingSearchPanelProps) => {
  return (
    <Box>
      <TextField
        label='Search'
        fullWidth
        value={searchWord}
        onChange={(e) => onChangeSearchWord(e.target.value)}
      />
    </Box>
  );
};

export default SortingSearchPanel;
