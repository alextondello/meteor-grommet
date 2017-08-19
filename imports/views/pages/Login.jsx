import React, { Component } from 'react';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';


export default class MyLogin extends Component {
  render() {
    return (
      <App centered={false}>
        <Split flex='left' separator={true}>
          <Article>
            <Section
              full={true}
              colorIndex='brand'
              texture='url(/img/splash.png)'
              pad='large'
              justify='center'
              align='center'
            >
              <Heading tag='h1' strong={true}>Grommet Sample</Heading>
              <Paragraph align='center' size='large'>
                Development with Grommet is cool.
              </Paragraph>
            </Section>
          </Article>
          <Sidebar justify='between' align='center' pad='none' size='large'>
            <span />
            <LoginForm
              align='start'
              logo={<Logo className='logo' colorIndex='brand' />}
              title='Grommet Sample'
              //onSubmit={this._onSubmit}
              //errors={[error]}
              usernameType='text'
            />
            <Footer
              direction='row'
              size='small'
              pad={{ horizontal: 'medium', vertical: 'small' }}
            >
              <span className='secondary'>&copy; 2017 Grommet Labs</span>
            </Footer>
          </Sidebar>
        </Split>
      </App>
    );
  }
}