import React from 'react'
// import Cards from './components/cards/cards';
// import Chart from './components/chart/chart';
// import Country from './components/country/country';
import { Cards, Chart ,Country} from './components'
import Style  from './app.module.css';
import { Fetchdata } from './api';
import Coronaimage from './image/coronavirus_logo-2-833x321.jpg';
import Footer from './components/footer/footer';
import OutsideLinks from "./components/OutsideLinks/OutsideLinks";

class App extends React.Component{
    state ={
        data : {},
        country:''
    }

    async componentDidMount(){
        const fetchdata = await Fetchdata();
        this.setState({data : fetchdata})
    }

    Hnadlecountryname = async(country)=>{
        const fetchdata = await Fetchdata(country);
        this.setState({data :fetchdata,country:country})
    }

    render(){
        const {data,country} = this.state;
        return(
            <div className = {Style.container}>
                <img className={Style.image} src={Coronaimage} alt="covid-19" />
                <Cards data={data}/>
                <Country Hnadlecountryname ={this.Hnadlecountryname}/>
                <Chart data={data} country={country}/>
                <OutsideLinks />
                <Footer />
            </div>
        )
    }
}

export default App;