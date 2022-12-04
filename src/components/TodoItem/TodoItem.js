import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkedImg from '../../assets/images/checked.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        return (
            <>
                <div onClick={onClick} className ={classNames('TodoItem', 
                    {'TodoItem_complete': item.isComplete}
                )}>
                    <div>
                        <div>
                            {
                                item.isComplete && (<img src={checkedImg} width="100%"/>)
                            }
                        </div>
                    </div>
                    <div className='context'>
                        <p>{ item.title }</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TodoItem;