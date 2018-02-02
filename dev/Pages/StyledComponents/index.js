import React from 'react';
import styled from 'styled-components';

class StyledComponents extends React.Component{
    render(){
        return <div>
            on StyledComponents
            <Title underline color="blue"> styled div </Title>
            <ChildTitle underline color="green"> 
                styled div <div>div</div>
             </ChildTitle>        
            <SomeComponentStyled someProp = "someData"/>
            <SomeComponentStyledWithA someProp = "someData">wat </SomeComponentStyledWithA>
        </div>
    }
}

const Title = styled.div`
    color:${props=>props.color};
    text-decoration:${props => props.underline ? `underline` : `none`};
`;

const ChildTitle = Title.extend`
    padding-left:5px;
    &:hover{
        padding-left:15px;
    }
    > div{ color:red; }
`;
/*
const ChildTitle2 = styled.div.attrs({
    paddingLeft : '15px;'
})`
    padding-left:${props =>props.paddingLeft }
`;*/

const SomeComponent = ({className,...props}) => (
    <div className = {className}> on SomeComponent,  {JSON.stringify(props)} </div>
);
const SomeComponentStyled = styled(SomeComponent)`
    color: green;
`;

const SomeComponentStyledWithA = SomeComponentStyled.withComponent('a');

export default StyledComponents;