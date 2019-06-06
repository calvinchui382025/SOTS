import React from 'react';
import axios from 'axios';
//=============================================================
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
//=============================================================
class MirrorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromProfile: '',
      fromProfileExists: false,
      copiedFiles: [],
    };
    this.fromProfileChecker = this.fromProfileChecker.bind(this);
    this.mirrorProfile = this.mirrorProfile.bind(this);
  }
  //=============================================================
  componentDidMount() {
    console.log(this.props.file);
  }
  fromProfileChecker(input) {

    if (this.props.filter((item) => item.split(' ')[0] === input).length === 1) {
      this.setState({
        fromProfileExists: true,
        fromProfile: input
      })
    }
  }
  mirrorProfile() {
    this.setState({
      loading: true,
      copiedFiles: [],
    })
    axios.post('/mirrorProfile', {
      data: {
        toProfile: this.props.userId,
        fromProfile: this.state.fromProfile,
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  //=============================================================
  render() {
    return (
      <div style={{ margin: 20 }}>
        <h2>
          Mirror Profile Configs
          </h2>
        {
          this.props.userId === '' || this.props.userOpCo === null ?
            <h2 style={{ color: 'red' }}>Please enter the Caller ID</h2>
            :
            <Form>
              <FormControl
                type='text'
                placeholder="User ID to mirror from"
                style={{ width: 350 }}
                onChange={(input) => {
                  this.fromProfileChecker(input.target.value);
                }}
              />
            </Form>
        }
        {
          this.props.userId !== '' && this.state.fromProfile.length === 8 ?
            <h4>Copy profile from {this.state.fromProfile} to {this.props.userId}</h4>
            : null
        }
        {
          this.props.userId.length > 0 && this.state.fromProfile.length > 0 ?
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                this.mirrorProfile();
              }}
            >Confirm</Button>
            : null
        }
      </div>
    )
  }
}
export default MirrorProfile;