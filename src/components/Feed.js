import React, {Component} from 'react';
import styled from 'react-emotion';
import {Post} from "./Post";
import axios from './axios'

export class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }
    async componentDidMount() {
        try {
            const response = await axios.get('/inbox');
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    }

    onSave = post => {
        const posts = [...this.state.posts];
        posts.push(post);
        this.setState({posts});
    };

    render() {
        const {posts} = this.state;
        return (
          <Wrapper>
              <Post save={this.onSave}/>
              {posts.map(p => <Block size={p.postSize} dangerouslySetInnerHTML={{ __html: p.inputText }}/>)}
          </Wrapper>
        );
    }
}

const Wrapper = styled('div')`
`;

const Block = styled('div')`
    width: 500px;
    font-family: Helvetica, Arial, sans-serif;
    line-height: 18px;
    font-size: 13px;
    color: rgba(0,0,0,0.5);
    margin: 20px;
    padding: 15px;
    border: 1px solid rgb(235, 237, 240);
    border-radius: 15px;
    overflow: hidden;
    transition: height 0.5;
`;