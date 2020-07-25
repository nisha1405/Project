import React, { Component } from 'react';
import PostData from '../data/TestJSON.json'

class PostList extends Component {
	constructor(props){
		super(props);
		this.state={
			error:null,
			products: []
		};
	}

	componentDidMount(){
		const apiUrl = 'https://drive.google.com/open?id=1xZa3UoXZ3uj2j0Q7653iBp1NrT0gKj0Y';

		fetch(apiUrl)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
				products: result
			})
			}
		)
	}

  render() {
  	const {error, products} =  this.state;
  	
  		return (
  			<div>
  			<h1></h1>
  			</div>
  	)
  		
  	}
  /*return (
    <div>
      <h1>hello</h1>
      {PostData.map((postdetails, i)=>{
      	return <h1 key={i}>{postdetails.members.real_name}</h1>
      })}
    </div>
  )
}*/
}

export default PostList;
