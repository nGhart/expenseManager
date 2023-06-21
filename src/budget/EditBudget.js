import React, { Component } from 'react';

class EditBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: props.userInfo.bill,
      cost: props.userInfo.cost,
      due: props.userInfo.due,
      id: props.userInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEdit = (e) => {
    e.preventDefault();
    this.props.editReminder(this.state.id, this.state);
    this.setState({
      bill: '',
      cost: '',
      due: '',
    });
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleEdit}
          style={{
            marginBottom: '20px',
            display: 'flex',
            width: '100%',
            padding: '20px',
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
            Edit
            {/* <span className="material-symbols-outlined">save</span> */}
          </button>
        </form>
      </>
    );
  }
}

export default EditBudget;
