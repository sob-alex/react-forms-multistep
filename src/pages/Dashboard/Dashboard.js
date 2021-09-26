import { Paper, Box } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Box mt={4}>
      <Paper
        style={{
          height: '400px',
          padding: '10px 20px'
        }}
        elevation={1}
      >
        <h1>Dashboard</h1>
      </Paper>
    </Box>
  );
};

export default Dashboard;
