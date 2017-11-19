import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoList from 'components/list';
import TodoForm from 'components/form';

import {addTodo, changeTodoStatus} from 'models/list';
import {changeText} from 'models/form';

function mapState(state) {
  return {
    data: state.list,
    text: state.form.get('text')
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({addTodo, changeTodoStatus, changeText}, dispatch);
}

@connect(mapState, mapDispatch)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TodoForm
          text={this.props.text}
          onSubmit={this.props.addTodo}
          onTextChange={this.props.changeText}
        />

        <TodoList
          data={this.props.data}
          onCompletedChange={this.props.changeTodoStatus}
        />
      </div>
    );
  }
}