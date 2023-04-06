import React from 'react';
import './style.css';

class DatePicker extends React.Component {
  inputRef = null;

  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: this.props.onSelect,
    });
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  componentDidChange(oldProps) {
    if (this.props.value !== oldProps.value) {
      $(this.inputRef).datepicker('setDate', this.props.value || '');
    }
  }

  render() {
    return (
      <input
        ref={(domElement) => {
          this.inputRef = domElement;
        }}
        onChange={(e) => this.props.onChange(e.target.value)}
        value={this.props.value || ''}
      />
    );
  }
}

export default class App extends React.Component {
  state = {
    date: '1/4/2023',
  };

  ResetDate = () => {
    this.setState({ date: '' });
  };

  ChangeDate = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}
        </div>
        <div>
          <DatePicker
            onChange={this.ChangeDate}
            onSelect={this.ChangeDate}
            value={this.state.date}
          />
        </div>
        <div>
          <button onClick={this.ResetDate}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}
