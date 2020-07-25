import React, { Component } from 'react';
import PostData from '../data/TestJSON.json'

class PostList extends Component {



  render() {
  return (
    <div className="background">
      <h1 className="heading1">List Of Members</h1>

      {
      	PostData.map((postdetails, index)=>{
      	return (
      	<div>
      	   <table className="data_table">
      	   	<thead>
      	   		<th>ID</th>
      	   		<th>Name</th>
      	   		<th>TZ</th>
      	   		<th>Activity Period</th>
      	   	</thead>
      	   	<tbody>
      	   	<tr>
	      	   	<td>{postdetails.id}</td>

	      	   	<td>{postdetails.real_name}</td>

	      	   	<td>{postdetails.tz}</td>

	      	   	<td>
	      	   		<tr>
	      	   		<th>Start Time:</th><td> {postdetails.activity_periods[index].start_time}</td>
	      	   		<th>End Time:</th><td>{postdetails.activity_periods[index].end_time}</td>
	      	   		</tr>
	      	   	</td>
	      	</tr>
      	   	</tbody>
      	   </table>
      	  
      	</div>
      	)
      })

  }

    </div>
  )
}
}

export default PostList;
