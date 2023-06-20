import React, { Component } from 'react';

export default class AddReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: '',
      cost: '',
      due: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newReminder(this.state);
    this.setState({
      bill: '',
      cost: '',
      due: '',
    });
  };

  render() {
    return (
      <>
        <div
        //style={{ marginTop: '50px' }}
        >
          <form
            onSubmit={this.handleSubmit}
            style={{
              marginBottom: '20px',
              display: 'flex',
              width: '100%',
              // justifyContent: 'space-between',
            }}
          >
            <input
              required
              placeholder="Bill Item"
              type="text"
              name="bill"
              value={this.state.bill}
              onChange={this.handleChange}
              style={{
                minWidth: '90px',
                border: 'none',
                borderBottom: '2px solid grey',
                marginRight: '2px',
              }}
            />

            <input
              type="number"
              name="cost"
              required
              placeholder="Cost"
              value={this.state.cost}
              onChange={this.handleChange}
              style={{
                minWidth: '50px',
                border: 'none',
                borderBottom: '2px solid grey',
                marginRight: '2px',
              }}
            />

            <input
              type="date"
              name="due"
              required
              value={this.state.due}
              onChange={this.handleChange}
              style={{
                minWidth: '110px',
                marginRight: '2px',
                border: 'none',
                borderBottom: '2px solid grey',
              }}
            />

            <button
              style={{
                width: '50px',
                border: 'none',
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              <span className="material-symbols-outlined">save</span>
            </button>
          </form>
        </div>
      </>
    );
  }
}
