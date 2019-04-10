import React from "react";
import { List, Modal, Grid, Button } from "semantic-ui-react";


class ModalModalExample extends React.Component {
  state = {
    open: false
  }

  handleOnOpen = () => {
    this.setState({
      open: true
    })
  }

  handleOnClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <List divided relaxed>
          <List.Item>
            <List.Icon name="home" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a" onClick={this.handleOnOpen}>Insurance contract number: 10</List.Header>
              <List.Description as="a">Created: 10.10.2019</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="building" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Insurance contract number: 10</List.Header>
              <List.Description as="a">Created: 10.10.2019</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="home" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Insurance contract number: 10</List.Header>
              <List.Description as="a">Created: 10.10.2019</List.Description>
            </List.Content>
          </List.Item>
        </List>

        <Modal open={this.state.open} onClose={this.handleOnClose}>
        <Modal.Header>Insurance contract number: {10}</Modal.Header>
        <Modal.Content>
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column>
                <p>Tipe of property:</p>
                <p>City:</p>
                <p>Street:</p>
                <p>House number:</p>
                <p>Appartment number:</p>
                <p>Cost:</p>
                <p>Date start of agreement:</p>
                <p>Date end of the agreement:</p>
                <p>Date of application:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Appartment</p>
                <p>Moscow</p>
                <p>Bolshevikov street</p>
                <p>23</p>
                <p>104</p>
                <p>10.000.000 Rub</p>
                <p>10.12.2018</p>
                <p>10.12.2019</p>
                <p>05.12.1018</p>
              </Grid.Column>

              <Grid.Column>
                <p>Name:</p>
                <p>Surname:</p>
                <p>Last name:</p>
                <p>Passport seria:</p>
                <p>Passport number:</p>
                <p>Passport issue date:</p>
                <p>Passport issued by:</p>
                <p>Phone nubmer:</p>
                <p>Email:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Huan</p>
                <p>Andreas</p>
                <p>Pereiro</p>
                <p>2025</p>
                <p>102030</p>
                <p>03.05.1990</p>
                <p>Department number: 10</p>
                <p>8-800-555-35-35</p>
                <p>big_huan@gamil.com</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

        <Modal.Actions>
        <Button
            negative
            icon="close"
            labelPosition="right"
            content="Reject"
          />
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Accept"
          />
        </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalModalExample