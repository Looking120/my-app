import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';
import placeholder from '../assets/placeholder.png';

function MultiFileUpload() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const allowedFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const selectedFiles = Array.from(event.target.files).filter(file => allowedFileTypes.includes(file.type));
    setFiles(selectedFiles);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const clearFileInput = () => {
    fileInputRef.current.value = null;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', maxWidth: 900, width: '100%', position: 'relative' }}>
        <Typography variant="h5" gutterBottom align="left">
          Upload File
        </Typography>
        <Box my={2} p={4} border="2px solid #f8f0f0" borderRadius="5px" display="flex" flexDirection="column" alignItems="center" sx={{ backgroundColor: '#f6f7f8' }}>
          <img src={placeholder} alt="Placeholder" style={{ marginBottom: '16px', width: '150px', height: '150px', cursor: 'pointer' }} onClick={handleBrowseClick} />
          <input
            accept=".doc,.docx,.pdf,.xlsx"
            style={{ display: 'none' }}
            ref={fileInputRef}
            multiple
            type="file"
            onChange={handleFileChange}
            onClick={clearFileInput} 
          />
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body1" color="textSecondary" fontWeight={12}>
                <span style={{ fontWeight: 'bold', color: 'black' }}>Drop or Select file</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" onClick={handleBrowseClick}>
                Drop files here or click <Button variant="text" component="span" onClick={handleBrowseClick}>browse</Button> through your machine
              </Typography>
            </Box>
          </label>
        </Box>
        {files.length > 0 && (
          <Box mt={2}>
            <Typography variant="h6">Files</Typography>
            <Grid container spacing={2}>
              {files.map((file, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Paper variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="body2" noWrap>{file.name}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default MultiFileUpload;
