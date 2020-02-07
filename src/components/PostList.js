import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component{
  state = {
    newPost: '',
    posts:[]
  };

  // Executado assim que o componente aparece em tela
  componentDidMount(){
    const posts = localStorage.getItem('posts');

    if(posts){
      this.setState({posts: JSON.parse(posts)});
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState){
    if(prevState.posts !== this.state.posts){
      localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }
  }

  handleInputChange = e => {
    this.setState({newPost: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      techs: [...this.state.posts, this.state.newPost],
      newTech: '' 
    });
  };

  handleDelete = (tech) => {
    this.setState({
      posts: this.state.posts.filter(p => p !== post)
    });
  };

  render(){
  }
}

export default PostList;