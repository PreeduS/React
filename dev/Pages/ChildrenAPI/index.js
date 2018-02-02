import React from 'react';




class ChildrenAPI extends React.Component{
    render(){
        return(
            <Parent>
                <div>el 1</div>
                <div>el 2</div>
                <div>el 3</div>

            </Parent>
        )
    }
}
class Parent extends React.Component{
    constructor(){
        super();
        this.state = {selected: "None"};
       this.selectElement = this.selectElement.bind(this);
    }
    selectElement(selectedValue) {
        console.log('selectElement ',selectedValue )
        this.setState({selected: selectedValue});
    }

    render(){
        //let items = React.Children.map(this.props.children, child => child);
        let items = React.Children.map(this.props.children,
                child => React.cloneElement(
                    child,
                    { onClick: this.selectElement.bind(null,child.props.children) }
                )
        );

        console.log('React.Children : ', React.Children)
        console.log('items : ', items)
        return(
            <div>
                selected = {this.state.selected}
                <br />
                {items}
            </div>
        )
    }
}

export default ChildrenAPI;