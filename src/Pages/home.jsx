import React from 'react'
import "./home.scss"
import Widget from '../Components/Widget/Widget';
import Featured from '../Components/Featured/Featured';
import Chart from '../Components/Charts/Charts';
import Progress from '../Components/LinearProg/LinearProg';
import List from '../Components/ListComponent/ListComponents';

const Volunteers = [
    {
      name: 'Ant Design Title 1',
      location: 'location1',
    },
    {
      name: 'Ant Design Title 2',
      location: 'location2',
    },
    {
      name: 'Ant Design Title 3',
      location: 'location3',
    },
    {
      name: 'Ant Design Title 4',
      location: 'location4'
    },
  ];

const Location = [
    {
        location: 'location1',
        held: '50',  // held = % of session held
    },
    {
        location: 'location1',
        held: '80',
    },
    {
        location: 'location1',
        held: '30',
    },
    {
        location: 'location1',
        held: '60',
    },
    {
        location: 'location1',
        held: '10',
    },
]

const Users = [
    {
        totalStudents: '576',
        totalVolunteers: '76',
        totalMentors: '68',
        totalSessions: '115'
    }
]


const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="widgets">
                    <Widget title="Students Enrolled" link="view" count="576" icon=""/>
                    <Widget title="Volunteers joined" link="view" count="76" icon=""/>
                    <Widget title="Mentors" link="view" count="68" icon=""/>
                    <Widget title="Locations" link="view" count="4" icon=""/>
                    <Widget title="Add Location" link="" icon=""/>
                </div>

                <div className="charts">
                    <Featured sessionCount="453" desc="successfully conducted" studentAttendence="78" TodayAttendence="67" WeeklyAttendence="552" MonthlyAttendence="3452" />
                    <Chart title="Monthly Attendance" aspect={2 / 1}/>
                </div>
                <div className="content3">
                    <div className="progression">
                        <div className='title'>Sessions Held</div>
                        { Location.map((e) => (
                            <Progress location={e.location} done={e.held}/> //done = % of session held at particular location
                        ))};
                    </div>
                    <div className="listSection">
                    <div className='title'>Top Performer</div>

                        { Volunteers.map((e) => (
                            <List name={e.name} location={e.location} />
                          
                        ))};

                    </div>
                </div>

            </div>
      </div>
    );
  };

export default Home