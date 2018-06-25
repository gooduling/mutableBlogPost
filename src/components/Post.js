import React, { Component } from 'react';
import styled from 'react-emotion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const range = [200,750];

export class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: props.content || '',
            postSize: 1
        };
    }
    onType = text => {
        this.setState({inputText: text,
            postSize: text.length > range[1] ? 3 : text.length > range[0] ? 2 : 1});
    };

    render() {
        const {inputText, postSize} = this.state;
        console.log('23|Post : ', this.props );
        return (
          <Wrapper size={postSize}>
              <Range range={range} length={inputText.length}/>
              {postSize === 3 ? <Editor value={inputText}
                                            onChange={this.onType}/> :
            <TextArea
                value={inputText}
                onChange={e => this.onType(e.target.value)}
                rows={postSize * 4 + (postSize - 1) * 4}
            /> }
              <span>{inputText.length}</span>
              <button onClick={() => this.props.save(this.state)}>Save</button>
          </Wrapper>
        );
    }
}
const Block = props => (
    <RangeBlock color={props.color}>

    </RangeBlock>
);
const Range = ({range: [a,b], length}) => {
    const commonSize = Math.floor(b * 1.2);
    const getPersents = n => n * 100 / commonSize;
    const aPersents = getPersents(a);
    const bPersents = getPersents(b - a);
    const cPersents = 100 - aPersents - bPersents;
    return (
        <RangeWrapper>
            <RangeBlock color='skyblue' size={'50%'} width={ aPersents + '%'}/>
            <RangeBlock color='darkblue' size={'10%'} width={bPersents + '%'}/>
            <RangeBlock color='green' size={'70%'} width={cPersents + '%'}/>
            <Filter width={getPersents(length)}/>
        </RangeWrapper>
            )
};

const Editor = styled(ReactQuill)`
    border: none;
`;
const Filter = styled('div')`
    width: ${p => p.width <100 ? p.width : 100}%;
    height: 7px;
    position: absolute;
    background-color: white;
    opacity: 0.5;
    top: 0;
    left: 0;
`;
const RangeWrapper = styled('div')`
    position: relative;
    line-height: 0; 
    `;
const RangeBlock = styled('div')`
    cursor: pointer;
    display: inline-block;
    height: 7px;
    width: ${p => p.width};
    background-color: ${p => p.color};
    position: relative;
`;

const TextArea = styled('textarea')`
    border: none;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    resize: none;
    font-family: Helvetica, Arial, sans-serif;
    line-height: 18px;
    font-size: 13px;
    color: rgba(0,0,0,0.5);
    
    &:focus {
        box-shadow: none;
        border: none;
        outline: none;
    }
`;

const Wrapper = styled('div')`
    width: 500px;
    font-size: 14px;
    margin: 20px;
    border: 1px solid ${p => p.size === 1 ? 'skyblue' : p.size === 2 ? 'blue' : 'green'};
    border-radius: 3px;
    overflow: hidden;
    border-top: none;
    color: rgba(0,0,0,0.5);
    text-align: center;
`;