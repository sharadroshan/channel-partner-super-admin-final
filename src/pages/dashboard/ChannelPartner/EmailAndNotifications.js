import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';


function ControlledTabsExample() {
  const [key, setKey] = useState('channelpartner');
  const [keyInner, setKeyInner] = useState('tab1');

  return (
    <Card>
        <Card.Body>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab eventKey="channelpartner" title="Channel partner" className='p-0'>
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Channel partner
                </h5>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={keyInner}
                        onSelect={(k) => setKeyInner(k)}
                        >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="garages" title="Garages">
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Garages
                </h5>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={keyInner}
                    onSelect={(k) => setKeyInner(k)}
                    >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="classes" title="Classes">
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Classes
                </h5>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={keyInner}
                    onSelect={(k) => setKeyInner(k)}
                     >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="teachers" title="Teachers">
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Teachers
                </h5>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={keyInner}
                    onSelect={(k) => setKeyInner(k)}
                     >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="careerexperts" title="Career Experts">
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Career Experts
                </h5>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={keyInner}
                    onSelect={(k) => setKeyInner(k)}
                     >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="schools" title="Schools">
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Schools
                </h5>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={keyInner}
                    onSelect={(k) => setKeyInner(k)}
                     >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="students" title="Students">
                <h5 className="text-dark d-flex justify-content-between align-items-center font-24 mt-0">
                Students
                </h5>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={keyInner}
                    onSelect={(k) => setKeyInner(k)}
                     >
                        <Tab eventKey="tab1" title="Email" className='p-0'>
                            <Tab1 />
                        </Tab>
                        <Tab eventKey="tab2" title="Sms">
                            <Tab2 />
                        </Tab>
                        <Tab eventKey="tab3" title="Notifications">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Tab>
            </Tabs>
            
        </Card.Body>
    </Card>
  );
}

export default ControlledTabsExample;