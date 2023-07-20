import React from 'react';
import Layout from '../components/Layout';
import './ProjectPage.css';

function ProjectPage() {
    return (
        <>
            <Layout>
                <div className='project'>
                    <h3>Project 1</h3>
                    <p>Summary of Project 1</p>
                </div>
                <div className='project'>
                    <h3>Project 2</h3>
                    <p>Summary of Project 2</p>
                </div>
                <div className='project'>
                    <h3>Project 3</h3>
                    <p>Summary of Project 3</p>
                </div>
            </Layout>
        </>
    );
}

export default ProjectPage;