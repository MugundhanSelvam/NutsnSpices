import React, { Component } from 'react'
import Axios from 'axios';
import Style from '../Css/Register.module.css';
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';

export default class Register extends Component {

    componentDidMount(){

        $('.visiblityp').on('click', function(){
            $('.password').prop('type','text');
            $(this).hide();
            $('.visiblityoffp').show();
            
        });
        $('.visiblityoffp').on('click', function(){
            $('.password').prop('type','password');
            $(this).hide();
            $('.visiblityp').show();
        });

        $('.visiblityc').on('click', function(){
            $('.cpassword').prop('type','text');
            $(this).hide();
            $('.visiblityoffc').show();
        });
        $('.visiblityoffc').on('click', function(){
            $('.cpassword').prop('type','password');
            $(this).hide();
            $('.visiblityc').show();
        });

        $('.password').on('keyup', function(){
            console.log($(this).val());
            if($(this).val() === '')
            {
                $('.cgroup').hide(300);
            }
            else
            {
                $('.cgroup').show(300);
            }
        });

    }

    render() {
        return (
            <div className='container-fluid' id={Style.register}>
                <div className='container' id={Style.register_block}>
                    <div id={Style.brand} className='mb-4'>
                        <p className='text-center'>Nuts 'n' Spices</p>
                    </div>
                    <div className='form p-4' id={Style.form}>
                        <div id={Style.register_caption} className='mb-4'>
                            <p className='text-center'>Sign <span className='py-2 px-3'>Up</span></p>
                        </div>
                        <div id={Style.register_inputs}>
                            <div className='form-group' id={Style.email}>
                                <AlternateEmailIcon />
                                <input className='form-control' type='text' placeholder='Email Address' />
                            </div>
                            <div className='form-group' id={Style.name}>
                                <PersonIcon />
                                <input className='form-control' type='text' placeholder='Full Name' />
                            </div>
                            <div className='form-group' id={Style.password}>
                                <LockIcon />
                                <input className='form-control password' type='password' placeholder='Password' />
                                <VisibilityIcon className='visiblityp' />
                                <VisibilityOffIcon style={{display:'none'}} className='visiblityoffp'/>
                            </div>
                            <div className='form-group cgroup' id={Style.password} style={{display:'none'}}>
                                <LockIcon />
                                <input className='form-control cpassword' type='password' placeholder='Confirm Password' />
                                <VisibilityIcon className='visiblityc' />
                                <VisibilityOffIcon style={{display:'none'}} className='visiblityoffc'  />
                            </div>
                            <div className='form-group'>
                                <Button id={Style.btn} class='btn btn-block btn-primary mb-2'><span>Sign Up</span></Button>
                                <p id={Style.login}>Already have Account ? <Link to='/Login'>Log In</Link></p>
                            </div>
                        </div>
                        <div id={Style.footer} className='mt-2'>
                            <p className='text-center'>Nuts 'n' Spices</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
