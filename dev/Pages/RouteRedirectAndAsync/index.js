import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import TodosReducer from './reducers/TodosReducer';


import {fetchTodosAction, addTodoAction, deleteTodoAction} from './actions';

class RouteRedirect extends React.Component{
    componentDidMount(){
        this.props.fetchTodos()
    }
    constructor(){
        super();
        this.state = {
            doRedirect: false
        }
        this.setRedirect = this.setRedirect.bind(this);
    }

    setRedirect(doRedirect){
        this.setState({doRedirect})
    }

    render(){
        const activeStyle = {
            color: 'blue'
        }
       
        return(
                      
            <div>
                RouteRedirect<br />
                
                <NavLink exact to={this.props.match.url+"/subpageA"} activeStyle = {activeStyle} >subpageA</NavLink>
                <NavLink exact to={this.props.match.url+"/subpageB"} activeStyle = {activeStyle} >subpageB</NavLink>
               
                { this.props.TodosReducer.todosLoading && <span> loading...</span> }
          
                <br /><br />
                <Route path={this.props.match.url+"/subpageA"}  render = {()=>(
                    <SubPageA {...this.props} doRedirect = {this.state.doRedirect} setRedirect = {this.setRedirect}/>
                )}  />
                <Route path={this.props.match.url+"/subpageB"}  render = {()=>(
                    <SubPageB {...this.props} setRedirect = {this.setRedirect}/>
                )}  />
     
            </div>

        )
    }
}

const SubPageA = ({addTodo, match, doRedirect,setRedirect}) => (
    doRedirect ?(
        <Redirect to={match.url+"/subpageB"}/>
    ):(  
    <div> 
      <div onClick = {()=>{
          addTodo("test");
          setRedirect(true)
        } }>add</div>
    </div>
    )
)

class SubPageB extends React.Component{   
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.setRedirect(false)
    }
    delTodo(id){

        this.props.deleteTodo(id)
    }

    render(){
        let {TodosReducer} = this.props;
        return(
            <div>       
                {TodosReducer.todos.map( (el, index)=>(
                    <div key = {el.id}>
                        {el.data} <span onClick = {this.delTodo.bind(this,index)}>
                            [del]
                        </span>
                    </div>
                ))}      
            </div>
        )
    }
}


const mapStateToProps = (state)=>( {
    TodosReducer: state.TodosReducer
});

const mapDispatchToProps = (dispatch)=>( {
    addTodo: value => { 
        dispatch( addTodoAction(value) );
    },
    fetchTodos: () => {
        dispatch( fetchTodosAction );
    },
    deleteTodo: (id) => {
        dispatch( deleteTodoAction(id) );
    }
});    

export default connect(mapStateToProps, mapDispatchToProps)(RouteRedirect);