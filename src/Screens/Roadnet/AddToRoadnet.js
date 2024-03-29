/* eslint-disable no-useless-concat */
import React from 'react';
//=============================================================
import { NavLink } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
//=============================================================
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
//=============================================================
class AddToRoadnet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedOpcoType: null,
      routerNumbers: ['ROADNET01', 'ROADNET02', 'ROADNET03', 'ROADNET04', 'ROADNET05'],
      noOpcoSelected: 'Please select an OpCo type',
      BLOptions: {
        type: `${this.props.userId ? this.props.userId + ":" : ""} US Broadline`,
        securityEmail: `Please add user ${this.props.userId ? this.props.userId : "XXXXXXX"} to the following DLs\n\n` + 'Roadnet Enterprise Users\n' + '000-212_Roadnet_users\n' + 'Citrix App - RI - Prod\n' + '000-Trans ERN-DL\n\n' + 'Once done, please assign to Roadnet',
        addedEmail:
          'Access to Roadnet Enterprise is provided for the below credentials. On successful login, you will be prompted to change your password.\n\n' + `User ID: ${this.props.userId ? this.props.userId : "XXXXXXX"}\n` + 'Password (all lowercase): sysco123\n\n' +
          'Access to the Routing Interface is provided for the below credentials.\n' + `User ID: ${this.props.selectedRouterNumber}\n` + 'Password (all lowercase): mrrobot8\n\n' + 'Please let me know if there are any issues.',
      },
      NonBLOptions: {
        type: `${this.props.userId ? this.props.userId + ":" : ""} FP, Meat, Canada`,
        securityEmail: `Please add user ${this.props.userId ? this.props.userId : "XXXXXXX"} to the following DLs\n\n` + 'Roadnet Enterprise Users\n' + '000-212_Roadnet_users\n' + '000-Trans ERN-DL\n\n' + 'Once done, please assign to Roadnet',
        addedEmail: 'Access to Roadnet Enterprise is provided for the below credentials. On successful login, you will be prompted to change your password.\n\n' + `User ID: ${this.props.userId ? this.props.userId : "XXXXXXX"}\n` + 'Password (all lowercase): sysco123',
      },
      MexicoOptions: {
        type: `${this.props.userId ? this.props.userId + ":" : ""} Mexico`,
        securityEmail: `Please add user ${this.props.userId ? this.props.userId : "XXXXXXX"} to the following DLs\n\n` + 'Roadnet Enterprise Mexico Users\n' + '000-212_Roadnet_users\n' + 'Citrix App - RI - Prod\n' + '000-Trans ERN-DL\n\n' + 'Once done, please assign to Roadnet',
        addedEmail: 'Access to Roadnet Enterprise is provided for the below credentials. On successful login, you will be prompted to change your password.\n\n' + `User ID: ${this.props.userId ? this.props.userId : "XXXXXXX"}\n` + 'Password (all lowercase): sysco123',
      },
    };
  }
  //=============================================================
  componentWillReceiveProps(prevProps, prevState) {
    if (prevProps.selectedRouterNumber !== this.props.selectedRouterNumber) {
      this.setState({ BLOptions: this.state.BLOptions })
    }
  }
  //=============================================================
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Add user to Roadnet</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <form autoComplete="off">
              <FormControl>
                <InputLabel >Select OpCo Type for {this.props.userId ? this.props.userId : 'User'}</InputLabel>
                <Select
                  style={{ width: 250 }}
                  value={this.state.selectedOpcoType || 'No Opco'}
                  onChange={(event) => {
                    this.setState({
                      selectedOpcoType: event.target.value
                    })
                  }}
                >
                  <MenuItem value={this.state.BLOptions}>{this.state.BLOptions.type}</MenuItem>
                  <MenuItem value={this.state.NonBLOptions}>{this.state.NonBLOptions.type}</MenuItem>
                  <MenuItem value={this.state.MexicoOptions}>{this.state.MexicoOptions.type}</MenuItem>
                </Select>
              </FormControl>
            </form>
            {/* //============================================================= */}
            <ol
              style={{
                marginTop: 20,
              }}
            >
              {/* //============================================================= */}
              {/* <li>
                <h5>Email this message to requester:</h5>
                <h5>{this.state.value}</h5>
                <CopyToClipboard
                  text={this.state.cleanupEmail}>
                  <button>Copy</button>
                </CopyToClipboard>
                {this.state.cleanupCopied === true ? <h4>Message Copied</h4> : null}
              </li> */}
              {/* //============================================================= */}
              <li>
                <h5>Go to <a href={'https://myoffice.sysco.com/Citrix/Internal/'}>MyOffice Sysco</a> => 'Roadnet Enterprise'</h5>
                <h5>Assign incident to 'SD_Admin'</h5>
                <h5>Add this message into 'Work Notes'</h5>
                <CopyToClipboard
                  text={this.state.selectedOpcoType ? this.state.selectedOpcoType.securityEmail : this.state.noOpcoSelected}>
                  <button>Copy</button>
                </CopyToClipboard>
              </li>
              {/* //============================================================= */}
              <li>
                <h5>Go to <a href={'https://myoffice.sysco.com/Citrix/Internal/'}> Roadnet Enterprise</a></h5>
                <ul>
                  <li>
                    <h5>'Administration' => 'List' => 'Users' => 'Add'</h5>
                  </li>
                  <li>
                    <h5>Fill out information in 'General' tab (password is sysco123)</h5>
                  </li>
                  <li>
                    <h5>Check 'Require Password Change on Next Login'</h5>
                  </li>
                  <li>
                    <h5>Set Time Zone</h5>
                  </li>
                  <li>
                    <h5>Add 'User Group' in 'Membership' tab</h5>
                  </li>
                </ul>
              </li>
              {/* //============================================================= */}
              {this.state.selectedOpcoType === this.state.BLOptions ?
                <li>
                  <h5>
                    <NavLink
                      to='/addToRoutingInterface'
                    >Add To Routing Interface</NavLink>
                  </h5>
                  <h5>Select 'Add New RI User'</h5>
                  <form autoComplete="off">
                    <FormControl>
                      <InputLabel>Selected Router#</InputLabel>
                      <Select
                        style={{ width: 250 }}
                        value={this.props.selectedRouterNumber}
                        onChange={(event) => {
                          this.props.changeSelectedRouterNumber(event.target.value);
                          let temp = this.state.BLOptions;
                          temp.addedEmail = 'Access to Roadnet Enterprise is provided for the below credentials. On successful login, you will be prompted to change your password.\n\n' + `User ID: ${this.props.userId ? this.props.userId : "XXXXXXX"}\n` + 'Password (all lowercase): sysco123\n\n' +
                            'Access to the Routing Interface is provided for the below credentials.\n' + `User ID: ${event.target.value}\n` + 'Password (all lowercase): mrrobot8\n\n' + 'Please let me know if there are any issues.';
                          this.setState({ BLOptions: temp })
                        }}
                      >
                        {this.state.routerNumbers.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                </li>
                : null}
              {/* //============================================================= */}
              <li>
                <h5>Email this message to requester:</h5>
                <CopyToClipboard
                  text={this.state.selectedOpcoType ? this.state.selectedOpcoType.addedEmail : this.state.noOpcoSelected}
                >
                  <button>Copy</button>
                </CopyToClipboard>
              </li>
            </ol>
          </Col>
        </Row>
      </Container >
    )
  }
}
export default AddToRoadnet;