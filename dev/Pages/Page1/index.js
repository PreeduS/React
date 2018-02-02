import React from 'react';
import PropTypes from 'prop-types';

class Page1 extends React.Component{

    render(){

        return(
            <div>
                Page1 proptypes... <br />

                <PropsTest pr1 = { undefined} pr2 = {''} pr3 = '123'
                           pr4 = { {propA: true, propB: ()=>null } }
                           pr5 = { <div>...</div>}
                />
            </div>

        )
    }
}





class PropsTest extends React.Component{

    render(){
        return (
            <div>
                PropsTest pr1 = {this.props.pr1} <br />
                PropsTest pr2 = {this.props.pr2} <br />
                PropsTest pr3 = {this.props.pr3} <br />
                PropsTest pr4 = {JSON.stringify(this.props.pr4)}

            </div>
        )

    }
}

PropsTest.propTypes = {
    pr1 : PropTypes.string,
    pr2 : PropTypes.any.isRequired,
    pr3 : (props, propName, componentName) =>{
        console.log(props, propName, componentName)
        if( props[propName].length < 3 ){
            return new Error('Min len:3 ');
        }
    },
    pr4 : PropTypes.shape({
        propA: PropTypes.bool,
        propB: PropTypes.func
    }),
    pr5 : PropTypes.element
}
PropsTest.defaultProps = {
    pr1 : 'default pr1'
}



export default Page1;