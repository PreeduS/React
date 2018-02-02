import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './index.scss';

class TransitionTest extends React.Component{
    constructor(){
        super();
        this.state = {
            show : true,
            list: [
                {id: 1 , val: 'el 1'},
                {id: 2 , val: 'el 2'},
                {id: 3 , val: 'el 3'}
            ]
        }

        this.remove = this.remove.bind(this);
        this.push = this.push.bind(this);

    }

    push(){
        let list = this.state.list;
        let lastId = list.length ? list[list.length-1].id +1 : 1;

        let newList = [
            ...this.state.list,
            {id: lastId, val: 'el '+lastId}
        ]
        this.setState( {list : newList} )
    }

    remove(index){
        let newList = [...this.state.list];
        newList.splice(index,1)
        this.setState( {list : newList} )
    }

    render(){
        return(
            <div>
                <div onClick = {this.push}>Add</div><br />

                    <TransitionGroup>
                        {this.state.list.map( (el,index) =>
                            <CSSTransition
                                key = {el.id}
                                timeout = {500}
                                classNames = {{
                                     enter: styles.fadeEnter,
                                     enterActive: styles.fadeEnterActive,
                                     exit: styles.fadeExit,
                                     exitActive: styles.fadeExitActive
                                }}
                            >
                                <div className = {styles.fadeEl}  onClick = {this.remove.bind(null,index)} >
                                    {el.val}
                                </div>

                            </CSSTransition>
                        )}
                    </TransitionGroup>

            </div>

        )
    }

}

export default TransitionTest;