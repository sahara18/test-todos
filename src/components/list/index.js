import React, {PureComponent} from 'react';

export default class TodoList extends PureComponent {
  render() {
    const todos = this.props.data.map((todo, key) => (
      <div key={key}>
        <input
          type="checkbox"
          checked={todo.get('completed')}
          onChange={this.props.onCompletedChange.bind(this, key)}
        />

        {' '}

        <span style={{textDecoration: todo.get('completed') ? 'line-through' : 'inherit'}}>
          {todo.get('text')}
        </span>
      </div>
    ));

    return (
      <div>
        {todos}
      </div>
    );
  }
}