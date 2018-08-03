import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'

class Blog extends Component {

	state = {
		auth: false
	};

	render () {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									exact
									activeClassName= 'aktywny'
									to="/posts">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true'
									}}
									activeClassName= 'aktywny2'
									activeStyle = {{
										color: '#fa923f',
										textDecoration: 'underline'
									}}>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					{ this.state.auth ? <Route path = "/new-post" component = {NewPost}/> : null }
					<Route path = "/posts" component = {Posts}/>
					{/*<Redirect from='/' to='/posts'/>*/}
					<Route render = {() => <h1>Page not found</h1>} />
				</Switch>
			</div>
		);
	}
}

export default Blog;