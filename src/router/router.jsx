import React from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import App from '../containers/App'
import Home from '../containers/Home/index'
import List from '../containers/List/index'
import Detail from '../containers/Detail/index'

class RouteMap extends React.Component {

    updateHandle() {

        console.log('每次router变化之后都会触发')

    }

    render() {

        return (

             <BrowserRouter>
             	<Switch>
             		<Route path='/' component={Home} exact></Route>
             		<Route path='/list' component={List} exact></Route>
             		<Route path='/detail/:id' component={Detail} exact></Route>
             	    
             	</Switch>
             </BrowserRouter>

        )

    }

}

export default RouteMap



