import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tree from 'react-animated-tree';
import './tree.css';
// images
const treeStyles = {
    color: 'black',
    fill: 'black',
    width: '100%',
    background: '#cdd1d9'
  }
  
  const typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle'
  }
// Timeline component
const ChannelTree = () => {
  return (
    <React.Fragment>
        <Tree content="Channel Partners" open visible style={treeStyles}>
            <Tree content="Autohub">
                <Tree content="Channel Partner" />
                <Tree content="Garage" />
            </Tree>
            <Tree content="Classbook">
                <Tree content="Student" />
                <Tree content="Class" />
                <Tree content="Teacher" />
                <Tree content="Career Expert" />
                <Tree content="Schools" />

            </Tree>
        </Tree>
    </React.Fragment>
  );
};

export default ChannelTree;
