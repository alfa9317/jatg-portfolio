import React from "react";
import "./style.css";
import {makeStyles} from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import Grid from '@material-ui/core/Grid';
import { Card, Row, Col } from 'antd';

const useStyles = makeStyles(theme => ({
    httpIcon: {
        fontSize: '3.5em',
        color: theme.palette.common.darkBlue
    },
    gitIcon: {
        fontSize: '2em',
        color: theme.palette.common.darkBlue
    }
}))

function InfoCard (props) {

    const classes = useStyles();

    return (

            <Card title={props.name} align='start' style={{margin:'20px 0 20px 0',boxShadow: '0px 1px 4px 0px #888888'}}
                extra={
                        <Grid container spacing={3} direction="row" alignItems="center">
                            <Grid item component={'a'} href={props.url} target="_blank" rel="noopener noreferrer">
                                <HttpIcon className={classes.httpIcon}/>
                            </Grid>
                            <Grid item component={'a'} href={props.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className={classes.gitIcon}/>
                            </Grid>
                        </Grid>
                    }
            >
                <Row gutter={[16,24]}>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 8}} lg={{span: 6}} xl={{span: 6}}>
                        <img alt= 'project' src={props.image} style={{width:'100%', height:'auto'}}/>
                    </Col>
                    <Col xs={{span: 22}} sm={{span: 22}} md={{span: 12, offset:2}} lg={{span: 15, offset:2}} xl={{span: 15, offset:1}} >
                        <p>{props.description}</p>
                    </Col>
                </Row>
            </Card>
    );
}

export default InfoCard;

// [<a href={props.url} target="_blank" rel="noopener noreferrer"><HttpIcon className={classes.icons}/> </a>,
// <a href={props.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> </a>]