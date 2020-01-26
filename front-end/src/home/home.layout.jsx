import React from "react";
import { Box, Button, Paper } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";

import { withStore } from "../helpers/withStore";

class Home extends React.Component {
  render() {
    return (
      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Paper>
              <Box
                display="flex"
                width={400}
                height={400}
                justifyContent="center"
                alignItems="center"
              >
                <Button variant="contained" component="label">
                  <PublishIcon /> <div>&nbsp; Upload File</div>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={this.handleChange}
                  />
                </Button>
              </Box>
            </Paper>
          </Box>
          <Box>
            <Paper>Box 2</Paper>
          </Box>
        </Box>
        <Box>
          <Paper>Box 3</Paper>
        </Box>
      </Box>
    );
  }
  handleChange = e => {
    console.log(e.target.value);
  };
}

export default withStore()(Home);
