import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>ReactDemo2</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/ams'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-glass'></span> AMS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/isf'} activeClassName='active'>
                                <span className='glyphicon glyphicon-search'></span> ISF
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/inbond'} activeClassName='active'>
                                <span className='glyphicon glyphicon-star'></span> In Bond
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/CMSQ'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-th-large'></span> CMSQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/ABI'} activeClassName='active'>
                                <span className='glyphicon glyphicon-file'></span> ABI
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/oceanimport'} activeClassName='active'>
                                <span className='glyphicon glyphicon-download'></span> Ocean Import
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/oceanexport'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-thumbs-up'></span> Ocean Export
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/airimport'} activeClassName='active'>
                                <span className='glyphicon glyphicon-circle-arrow-right'></span> Air Import
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/airexport'} activeClassName='active'>
                                <span className='glyphicon glyphicon-circle-arrow-left'></span> Air Export
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/dispatch'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-globe'></span> Disptach
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/accounting'} activeClassName='active'>
                                <span className='glyphicon glyphicon-tasks'></span> Accounting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/reports'} activeClassName='active'>
                                <span className='glyphicon glyphicon-briefcase'></span> Reports
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/references'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-link'></span> References
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/administration'} activeClassName='active'>
                                <span className='glyphicon glyphicon-usd'></span> Administration
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/profiles'} activeClassName='active'>
                                <span className='glyphicon glyphicon-download'></span> Profiles
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </div>;
    }
}
