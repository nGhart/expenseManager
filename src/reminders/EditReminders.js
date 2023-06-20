import React, { Component } from 'react';

class EditReminders extends Component {
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
    this.props.editContact(this.state.id, this.state);
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
        <form onSubmit={this.handleEdit}>
          <div className="main">
            <div>
              <label>Bill Item </label>
              <input
                type="text"
                name="bill"
                value={this.state.bill}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Cost </label>
              <input
                className=".to-do-input"
                placeholder="Cost"
                type="number"
                name="cost"
                value={this.state.cost}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Due On </label>
              <input
                type="date"
                name="due"
                value={this.state.due}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="button">Save</button>
        </form>
      </>
    );
  }
}

export default EditReminders;
