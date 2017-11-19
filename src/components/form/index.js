import React, {PureComponent} from 'react';
import {autobind} from 'core-decorators';

export default class TodoForm extends PureComponent {
  @autobind
  handleTextChange(e) {
    this.props.onTextChange(e.target.value);
  }

  @autobind
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
    this.props.onTextChange('');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.props.text}
          onChange={this.handleTextChange}
        />

        <button>Submit</button>
      </form>
    );
  }
}