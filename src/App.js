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

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      $(this.inputRef).datepicker('setDate', this.props.value || '');
    }
  }

  render() {
    return (
      <input
        ref={(domElement) => {
          this.inputRef = domElement;
        }}
        value={this.props.value || ''}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    );
  }
}

export default class App extends React.Component {
  state = {
    date: '1/4/2023',
  };

  ChangeDate = (date) => {
    this.setState({ date });
  };

  ResetDate = () => {
    this.setState({ date: null });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.date ? `Date: ${this.state.date}` : 'Select date'}</div>
        <div>
          <DatePicker
            value={this.state.date}
            onChange={this.ChangeDate}
            onSelect={this.ChangeDate}
          />
        </div>
        <div>
          <button onClick={this.ResetDate}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}
